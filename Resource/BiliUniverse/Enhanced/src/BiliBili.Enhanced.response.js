import _ from './ENV/Lodash.mjs'
import $Storage from './ENV/$Storage.mjs'
import ENV from "./ENV/ENV.mjs";
import URL from "./URL/URL.mjs";

import Database from "./database/BiliBili.mjs";
import setENV from "./function/setENV.mjs";

const $ = new ENV("📺 BiliBili: ⚙️ Enhanced v0.4.0(1) response");

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
	const { Settings, Caches, Configs } = setENV("BiliBili", "Enhanced", Database);
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
						break;
				case "text/xml":
				case "text/html":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					break;
				case "text/vtt":
				case "application/vtt":
					break;
				case "text/json":
				case "application/json":
					body = JSON.parse($response.body ?? "{}");
					// 解析链接
					switch (HOST) {
						case "www.bilibili.com":
							break;
						case "app.bilibili.com":
						case "app.biliapi.net":
							// 先保存一下AccessKey
							/*
							if (url.searchParams.has("access_key")) {
								let newCaches = $.getjson("@BiliBili.Global.Caches", {});
								newCaches.AccessKey = url.searchParams.get("access_key"); // 总是刷新
								$.log(`newCaches = ${JSON.stringify(newCaches)}`);
								let isSave = $.setjson(newCaches, "@BiliBili.Global.Caches");
								$.log(`$.setjson ? ${isSave}`);
							};
							*/
							switch (PATH) {
								case "/x/resource/show/tab/v2": // 首页-Tab
									// 顶栏-左侧
									body.data.top_left = Configs.Tab.top_left[Settings.Home.Top_left];
									// 顶栏-右侧
									body.data.top = Configs.Tab.top.map(e => {
										if (Settings.Home.Top.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e, i) => {
										e.pos = i + 1;
										return e;
									});
									// 标签栏
									body.data.tab = Configs.Tab.tab.map(e => {
										if (Settings.Home.Tab.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e, i) => {
										if (Settings.Home.Tab_default == e.tab_id) e.default_selected = 1;
										e.pos = i + 1;
										return e;
									});
									// 底部导航栏
									body.data.bottom = Configs.Tab.bottom.map(e => {
										if (Settings.Bottom.includes(e.tab_id)) return e;
									}).filter(Boolean).map((e, i) => {
										e.pos = i + 1;
										return e;
									});
									break;
								case "/x/resource/show/tab/bubble": // 首页-Tab-?
									break;
								case "/x/v2/account/mine": // 账户信息-我的
									body.data.sections_v2 = Configs.Mine.sections_v2.map(e => {
										switch (e.title) {
											case "创作中心":
												e.items = e.items.map(item => {
													if (Settings.Mine.CreatorCenter.includes(item.id)) return item;
												}).filter(Boolean);
												break;
											case "推荐服务":
												e.items = e.items.map(item => {
													if (Settings.Mine.Recommend.includes(item.id)) return item;
												}).filter(Boolean);
												break;
											case "更多服务":
												e.items = e.items.map(item => {
													if (Settings.Mine.More.includes(item.id)) return item;
												}).filter(Boolean);
												break;
										};
										if (!e.items.some(() => true)) e = {};
										return e;
									});
									break;
								case "/x/v2/account/mine/ipad": // 账户信息-我的(pad)
									body.data.ipad_upper_sections = Configs.Mine.ipad_upper_sections.map(item => {
										if (Settings.Mine.iPad.Upper.includes(item.id)) return item;
									}).filter(Boolean);
									body.data.ipad_recommend_sections = Configs.Mine.ipad_recommend_sections.map(item => {
										if (Settings.Mine.iPad.Recommend.includes(item.id)) return item;
									}).filter(Boolean);
									body.data.ipad_more_sections = Configs.Mine.ipad_more_sections.map(item => {
										if (Settings.Mine.iPad.More.includes(item.id)) return item;
									}).filter(Boolean);
									break;
								case "/x/v2/region/index":
								case "/x/v2/channel/region/list": // 分区页面-索引
									body.data.push(...Configs.Region.index, ...Configs.Region.modify); // 末尾插入全部分区
									//$.log(JSON.stringify(body.data));
									body.data = uniqueFunc(body.data, "tid"); // 去重
									//$.log(JSON.stringify(body.data));
									body.data = body.data.sort(compareFn("tid")); // 排序
									//$.log(JSON.stringify(body.data));
									body.data = body.data.map(e => { // 过滤
										if (Settings.Region.Index.includes(e.tid)) return e;
									}).filter(Boolean);
									//$.log(JSON.stringify(data));

									switch (PATH) { // 特殊处理
										case "/x/v2/region/index":
											break;
										case "/x/v2/channel/region/list":
											body.data = body.data.map(e => {
												if (e.goto == "0") e.goto = "";
												delete e.children;
												delete e.config;
												return e;
											});
											break;
									};

									function uniqueFunc(array, property) { // 数组去重
										const res = new Map();
										return array.filter((item) => !res.has(item[property]) && res.set(item[property], 1));
									};

									function compareFn(property) { // 比较函数
										return function (m, n) {
											var a = m[property];
											var b = n[property];
											return a - b; // 升序
										}
									};
									break;
							};
							break;
						case "api.bilibili.com":
						case "api.biliapi.net":
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
					let rawBody = $.isQuanX() ? new Uint8Array($response?.bodyBytes ?? []) : $response?.body ?? new Uint8Array();
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
