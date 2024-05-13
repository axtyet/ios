
/**
 * @author: @JoJoJotarou
 * 美团买菜买菜币各项活动(签到、分享、浏览商品、3/7天礼包领取), 其中浏览商品, 第二次需与第一次间隔至少1小时
 */
const $ = Env('美团买菜-买菜币');

let _log = [];
let _coins = 0;
let _desc = [];
let userId = '';

function checkIn(queryStr, headers) {
  let eventName = '【签到】';
  headers['Content-Type'] = 'application/json';
  let extQueryStr = `&t=${headers.T || headers.t}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/userCheckInNew?${queryStr}${extQueryStr}`,
    headers: headers,
    body: JSON.stringify({
      userId: userId,
      riskMap: {
        platform: 5,
        app: 95,
        utm_term: queryStr.match(/utm_term=([\w|\.]+)/)[1],
        uuid: queryStr.match(/uuid=(\w+)/)[1],
        utm_medium: queryStr.match(/utm_medium=(\w+)/)[1],
        fingerprint: '',
      },
    }),
  };

  return new Promise((resolve, reject) => {
    $.post(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && JSON.parse(data).data.result === true) {
          _coin = JSON.parse(data).data.rewardValue;
          _coins += Number(_coin) || 0;
          _log.push(`🟢${eventName}: 获取${_coin}个买菜币`);
          _desc.push(`🟢${eventName}`);
        } else if (
          response.statusCode === 200 &&
          JSON.parse(data).code === 0 &&
          JSON.parse(data).data.result === false
        ) {
          _log.push(`🟡${eventName}: 今日签到已完成`);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function share(queryStr, headers) {
  let eventName = '【分享至微信】';
  let extQueryStr = `&shareBusinessType=2&userId=${userId}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/getShareReward?${queryStr}${extQueryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && JSON.parse(data).data.result === true) {
          _coin = JSON.parse(data).data.rewardValue;
          _coins += Number(_coin) || 0;
          _log.push(`🟢${eventName}: 获取${_coin}个买菜币`);
          _desc.push(`🟢${eventName}`);
        } else if (
          response.statusCode === 200 &&
          JSON.parse(data).code === 0 &&
          JSON.parse(data).data.result === false
        ) {
          _log.push(`🟡${eventName}: 今日分享已完成`);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function getTasks(queryStr, headers) {
  let eventName = '【获取任务列表】';
  let extQueryStr = `&userId=${userId}&t=${headers.T || headers.t}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/queryTaskListInfoV2?${queryStr}${extQueryStr}`,
    headers: headers,
  };
  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        tasks = JSON.parse(data).data.checkInTaskInfos;
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && tasks) {
          // 返回数组防止后面的任务无法执行
          resolve(tasks || []);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        // 返回数组防止后面的任务无法执行
        resolve([]);
      }
    });
  });
}

async function takeTask(queryStr, headers) {
  tasks = await getTasks(queryStr, headers);
  for (task of tasks.filter((task) => task.buttonDesc === '领任务')) {
    await _takeTask(queryStr, headers, task.taskName, task.id, task.activityId);
  }
}

function _takeTask(queryStr, headers, taskName, taskId, activityId) {
  let eventName = `【领任务-${taskName}】`;
  let extQueryStr = `&deviceId=&userId=${userId}&taskId=${taskId}&activityId=${activityId}&t=${headers.T || headers.t}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/takeTask?${queryStr}${extQueryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && JSON.parse(data).data === true) {
          _log.push(`🟢${eventName}: 成功`);
          _desc.push(`🟢${eventName}`);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

async function doneTasks(queryStr, headers) {
  tasks = await getTasks(queryStr, headers).then((tasks) => {
    tasks
      .filter((task) => task.buttonDesc === '去购物')
      .forEach((task) => {
        _log.push(`🟡【${task.taskName}】${$.time('M-dd', task.taskExpiredTime)}失效`);
        _desc.push(`🟡【${task.taskName}】${$.time('M-dd', task.taskExpiredTime)}失效 `);
      });

    if (tasks.filter((task) => task.buttonDesc === '去逛逛' && task.taskFinishCount === 2).length > 0) {
      _log.push(`🟡【浏览商品15秒】已完成`);
    }

    return tasks;
  });

  for (task of tasks.filter((task) => task.buttonDesc === '去逛逛' && task.taskFinishCount < 2)) {
    res = await browseGoods1(queryStr, headers);
    if (res) {
      await browseGoods2(queryStr, headers, task);
    }
  }

  // 防止漏网之鱼（记不清浏览后未领取时按钮是不是叫领奖励了）
  for (task of tasks.filter((task) => task.buttonDesc === '领奖励')) {
    await browseGoods2(queryStr, headers, task);
  }
}

function browseGoods1(queryStr, headers) {
  let eventName = '【浏览商品(1/2)-模拟浏览】';
  let extQueryStr = `&eventType=6`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/taskEventComplete?${queryStr}${extQueryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && JSON.parse(data).data.serverTime) {
          _log.push(`🟢${eventName}: 成功`);
          _desc.push(`🟢${eventName}`);
          resolve(true);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        resolve(false);
      }
    });
  });
}

function browseGoods2(queryStr, headers, task) {
  let eventName = '【浏览商品(2/2)-领取奖励】';
  let extQueryStr = `&activityId=${task.activityId}&taskId=${task.id}&taskType=${task.taskType}&userTaskId=${task.userTaskId}&rewardId=${task.rewardId}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/takeTaskReward?${queryStr}${extQueryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && JSON.parse(data).data.result === true) {
          _coin = JSON.parse(data).data.rewardValue;
          _coins += Number(_coin) || 0;
          _log.push(`🟢${eventName}: 获取${_coin}个买菜币`);
          _desc.push(`🟢${eventName}`);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

async function popReward(queryStr, headers) {
  checkInCount = await isPopReward(queryStr, headers);
  if (checkInCount) {
    await getPopReward(queryStr, headers, checkInCount);
  }
}

function isPopReward(queryStr, headers) {
  let eventName = '【查询3/7天礼包】';
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/getCheckInMainView?${queryStr}&time=${ts()}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0) {
          isPopRewarded = JSON.parse(data).data.isPopRewarded;
          checkInCount = JSON.parse(data).data.checkInCount;
          rewardPackageTypes = JSON.parse(data).data.rewardPackageTypes || '';

          if ([3, 7].indexOf(checkInCount) !== -1 && rewardPackageTypes.indexOf(checkInCount) === -1) {
            _log.push(`🟢${eventName}: ${checkInCount}天礼包可领取`);
            resolve(checkInCount);
          } else if ([3, 7].indexOf(checkInCount) !== -1 && rewardPackageTypes.indexOf(checkInCount) !== -1) {
            _log.push(`🟡${eventName}: ${checkInCount}天礼包已领取`);
            resolve();
          } else {
            _log.push(`🟡${eventName}: 无礼包可领取`);
            resolve();
          }
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        resolve();
      }
    });
  });
}

function getPopReward(queryStr, headers, checkInCount) {
  let eventName = '【领取3/7天礼包】';
  headers['Content-Type'] = 'application/json';
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/getWeekContinuousRewardNew?${queryStr}`,
    headers: headers,
    body: JSON.stringify({
      userId: userId,
      rewardDate: checkInCount, // 3/7天礼包
      riskMap: {
        platform: 5,
        app: 95,
        utm_term: queryStr.match(/utm_term=(\w+)/)[1],
        uuid: queryStr.match(/uuid=(\w+)/)[1],
        utm_medium: queryStr.match(/utm_medium=(\w+)/)[1],
        fingerprint: '',
      },
    }),
  };

  return new Promise((resolve, reject) => {
    $.post(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0) {
          _coin = JSON.parse(data).data.rewardValue;
          _coins += Number(_coin) || 0;
          _log.push(`🟢${eventName}: 从${checkInCount}天礼包中获取${_coin}个买菜币`);
          _desc.push(`🟢${eventName}`);
        } else if (response.statusCode === 200 && JSON.parse(data).code === 100 && !JSON.parse(data).data) {
          _log.push(`🟡${eventName}: ${checkInCount}天礼包已领取`);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function totalCoins(queryStr, headers) {
  let eventName = '【账户买菜币】';
  let extQueryStr = `&t=${headers.T || headers.t}`;
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/getUserInfo?${queryStr}${extQueryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        if (response.statusCode === 200 && JSON.parse(data).code === 0) {
          let totalCoins = JSON.parse(data).data.balance;
          _log.push(`🟢${eventName}: 当前共有${totalCoins}个买菜币`);
          resolve(totalCoins);
        } else if (response.statusCode === 200 && JSON.parse(data).error.msg === '请重新登录') {
          _log.push(`🔴${eventName}: ${response.statusCode} ${JSON.parse(data).error.msg}`);
          resolve(-1);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        resolve(-2);
      }
    });
  });
}

function coupons(queryStr, headers, totalCoins) {
  let eventName = '【是否可兑优惠券】';
  let option = {
    url: `https://mall.meituan.com/api/c/mallcoin/checkIn/couponList?${queryStr}`,
    headers: headers,
  };

  return new Promise((resolve, reject) => {
    $.get(option, (error, response, data) => {
      try {
        couponList = JSON.parse(data).data;
        if (response.statusCode === 200 && JSON.parse(data).code === 0 && couponList) {
          // checked=true表示符合兑换条件
          _couponList = couponList.filter((coupon) => Number(totalCoins) * 100 > coupon.sellPrice);
          amount = _couponList ? _couponList.length : 0;
          _log.push(`🟢${eventName}: ${amount}种优惠券可兑换`);
          resolve(amount);
        } else {
          throw error || data;
        }
      } catch (error) {
        _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        resolve(0);
      }
    });
  });
}

!(async () => {
  let jojo_mall_meituan = $.getdata('jojo_mall_meituan');
  if (jojo_mall_meituan) {
    jojo_mall_meituan = JSON.parse(jojo_mall_meituan);

    let headers = jojo_mall_meituan.headers;
    let queryStr = [
      jojo_mall_meituan.queryStr,
      'ci=1&page_type=h5&uci=10&channel=7',
      jojo_mall_meituan.xuuid,
      // headers.T || headers.t,
    ].join('&');
    userId = queryStr.match(/userid=(\d+)/)[1];

    let _headers = {
      Host: 'mall.meituan.com',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      Accept: '*/*',
      'Accept-Language': 'zh-cn',
      Referer: 'https://mall.meituan.com/checkin/home.html',
      personalRecommendClose: '0',
    };
    Object.assign(headers, _headers);

    let pre = await totalCoins(queryStr, headers);
    if (pre < 0) {
      $.subt = '任务失败，查看日志了解详细信息>>';
    } else {
      await checkIn(queryStr, headers);
      await share(queryStr, headers);
      await takeTask(queryStr, headers);
      // 模拟浏览15秒
      // await $.wait(16000);
      await doneTasks(queryStr, headers);
      await popReward(queryStr, headers);
      totalCoins = await totalCoins(queryStr, headers);
      amount = await coupons(queryStr, headers, totalCoins);
      if (amount > 0) {
        $.subt = `买菜币: ${totalCoins}(+${_coins.toFixed(2)}), 有优惠卷可兑`;
      } else {
        $.subt = `买菜币: ${totalCoins}(+${_coins.toFixed(2)})`;
      }
    }
  } else {
    $.subt = '🔴 请先获取会话';
    _log.push($.subt);
  }
})()
  .catch((e) => _log.push(e))
  .finally(() => {
    $.log(..._log);
    $.desc = _desc.join('');
    $.msg($.name, $.subt, $.desc);
    $.done();
  });

// prettier-ignore
function ts(){return new Date().getTime()}
// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } isStash() { return "undefined" != typeof $environment && $environment["stash-version"] } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: i, statusCode: r, headers: o, rawBody: h }, s.decode(h, this.encoding)) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: s, statusCode: r, headers: o, rawBody: h }, i.decode(h, this.encoding)) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, i = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": i } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
