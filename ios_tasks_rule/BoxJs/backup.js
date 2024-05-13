/*

Author: 2Ya
Github: https://www.github.com/dompling
===========================
gist 恢复备份：请先去 boxjs 设置完善 gist 信息，
token 获取方式 :
      头像菜单->
      Settings ->
      Developer settings ->
      Personal access tokens ->
      Generate new token ->
      在里面找到 gist 勾选提交
===========================


[task]

# 备份
0 10 * * * https://raw.githubusercontent.com/dompling/Script/master/gist/backup.js
# 恢复
5 10 * * * https://raw.githubusercontent.com/dompling/Script/master/gist/restore.js

 */

const $ = new API("gist");

// 存储`用户偏好`
$.KEY_usercfgs = "#chavy_boxjs_userCfgs";
// 存储`应用会话`
$.KEY_sessions = "#chavy_boxjs_sessions";
// 存储`应用订阅缓存`
$.KEY_app_subCaches = "#chavy_boxjs_app_subCaches";
// 存储`备份索引`
$.KEY_backups = "#chavy_boxjs_backups";
// 存储`当前会话` (配合切换会话, 记录当前切换到哪个会话)
$.KEY_cursessions = "#chavy_boxjs_cur_sessions";

$.token = $.read("token");
$.username = $.read("username");
$.boxjsDomain = $.read("#boxjs_host");
$.cacheKey = "BoxJS-Data";
$.desc = "BoxJS-Data Backup";
$.msg = "";

$.http = new HTTP({
  baseURL: `https://api.github.com`,
  accept: `application/vnd.github+json`,
  headers: {
    Authorization: `token ${$.token}`,
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.141 Safari/537.36",
  },
});

const cacheArr = {
  datas: "用户数据",
  usercfgs: "用户偏好",
  sessions: "应用会话",
  curSessions: "当前会话",
  globalbaks: "备份索引",
  appSubCaches: "应用订阅缓存",
};

(async () => {
  if (!$.token || !$.username) throw "请去 boxjs 完善信息";

  const backup = getBoxJSData();
  const gistList = await getGist();

  if (!gistList) throw new Error("请检查 Gist 账号配置");
  if (gistList.message)
    throw new Error(
      `Gist 列表请求失败:${gistList.message}\n请检查 Gist 账号配置`
    );

  const commonParams = { description: $.desc, public: false };
  const all_params = { ...commonParams };
  const files = {};
  for (const cacheArrKey in cacheArr) {
    const label = cacheArr[cacheArrKey];
    const saveKey = `${cacheArrKey}.json`;
    $.msg += `${label}：${saveKey}\n`;
    files[saveKey] = { content: JSON.stringify(backup[cacheArrKey]) };
  }
  const isBackUp = gistList.find((item) => item.description === $.desc);

  all_params.files = files;

  const response = await backGist(all_params, isBackUp);

  if (response.message) {
    console.log(`结果：gist 备份失败（${JSON.stringify(response)}❌`);
    throw `结果：gist 备份失败（${JSON.stringify(response)}）❌ \n`;
  } else {
    console.log(`gist 备份成功 ✅\n`);
    $.msg += `结果：gist（${$.desc}） 备份成功 ✅\n`;
  }
})()
  .then(() => {
    $.notify("gist 备份", "", `${$.username}：\n${$.msg}`);
  })
  .catch((e) => {
    $.log(e);
    $.notify("gist 备份", "", `❌${e.message || e}`);
  })
  .finally(() => {
    $.done();
  });

function getGist() {
  return $.http
    .get({ url: `/users/${$.username}/gists` })
    .then((response) => JSON.parse(response.body));
}

function backGist(params, backup) {
  const method = backup ? "patch" : "post";

  return $.http[method]({
    url: `/gists${backup ? "/" + backup.id : ""}`,
    body: JSON.stringify(method === "patch" ? { files: params.files } : params),
  }).then((response) => JSON.parse(response.body));
}

