/* 
🎵酷我音乐 v1.6.1
🥳脚本功能:  
  ✅每日小说
  ✅每日签到
  ✅每日听歌
  ✅每日收藏
  ✅创意视频
  ✅免费抽奖
  ✅视频抽奖
  ✅惊喜任务
  ✅定时宝箱
  ✅补领宝箱
  ✅资产查询
🎯重写脚本:
  [rewrite local]
  https\:\/\/integralapi\.kuwo\.cn\/api\/v1\/online\/sign\/v1\/earningSignIn\/.* url script-request-header https://raw.githubusercontent.com/MCdasheng/QuantumultX/main/Scripts/myScripts/kuwo.cookie.js
  [MITM]
  hostname = integralapi.kuwo.cn
⏰定时任务:
  [task_local]
  30 10,20 * * * https://raw.githubusercontent.com/MCdasheng/QuantumultX/main/Scripts/myScripts/kuwo.js, tag=🎵酷我音乐, img-url=https://raw.githubusercontent.com/deezertidal/private/main/icons/kuwosvip.png, enabled=true
🔍手动抓包: 
  开启抓包,进入任务界面
  直接搜索请求🔗url中的 loginUid loginSid 填入BoxJs
  🔗url: https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/..loginUid=xxx & loginSid=xxx...
📦BoxJs地址:
  https://raw.githubusercontent.com/MCdasheng/QuantumultX/main/mcdasheng.boxjs.json
@params: 
  "kw_loginUid" 
  "kw_loginSid" (过期时间不清楚,抓包写一个月,但是失效可能也很快,待解决?)
@tips:
  酷我程序员把 lottery 写成 loterry 了,我说怎么报错呢😅
*/

const $ = new Env("酷我音乐");

const loginUid = $.getdata("kw_loginUid");
const loginSid = $.getdata("kw_loginSid");

if (loginUid == "" || loginSid == "") {
  $.log("⚠️用户信息不全,请获取或填入信息!");
  $.msg($.name, "⚠️用户信息不全,请获取或填入信息!");
  $.done();
}

const kw_headers = {
  Host: "integralapi.kuwo.cn",
  Origin: "https://h5app.kuwo.cn",
  Connection: "keep-alive",
  Accept: "application/json, text/plain, */*",
  "User-Agent":
    " Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 KWMusic/10.5.3.0 DeviceModel/iPhone13,2 NetType/WIFI kuwopage",
  "Accept-Language": " zh-CN,zh-Hans;q=0.9",
  Referer: "https://h5app.kuwo.cn/",
  "Accept-Encoding": "gzip, deflate, br",
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 KWMusic/10.5.3.0 DeviceModel/iPhone13,2 NetType/WIFI kuwopage",
};

$.notifyMsg = [];

(async () => {
  await novel();
  await mobile();
  await collect();
  await box();
  await loterry_free();
  await loterry_free();
  await new_sign();
  await sign();
  await sign();
  await sign();
  for (var i = 0; i < 20; i++) {
    await video(); // 20次
  }
  for (var i = 0; i < 10; i++) {
    await surprise(); //10次
    await loterry_video(); // 8次
  }
})()
  .catch((e) => $.logErr(e))
  .finally(async () => {
    var asset = await getAsset();
    $.msg($.name, asset, $.notifyMsg.join("\n"));
    $.done();
  });

