import _ from './ENV/Lodash.mjs'
import $Storage from './ENV/$Storage.mjs'
import ENV from "./ENV/ENV.mjs";
import URL from "./URL/URL.mjs";

import Database from "./database/BiliIntl.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENV("📺 BiliIntl: ⚙️ Enhanced v0.2.0(1) response.beta");

/***************** Processing *****************/
// 解构URL
const url = new URL($request.url);
$.log(`⚠ url: ${url.toJSON()}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = url.hostname, PATH = url.pathname;
$.log(`⚠ METHOD: ${METHOD}, HOST: ${HOST}, PATH: ${PATH}` , "");
// 解析格式
const FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ FORMAT: ${FORMAT}`, "");
!(async () => {
	// 读取设置
	const { Settings, Caches, Configs } = setENV("BiliIntl", "Enhanced", Database);
	$.log(`⚠ Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 创建空数据
			let body = { "code": 0, "message": "0", "data": {} };
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				default:
					break;
				case "application/x-mpegURL":
				case "application/x-mpegurl":
				case "application/vnd.apple.mpegurl":
				case "audio/mpegurl":
					//body = M3U8.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = M3U8.stringify(body);
					break;
				case "text/xml":
				case "text/html":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					//body = XML.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = XML.stringify(body);
					break;
				case "text/vtt":
				case "application/vtt":
					//body = VTT.parse($response.body);
					//$.log(`🚧 body: ${JSON.stringify(body)}`, "");
					//$response.body = VTT.stringify(body);
					break;
				case "text/json":
				case "application/json":
				body = JSON.parse($response.body ?? "{}");
					// 解析链接
					switch (HOST) {
						case "app.biliintl.com":
							// 先保存一下AccessKey
							/*
							if (url.searchParams.has("access_key")) {
								let newCaches = $Storage.getItem("@BiliIntl.Global.Caches", {});
								newCaches.AccessKey = url.searchParams.get("access_key"); // 总是刷新
								$.log(`newCaches = ${JSON.stringify(newCaches)}`);
								let isSave = $.setjson(newCaches, "@BiliIntl.Global.Caches");
								$.log(`$.setjson ? ${isSave}`);
							};
							*/
							switch (PATH) {
								case "/intl/gateway/v2/app/resource/show/tab": // 首页-Tab
									// 底部导航栏
									body.data.bottom = Configs.Tab.bottom.map(bottom => {
										// 标签栏
										bottom.tab = bottom.tab.map(tab => {
											switch (tab.tab_id) {
												case "home":
													if (Settings.Home.Tab_default == tab.tab_id) tab.default_selected = 1;
													if (Settings.Home.Tab.includes(tab.tab_id)) return tab;
													break;
												case "following":
													if (Settings.Following.Tab_default == tab.tab_id) tab.default_selected = 1;
													if (Settings.Following.Tab.includes(tab.tab_id)) return tab;
											};
										}).filter(Boolean);
										if (Settings.Bottom.includes(bottom.tab_id)) return bottom;
									}).filter(Boolean).map((bottom, i) => {
										bottom.pos = i + 1;
										return bottom;
									});
									break;
							};
							break;
					};
					$response.body = JSON.stringify(body);
					break;
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "application/octet-stream":
					//$.log(`🚧 $response.body: ${JSON.stringify($response.body)}`, "");
					let rawBody = $.isQuanX() ? new Uint8Array($response?.bodyBytes ?? []) : $response?.body ?? new Uint8Array();
					//$.log(`🚧 isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`, "");					
					/******************  initialization start  *******************/
					/******************  initialization finish  *******************/
					// 写入二进制数据
					if ($.isQuanX()) $response.bodyBytes = rawBody
					else $response.body = rawBody;
					break;
			};
			break;
		case false:
			$.log(`⚠ 功能关闭`, "");
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done($response))