function getUserCfgs() {
  const defcfgs = {
    favapps: [],
    appsubs: [],
    viewkeys: [],
    isPinedSearchBar: true,
    httpapi: "examplekey@127.0.0.1:6166",
    http_backend: "",
  };
  return Object.assign(defcfgs, JSON.parse($.read($.KEY_usercfgs || "{}")));
}

function getSystemApps() {
  // prettier-ignore
  const sysapps = [
    {
      id: 'BoxSetting',
      name: '偏好设置',
      descs: ['可手动执行一些抹掉数据的脚本', '可设置明暗两种主题下的主色调', '可设置壁纸清单'],
      keys: [
        '@chavy_boxjs_userCfgs.httpapi',
        '@chavy_boxjs_userCfgs.bgimg',
        '@chavy_boxjs_userCfgs.http_backend',
        '@chavy_boxjs_userCfgs.color_dark_primary',
        '@chavy_boxjs_userCfgs.color_light_primary',
      ],
      settings: [
        {
          id: '@chavy_boxjs_userCfgs.httpapis',
          name: 'HTTP-API (Surge)',
          val: '',
          type: 'textarea',
          placeholder: ',examplekey@127.0.0.1:6166',
          autoGrow: true,
          rows: 2,
          persistentHint: true,
          desc: '示例: ,examplekey@127.0.0.1:6166! 注意: 以逗号开头, 逗号分隔多个地址, 可加回车',
        },
        {
          id: '@chavy_boxjs_userCfgs.httpapi_timeout',
          name: 'HTTP-API Timeout (Surge)',
          val: 20,
          type: 'number',
          persistentHint: true,
          desc: '如果脚本作者指定了超时时间, 会优先使用脚本指定的超时时间.',
        },
        {
          id: '@chavy_boxjs_userCfgs.http_backend',
          name: 'HTTP Backend (Quantumult X)',
          val: '',
          type: 'text',
          placeholder: 'http://127.0.0.1:9999',
          persistentHint: true,
          desc: '示例: http://127.0.0.1:9999 ! 注意: 必须是以 http 开头的完整路径, 不能是 / 结尾',
        },
        {
          id: '@chavy_boxjs_userCfgs.bgimgs',
          name: '背景图片清单',
          val: '无,\n跟随系统,跟随系统\nlight,http://api.btstu.cn/sjbz/zsy.php\ndark,https://uploadbeta.com/api/pictures/random\n妹子,http://api.btstu.cn/sjbz/zsy.php',
          type: 'textarea',
          placeholder: '无,{回车} 跟随系统,跟随系统{回车} light,图片地址{回车} dark,图片地址{回车} 妹子,图片地址',
          persistentHint: true,
          autoGrow: true,
          rows: 2,
          desc: '逗号分隔名字和链接, 回车分隔多个地址',
        },
        {
          id: '@chavy_boxjs_userCfgs.bgimg',
          name: '背景图片',
          val: '',
          type: 'text',
          placeholder: 'http://api.btstu.cn/sjbz/zsy.php',
          persistentHint: true,
          desc: '输入背景图标的在线链接',
        },
        {
          id: '@chavy_boxjs_userCfgs.changeBgImgEnterDefault',
          name: '手势进入壁纸模式默认背景图片',
          val: '',
          type: 'text',
          placeholder: '填写上面背景图片清单的值',
          persistentHint: true,
          desc: '',
        },
        {
          id: '@chavy_boxjs_userCfgs.changeBgImgOutDefault',
          name: '手势退出壁纸模式默认背景图片',
          val: '',
          type: 'text',
          placeholder: '填写上面背景图片清单的值',
          persistentHint: true,
          desc: '',
        },
        {
          id: '@chavy_boxjs_userCfgs.color_light_primary',
          name: '明亮色调',
          canvas: true,
          val: '#F7BB0E',
          type: 'colorpicker',
          desc: '',
        },
        {
          id: '@chavy_boxjs_userCfgs.color_dark_primary',
          name: '暗黑色调',
          canvas: true,
          val: '#2196F3',
          type: 'colorpicker',
          desc: '',
        },
      ],
      scripts: [
        {
          name: '抹掉：所有缓存',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.caches.js',
        },
        {
          name: '抹掉：收藏应用',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.favapps.js',
        },
        {
          name: '抹掉：用户偏好',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.js',
        },
        {
          name: '抹掉：所有会话',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.sessions.js',
        },
        {
          name: '抹掉：所有备份',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.baks.js',
        },
        {
          name: '抹掉：BoxJs (注意备份)',
          script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.boxjs.js',
        },
      ],
      author: '@chavyleung',
      repo: 'https://github.com/chavyleung/scripts/blob/master/box/switcher/box.switcher.js',
      icons: [
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSetting.mini.png',
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSetting.png',
      ],
    },
    {
      id: 'BoxSwitcher',
      name: '会话切换',
      desc: '打开静默运行后, 切换会话将不再发出系统通知 \n注: 不影响日志记录',
      keys: [],
      settings: [
        {
          id: 'CFG_BoxSwitcher_isSilent',
          name: '静默运行',
          val: false,
          type: 'boolean',
          desc: '切换会话时不发出系统通知!',
        },
      ],
      author: '@chavyleung',
      repo: 'https://github.com/chavyleung/scripts/blob/master/box/switcher/box.switcher.js',
      icons: [
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSwitcher.mini.png',
        'https://raw.githubusercontent.com/chavyleung/scripts/master/box/icons/BoxSwitcher.png',
      ],
      script: 'https://raw.githubusercontent.com/chavyleung/scripts/master/box/switcher/box.switcher.js',
    },
  ];
  return sysapps;
}