async function novel() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=${loginUid}&loginSid=${loginSid}&from=novel&goldNum=18`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行每日小说任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉每日小说: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢每日小说: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴每日小说: ${desc}`;
      else desc = `⚠️每日小说: ${desc}`;
    } else {
      desc = `❌每日小说: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function mobile() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=${loginUid}&loginSid=${loginSid}&from=mobile&goldNum=18`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行每日听歌任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉每日听歌: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢每日听歌: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴每日听歌: ${desc}`;
      else desc = `⚠️每日听歌: ${desc}`;
    } else {
      desc = `❌每日听歌: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function collect() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=${loginUid}&loginSid=${loginSid}&from=collect&goldNum=18`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行每日收藏任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉每日收藏: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢每日收藏: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴每日收藏: ${desc}`;
      else desc = `⚠️每日收藏: ${desc}`;
    } else {
      desc = `❌每日收藏: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function video() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=${loginUid}&loginSid=${loginSid}&from=videoadver&goldNum=58`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行创意视频任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉创意视频: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢创意视频: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴创意视频: ${desc}`;
      else desc = `⚠️创意视频: ${desc}`;
    } else {
      desc = `❌创意视频: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function sign() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/everydaymusic/doListen?loginUid=${loginUid}&loginSid=${loginSid}&from=sign&extraGoldNum=110`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行每日签到任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉每日签到: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢每日签到: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴每日签到: ${desc}`;
      else if (desc == "已达到当日观看额外视频次数") desc = `🟢每日签到: ${desc}`;
      else desc = `⚠️每日签到: ${desc}`;
    } else {
      desc = `❌每日签到: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function new_sign() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newUserSignList?loginUid=587513271&loginSid=1062618347`,
    headers: kw_headers,
  };
  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行每日签到任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.isSign;
      if (desc == true) desc = `🟢每日签到: 成功!`;
      else if (desc == "用户未登录") desc = `🔴每日签到: 失败`;
    } else {
      desc = `❌每日签到: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function loterry_free() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=${loginUid}&loginSid=${loginSid}&type=free`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行免费抽奖任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.loterryname ? `🎉免费抽奖: ${obj.data.loterryname}` : `❌免费抽奖: 错误!`;
    } else desc = obj.msg ? `🔴免费抽奖: ${obj.msg}` : `❌免费抽奖: 错误!`;
    if (desc == `🔴免费抽奖: 免费次数用完了`) {
      desc = `🟢免费抽奖: 免费次数用完了`;
    }
    if (desc == `❌免费抽奖: 错误!`) {
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function loterry_video() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?loginUid=${loginUid}&loginSid=${loginSid}&type=video`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行视频抽奖任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.loterryname ? `🎉视频抽奖: ${obj.data.loterryname}` : `❌视频抽奖: 错误!`;
    } else desc = obj.msg ? `🔴视频抽奖: ${obj.msg}` : `❌视频抽奖: 错误!`;
    if (desc == `🔴视频抽奖: 视频次数用完了`) {
      desc = `🟢视频抽奖: 视频次数用完了`;
    }
    if (desc == `❌视频抽奖: 错误!`) {
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function surprise() {
  var rand = Math.random() < 0.3 ? 68 : Math.random() < 0.6 ? 69 : 70;

  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?loginUid=${loginUid}&loginSid=${loginSid}&from=surprise&goldNum=${rand}&surpriseType=`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行惊喜任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉惊喜任务: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢惊喜任务: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴惊喜任务: ${desc}`;
      else desc = `⚠️惊喜任务: ${desc}`;
    } else {
      desc = `❌惊喜任务: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function box() {
  // 定时宝箱,可以强制领取,但不推荐!
  var time = [];
  var hour = new Date().getUTCHours() + 8;

  if (hour >= 0) {
    time.push("00-08");
  }
  if (hour >= 8) {
    time.push("08-10");
  }
  if (hour >= 10) {
    time.push("10-12");
  }
  if (hour >= 12) {
    time.push("12-14");
  }
  if (hour >= 14) {
    time.push("14-16");
  }
  if (hour >= 16) {
    time.push("16-18");
  }
  if (hour >= 18) {
    time.push("18-20");
  }
  if (hour >= 20) {
    time.push("20-24");
  }

  var len = time.length;

  await box_new(time[len - 1]);

  for (var i = 0; i < len - 1; i++) {
    // console.log(time[i]);
    await box_old(time[i]);
  }
}

async function box_new(time) {
  var rand = Math.random() < 0.3 ? 28 : Math.random() < 0.6 ? 29 : 30;

  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=${loginUid}&loginSid=${loginSid}&action=new&time=${time}&goldNum=${rand}`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行定时宝箱任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉定时宝箱: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢定时宝箱: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴定时宝箱: ${desc}`;
      else desc = `⚠️定时宝箱: ${desc}`;
    } else {
      desc = `❌定时宝箱: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function box_old(time) {
  var rand = Math.random() < 0.3 ? 28 : Math.random() < 0.6 ? 29 : 30;

  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/new/boxRenew?loginUid=${loginUid}&loginSid=${loginSid}&action=old&time=${time}&goldNum=${rand}`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在执行补领宝箱任务...");
    // $.log(resp.body);
    var desc;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      desc = obj.data.description;
      if (desc == "成功") desc = `🎉补领宝箱: ${desc}`;
      else if (desc == "今天已完成任务") desc = `🟢补领宝箱: ${desc}`;
      else if (desc == "用户未登录") desc = `🔴补领宝箱: ${desc}`;
      else desc = `⚠️补领宝箱: ${desc}`;
    } else {
      desc = `❌补领宝箱: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
  });
}

async function getAsset() {
  let options = {
    url: `https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/earningUserSignList?loginUid=${loginUid}&loginSid=${loginSid}`,
    headers: kw_headers,
  };

  return $.http.get(options).then((resp) => {
    $.log("🟡正在查询资产...");
    // $.log(resp.body);
    var score;
    var obj = JSON.parse(resp.body);
    if (obj.code == 200 && obj.msg == "success" && obj.success == true) {
      score = obj.data.remainScore ? obj.data.remainScore : 0;
      if (score != 0) {
        var money = (score / 10000).toFixed(2);
        desc = `💰${score} --> 💴${money} CNY`;
      } else desc = `🔴资产查询失败!`;
    } else {
      desc = `❌资产查询: 错误!`;
      $.log(resp.body);
    }
    $.log(desc);
    $.notifyMsg.push(desc);
    return desc;
  });
}

function Env(t, s) {
  class e {
    constructor(t) {
      this.env = t;
    }
    send(t, s = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let e = this.get;
      return (
        "POST" === s && (e = this.post),
        new Promise((s, i) => {
          e.call(this, t, (t, e, r) => {
            t ? i(t) : s(e);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, s) {
      (this.name = t),
        (this.http = new e(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.encoding = "utf-8"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, s),
        this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $environment && $environment["surge-version"];
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    isStash() {
      return "undefined" != typeof $environment && $environment["stash-version"];
    }
    toObj(t, s = null) {
      try {
        return JSON.parse(t);
      } catch {
        return s;
      }
    }
    toStr(t, s = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return s;
      }
    }
    getjson(t, s) {
      let e = s;
      const i = this.getdata(t);
      if (i)
        try {
          e = JSON.parse(this.getdata(t));
        } catch {}
      return e;
    }
    setjson(t, s) {
      try {
        return this.setdata(JSON.stringify(t), s);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((s) => {
        this.get({ url: t }, (t, e, i) => s(i));
      });
    }
    runScript(t, s) {
      return new Promise((e) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = s && s.timeout ? s.timeout : r);
        const [o, h] = i.split("@"),
          a = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: "cron", timeout: r },
            headers: { "X-Key": o, Accept: "*/*" },
            timeout: r,
          };
        this.post(a, (t, s, i) => e(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t),
          i = !e && this.fs.existsSync(s);
        if (!e && !i) return {};
        {
          const i = e ? t : s;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          s = this.path.resolve(process.cwd(), this.dataFile),
          e = this.fs.existsSync(t),
          i = !e && this.fs.existsSync(s),
          r = JSON.stringify(this.data);
        e
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(s, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, s, e) {
      const i = s.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return e;
      return r;
    }
    lodash_set(t, s, e) {
      return Object(t) !== t
        ? t
        : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []),
          (s
            .slice(0, -1)
            .reduce(
              (t, e, i) =>
                Object(t[e]) === t[e]
                  ? t[e]
                  : (t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}),
              t
            )[s[s.length - 1]] = e),
          t);
    }
    getdata(t) {
      let s = this.getval(t);
      if (/^@/.test(t)) {
        const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = e ? this.getval(e) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            s = t ? this.lodash_get(t, i, "") : s;
          } catch (t) {
            s = "";
          }
      }
      return s;
    }
    setdata(t, s) {
      let e = !1;
      if (/^@/.test(s)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(s),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const s = JSON.parse(h);
          this.lodash_set(s, r, t), (e = this.setval(JSON.stringify(s), i));
        } catch (s) {
          const o = {};
          this.lodash_set(o, r, t), (e = this.setval(JSON.stringify(o), i));
        }
      } else e = this.setval(t, s);
      return e;
    }
    getval(t) {
      return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, s) {
      return this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()
        ? $persistentStore.write(t, s)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, s)
        : this.isNode()
        ? ((this.data = this.loaddata()), (this.data[s] = t), this.writedata(), !0)
        : (this.data && this.data[s]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, s = () => {}) {
      if (
        (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
        this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient.get(t, (t, e, i) => {
            !t &&
              e &&
              ((e.body = i),
              (e.statusCode = e.status ? e.status : e.statusCode),
              (e.status = e.statusCode)),
              s(t, e, i);
          });
      else if (this.isQuanX())
        this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: e, statusCode: i, headers: r, body: o } = t;
              s(null, { status: e, statusCode: i, headers: r, body: o }, o);
            },
            (t) => s((t && t.error) || "UndefinedError")
          );
      else if (this.isNode()) {
        let e = require("iconv-lite");
        this.initGotEnv(t),
          this.got(t)
            .on("redirect", (t, s) => {
              try {
                if (t.headers["set-cookie"]) {
                  const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  e && this.ckjar.setCookieSync(e, null), (s.cookieJar = this.ckjar);
                }
              } catch (t) {
                this.logErr(t);
              }
            })
            .then(
              (t) => {
                const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t,
                  a = e.decode(h, this.encoding);
                s(null, { status: i, statusCode: r, headers: o, rawBody: h, body: a }, a);
              },
              (t) => {
                const { message: i, response: r } = t;
                s(i, r, r && e.decode(r.rawBody, this.encoding));
              }
            );
      }
    }
    post(t, s = () => {}) {
      const e = t.method ? t.method.toLocaleLowerCase() : "post";
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient[e](t, (t, e, i) => {
            !t &&
              e &&
              ((e.body = i),
              (e.statusCode = e.status ? e.status : e.statusCode),
              (e.status = e.statusCode)),
              s(t, e, i);
          });
      else if (this.isQuanX())
        (t.method = e),
          this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: e, statusCode: i, headers: r, body: o } = t;
              s(null, { status: e, statusCode: i, headers: r, body: o }, o);
            },
            (t) => s((t && t.error) || "UndefinedError")
          );
      else if (this.isNode()) {
        let i = require("iconv-lite");
        this.initGotEnv(t);
        const { url: r, ...o } = t;
        this.got[e](r, o).then(
          (t) => {
            const { statusCode: e, statusCode: r, headers: o, rawBody: h } = t,
              a = i.decode(h, this.encoding);
            s(null, { status: e, statusCode: r, headers: o, rawBody: h, body: a }, a);
          },
          (t) => {
            const { message: e, response: r } = t;
            s(e, r, r && i.decode(r.rawBody, this.encoding));
          }
        );
      }
    }
    time(t, s = null) {
      const e = s ? new Date(s) : new Date();
      let i = {
        "M+": e.getMonth() + 1,
        "d+": e.getDate(),
        "H+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds(),
        "q+": Math.floor((e.getMonth() + 3) / 3),
        S: e.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in i)
        new RegExp("(" + s + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)
          ));
      return t;
    }
    queryStr(t) {
      let s = "";
      for (const e in t) {
        let i = t[e];
        null != i &&
          "" !== i &&
          ("object" == typeof i && (i = JSON.stringify(i)), (s += `${e}=${i}&`));
      }
      return (s = s.substring(0, s.length - 1)), s;
    }
    msg(s = t, e = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon() || this.isShadowrocket()
            ? t
            : this.isQuanX()
            ? { "open-url": t }
            : this.isSurge() || this.isStash()
            ? { url: t }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let s = t.openUrl || t.url || t["open-url"],
              e = t.mediaUrl || t["media-url"];
            return { openUrl: s, mediaUrl: e };
          }
          if (this.isQuanX()) {
            let s = t["open-url"] || t.url || t.openUrl,
              e = t["media-url"] || t.mediaUrl,
              i = t["update-pasteboard"] || t.updatePasteboard;
            return { "open-url": s, "media-url": e, "update-pasteboard": i };
          }
          if (this.isSurge() || this.isShadowrocket() || this.isStash()) {
            let s = t.url || t.openUrl || t["open-url"];
            return { url: s };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isShadowrocket() || this.isLoon() || this.isStash()
            ? $notification.post(s, e, i, o(r))
            : this.isQuanX() && $notify(s, e, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = [
          "",
          "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3==============",
        ];
        t.push(s),
          e && t.push(e),
          i && t.push(i),
          console.log(t.join("\n")),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, s) {
      const e = !(
        this.isSurge() ||
        this.isShadowrocket() ||
        this.isQuanX() ||
        this.isLoon() ||
        this.isStash()
      );
      e
        ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
        : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise((s) => setTimeout(s, t));
    }
    done(t = {}) {
      const s = new Date().getTime(),
        e = (s - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),
        this.log(),
        this.isSurge() || this.isShadowrocket() || this.isQuanX() || this.isLoon() || this.isStash()
          ? $done(t)
          : this.isNode() && process.exit(1);
    }
  })(t, s);
}