function getAppDatas(app) {
  const datas = {};
  const nulls = [null, undefined, "null", "undefined"];
  if (app.keys && Array.isArray(app.keys)) {
    app.keys.forEach((key) => {
      if (/^@/.test(key)) {
        const [, objkey, path] = /^@(.*?)\.(.*?)$/.exec(key);
        try {
          const val = JSON.parse($.read(`#${objkey}`) || "{}");
          datas[key] = nulls.includes(val) ? null : val[path];
        } catch (e) {
          datas[key] = null;
        }
      } else {
        const val = $.read(`#${key}`);
        datas[key] = nulls.includes(val) ? null : val;
      }
    });
  }
  if (app.settings && Array.isArray(app.settings)) {
    app.settings.forEach((setting) => {
      const key = setting.id;
      if (/^@/.test(key)) {
        const [, objkey, path] = /^@(.*?)\.(.*?)$/.exec(key);
        try {
          const val = JSON.parse($.read(`#${objkey}`) || "{}");
          datas[key] = nulls.includes(val) ? null : val[path];
        } catch (e) {
          datas[key] = null;
        }
      } else {
        const val = $.read(`#${key}`);
        datas[key] = nulls.includes(val) ? null : val;
      }
    });
  }
  return datas;
}

function getBoxJSData() {
  const datas = {};
  const usercfgs = getUserCfgs();
  const sessions = JSON.parse($.read($.KEY_sessions) || "[]");
  const curSessions = JSON.parse($.read($.KEY_cursessions) || "{}");
  const appSubCaches = JSON.parse($.read($.KEY_app_subCaches) || "{}");
  const globalbaks = JSON.parse($.read($.KEY_backups) || "[]");
  const sysapps = getSystemApps();

  // 把 `内置应用`和`订阅应用` 里需要持久化属性放到`datas`
  sysapps.forEach((app) => Object.assign(datas, getAppDatas(app)));

  usercfgs.appsubs.forEach((sub) => {
    const subcache = appSubCaches[sub.url];
    if (subcache && subcache.apps && Array.isArray(subcache.apps)) {
      subcache.apps.forEach((app) => Object.assign(datas, getAppDatas(app)));
    }
  });
  return {
    datas,
    usercfgs,
    sessions,
    curSessions,
    appSubCaches,
    globalbaks,
  };
}

function ENV() {
  const isQX = typeof $task !== "undefined";
  const isLoon = typeof $loon !== "undefined";
  const isSurge = typeof $httpClient !== "undefined" && !isLoon;
  const isJSBox = typeof require == "function" && typeof $jsbox != "undefined";
  const isNode = typeof require == "function" && !isJSBox;
  const isRequest = typeof $request !== "undefined";
  const isScriptable = typeof importModule !== "undefined";
  return {
    isQX,
    isLoon,
    isSurge,
    isNode,
    isJSBox,
    isRequest,
    isScriptable,
  };
}

function HTTP(
  defaultOptions = {
    baseURL: "",
  }
) {
  const { isQX, isLoon, isSurge, isScriptable, isNode } = ENV();
  const methods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"];
  const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  function send(method, options) {
    options =
      typeof options === "string"
        ? {
            url: options,
          }
        : options;
    const baseURL = defaultOptions.baseURL;
    if (baseURL && !URL_REGEX.test(options.url || "")) {
      options.url = baseURL ? baseURL + options.url : options.url;
    }
    if (options.body && options.headers && !options.headers["Content-Type"]) {
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    options = {
      ...defaultOptions,
      ...options,
    };
    const timeout = options.timeout;
    const events = {
      ...{
        onRequest: () => {},
        onResponse: (resp) => resp,
        onTimeout: () => {},
      },
      ...options.events,
    };

    events.onRequest(method, options);

    let worker;
    if (isQX) {
      worker = $task.fetch({
        method,
        ...options,
      });
    } else if (isLoon || isSurge || isNode) {
      worker = new Promise((resolve, reject) => {
        const request = isNode ? require("request") : $httpClient;
        request[method.toLowerCase()](options, (err, response, body) => {
          if (err) reject(err);
          else
            resolve({
              statusCode: response.status || response.statusCode,
              headers: response.headers,
              body,
            });
        });
      });
    } else if (isScriptable) {
      const request = new Request(options.url);
      request.method = method;
      request.headers = options.headers;
      request.body = options.body;
      worker = new Promise((resolve, reject) => {
        request
          .loadString()
          .then((body) => {
            resolve({
              statusCode: request.response.statusCode,
              headers: request.response.headers,
              body,
            });
          })
          .catch((err) => reject(err));
      });
    }

    let timeoutid;
    const timer = timeout
      ? new Promise((_, reject) => {
          timeoutid = setTimeout(() => {
            events.onTimeout();
            return reject(
              `${method} URL: ${options.url} exceeds the timeout ${timeout} ms`
            );
          }, timeout);
        })
      : null;

    return (
      timer
        ? Promise.race([timer, worker]).then((res) => {
            clearTimeout(timeoutid);
            return res;
          })
        : worker
    ).then((resp) => events.onResponse(resp));
  }

  const http = {};
  methods.forEach(
    (method) =>
      (http[method.toLowerCase()] = (options) => send(method, options))
  );
  return http;
}

function API(name = "untitled", debug = false) {
  const { isQX, isLoon, isSurge, isNode, isJSBox, isScriptable } = ENV();
  return new (class {
    constructor(name, debug) {
      this.name = name;
      this.debug = debug;

      this.http = HTTP();
      this.env = ENV();

      this.node = (() => {
        if (isNode) {
          const fs = require("fs");

          return {
            fs,
          };
        } else {
          return null;
        }
      })();
      this.initCache();

      const delay = (t, v) =>
        new Promise(function (resolve) {
          setTimeout(resolve.bind(null, v), t);
        });

      Promise.prototype.delay = function (t) {
        return this.then(function (v) {
          return delay(t, v);
        });
      };
    }

    // persistence
    // initialize cache
    initCache() {
      if (isQX) this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}");
      if (isLoon || isSurge)
        this.cache = JSON.parse($persistentStore.read(this.name) || "{}");

      if (isNode) {
        // create a json for root cache
        let fpath = "root.json";
        if (!this.node.fs.existsSync(fpath)) {
          this.node.fs.writeFileSync(
            fpath,
            JSON.stringify({}),
            {
              flag: "wx",
            },
            (err) => console.log(err)
          );
        }
        this.root = {};

        // create a json file with the given name if not exists
        fpath = `${this.name}.json`;
        if (!this.node.fs.existsSync(fpath)) {
          this.node.fs.writeFileSync(
            fpath,
            JSON.stringify({}),
            {
              flag: "wx",
            },
            (err) => console.log(err)
          );
          this.cache = {};
        } else {
          this.cache = JSON.parse(
            this.node.fs.readFileSync(`${this.name}.json`)
          );
        }
      }
    }

    // store cache
    persistCache() {
      const data = JSON.stringify(this.cache, null, 2);
      if (isQX) $prefs.setValueForKey(data, this.name);
      if (isLoon || isSurge) $persistentStore.write(data, this.name);
      if (isNode) {
        this.node.fs.writeFileSync(
          `${this.name}.json`,
          data,
          {
            flag: "w",
          },
          (err) => console.log(err)
        );
        this.node.fs.writeFileSync(
          "root.json",
          JSON.stringify(this.root, null, 2),
          {
            flag: "w",
          },
          (err) => console.log(err)
        );
      }
    }

    write(data, key) {
      this.log(`SET ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.write(data, key);
        }
        if (isQX) {
          return $prefs.setValueForKey(data, key);
        }
        if (isNode) {
          this.root[key] = data;
        }
      } else {
        this.cache[key] = data;
      }
      this.persistCache();
    }

    read(key) {
      this.log(`READ ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.read(key);
        }
        if (isQX) {
          return $prefs.valueForKey(key);
        }
        if (isNode) {
          return this.root[key];
        }
      } else {
        return this.cache[key];
      }
    }

    delete(key) {
      this.log(`DELETE ${key}`);
      if (key.indexOf("#") !== -1) {
        key = key.substr(1);
        if (isSurge || isLoon) {
          return $persistentStore.write(null, key);
        }
        if (isQX) {
          return $prefs.removeValueForKey(key);
        }
        if (isNode) {
          delete this.root[key];
        }
      } else {
        delete this.cache[key];
      }
      this.persistCache();
    }

    // notification
    notify(title, subtitle = "", content = "", options = {}) {
      const openURL = options["open-url"];
      const mediaURL = options["media-url"];

      if (isQX) $notify(title, subtitle, content, options);
      if (isSurge) {
        $notification.post(
          title,
          subtitle,
          content + `${mediaURL ? "\n多媒体:" + mediaURL : ""}`,
          {
            url: openURL,
          }
        );
      }
      if (isLoon) {
        let opts = {};
        if (openURL) opts["openUrl"] = openURL;
        if (mediaURL) opts["mediaUrl"] = mediaURL;
        if (JSON.stringify(opts) === "{}") {
          $notification.post(title, subtitle, content);
        } else {
          $notification.post(title, subtitle, content, opts);
        }
      }
      if (isNode || isScriptable) {
        const content_ =
          content +
          (openURL ? `\n点击跳转: ${openURL}` : "") +
          (mediaURL ? `\n多媒体: ${mediaURL}` : "");
        if (isJSBox) {
          const push = require("push");
          push.schedule({
            title: title,
            body: (subtitle ? subtitle + "\n" : "") + content_,
          });
        } else {
          console.log(`${title}\n${subtitle}\n${content_}\n\n`);
        }
      }
    }

    // other helper functions
    log(msg) {
      if (this.debug) console.log(`[${this.name}] LOG: ${this.stringify(msg)}`);
    }

    info(msg) {
      console.log(`[${this.name}] INFO: ${this.stringify(msg)}`);
    }

    error(msg) {
      console.log(`[${this.name}] ERROR: ${this.stringify(msg)}`);
    }

    wait(millisec) {
      return new Promise((resolve) => setTimeout(resolve, millisec));
    }

    done(value = {}) {
      if (isQX || isLoon || isSurge) {
        $done(value);
      } else if (isNode && !isJSBox) {
        if (typeof $context !== "undefined") {
          $context.headers = value.headers;
          $context.statusCode = value.statusCode;
          $context.body = value.body;
        }
      }
    }

    stringify(obj_or_str) {
      if (typeof obj_or_str === "string" || obj_or_str instanceof String)
        return obj_or_str;
      else
        try {
          return JSON.stringify(obj_or_str, null, 2);
        } catch (err) {
          return "[object Object]";
        }
    }
  })(name, debug);
}