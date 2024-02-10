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

const $ = new API('gist');

// 存储`用户偏好`
$.KEY_usercfgs = 'chavy_boxjs_userCfgs';
// 存储`应用会话`
$.KEY_sessions = 'chavy_boxjs_sessions';
// 存储`应用订阅缓存`
$.KEY_app_subCaches = 'chavy_boxjs_app_subCaches';
// 存储`备份索引`
$.KEY_backups = 'chavy_boxjs_backups';
// 存储`当前会话` (配合切换会话, 记录当前切换到哪个会话)
$.KEY_cursessions = 'chavy_boxjs_cur_sessions';

$.token = $.read('token');
$.username = $.read('username');
$.boxjsDomain = $.read('#boxjs_host');
$.cacheKey = 'BoxJS-Data';
$.desc = 'BoxJS-Data Backup';
$.msg = '';
$.error = '';

const cacheArr = {
  datas: { label: '用户数据' },
  usercfgs: { label: '用户偏好', key: $.KEY_usercfgs },
  sessions: { label: '应用会话', key: $.KEY_sessions },
  curSessions: { label: '当前会话', key: $.KEY_cursessions },
  globalbaks: { label: '备份索引', key: $.KEY_backups },
  appSubCaches: { label: '应用订阅缓存', key: $.KEY_app_subCaches },
};

$.http = new HTTP({
  baseURL: `https://api.github.com`,
  headers: {
    Authorization: `token ${$.token}`,
    Accept: 'application/vnd.github.v3+json',
    'User-Agent':
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  },
});
(async () => {
  if (!$.token || !$.username) throw '请去 boxjs 完善信息';
  const gistList = await getGist();
  if (!gistList) throw new Error('请检查 Gist 账号配置');
  if (gistList.message)
    throw new Error(
      `Gist 列表请求失败:${gistList.message}\n请检查 Gist 账号配置`
    );

  const boxjsdata = gistList.find((item) => item.description === $.desc);
  if (!boxjsdata) throw '未找到 Gist 备份信息，请先备份';

  for (const cacheArrKey in cacheArr) {
    const item = cacheArr[cacheArrKey];
    const saveKey = `${cacheArrKey}.json`;
    let fielUri = boxjsdata.files[saveKey].raw_url.replace(
      /\/raw\/(.*)\//,
      '/raw/'
    );
    console.log(fielUri);
    const content = await getBackGist(fielUri);

    if (content) {
      console.log(`${item.label}：已找到备份-开始恢复到设备中...`);
      try {
        if (!item.key) {
          const datas = {};
          for (const contentKey in content) {
            const dataItem = content[contentKey];
            if (/^@/.test(contentKey)) {
              const [, objkey, path] = /^@(.*?)\.(.*?)$/.exec(contentKey);
              if (!datas[objkey]) datas[objkey] = {};
              datas[objkey][path] = dataItem;
            } else {
              datas[contentKey] = dataItem;
            }
          }
          for (const key in datas) {
            saveBoxJSData({
              key,
              val:
                typeof datas[key] === 'string'
                  ? datas[key]
                  : JSON.stringify(datas[key]),
            });
          }
        } else {
          saveBoxJSData({ key: item.key, val: JSON.stringify(content) });
        }
        $.msg += `${item.label}：备份恢复成功 \n`;
        console.log(`${item.label}：备份恢复成功`);
      } catch (e) {
        $.msg += `${item.label}：备份数据异常 \n`;
      }
    } else {
      $.msg += `${item.label}：未找到备份，请先备份 \n`;
      console.log(`${item.label}：未找到备份，请先备份`);
    }
  }
  console.log('所有备份恢复成功');
})()
  .then(() => {
    $.notify('gist 备份恢复', '', `${$.username}：\n${$.msg}`);
  })
  .catch((e) => {
    $.log(e);
    $.notify('gist 备份', '', `❌${e.message || e}`);
  })
  .finally(() => {
    $.done();
  });

function getGistUrl(api) {
  return `${api}`;
}

function getGist() {
  return $.http
    .get({ url: getGistUrl(`/users/${$.username}/gists`) })
    .then((response) => JSON.parse(response.body));
}

function getBackGist(url) {
  return $.http.get({ url }).then((response) => JSON.parse(response.body));
}

function saveBoxJSData(data) {
  if (Array.isArray(data)) {
    data.forEach((dat) => $.write(dat.val, `#${dat.key}`));
  } else {
    $.write(data.val, `#${data.key}`);
  }
}

function ENV() {
  const isQX = typeof $task !== 'undefined';
  const isLoon = typeof $loon !== 'undefined';
  const isSurge = typeof $httpClient !== 'undefined' && !isLoon;
  const isJSBox = typeof require == 'function' && typeof $jsbox != 'undefined';
  const isNode = typeof require == 'function' && !isJSBox;
  const isRequest = typeof $request !== 'undefined';
  const isScriptable = typeof importModule !== 'undefined';
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
    baseURL: '',
  }
) {
  const { isQX, isLoon, isSurge, isScriptable, isNode } = ENV();
  const methods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'];
  const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  function send(method, options) {
    options =
      typeof options === 'string'
        ? {
            url: options,
          }
        : options;
    const baseURL = defaultOptions.baseURL;
    if (baseURL && !URL_REGEX.test(options.url || '')) {
      options.url = baseURL ? baseURL + options.url : options.url;
    }
    if (options.body && options.headers && !options.headers['Content-Type']) {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
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
        const request = isNode ? require('request') : $httpClient;
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

function API(name = 'untitled', debug = false) {
  const { isQX, isLoon, isSurge, isNode, isJSBox, isScriptable } = ENV();
  return new (class {
    constructor(name, debug) {
      this.name = name;
      this.debug = debug;

      this.http = HTTP();
      this.env = ENV();

      this.node = (() => {
        if (isNode) {
          const fs = require('fs');

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
      if (isQX) this.cache = JSON.parse($prefs.valueForKey(this.name) || '{}');
      if (isLoon || isSurge)
        this.cache = JSON.parse($persistentStore.read(this.name) || '{}');

      if (isNode) {
        // create a json for root cache
        let fpath = 'root.json';
        if (!this.node.fs.existsSync(fpath)) {
          this.node.fs.writeFileSync(
            fpath,
            JSON.stringify({}),
            {
              flag: 'wx',
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
              flag: 'wx',
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
            flag: 'w',
          },
          (err) => console.log(err)
        );
        this.node.fs.writeFileSync(
          'root.json',
          JSON.stringify(this.root, null, 2),
          {
            flag: 'w',
          },
          (err) => console.log(err)
        );
      }
    }

    write(data, key) {
      this.log(`SET ${key}`);
      if (key.indexOf('#') !== -1) {
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
      if (key.indexOf('#') !== -1) {
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
      if (key.indexOf('#') !== -1) {
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
    notify(title, subtitle = '', content = '', options = {}) {
      const openURL = options['open-url'];
      const mediaURL = options['media-url'];

      if (isQX) $notify(title, subtitle, content, options);
      if (isSurge) {
        $notification.post(
          title,
          subtitle,
          content + `${mediaURL ? '\n多媒体:' + mediaURL : ''}`,
          {
            url: openURL,
          }
        );
      }
      if (isLoon) {
        let opts = {};
        if (openURL) opts['openUrl'] = openURL;
        if (mediaURL) opts['mediaUrl'] = mediaURL;
        if (JSON.stringify(opts) === '{}') {
          $notification.post(title, subtitle, content);
        } else {
          $notification.post(title, subtitle, content, opts);
        }
      }
      if (isNode || isScriptable) {
        const content_ =
          content +
          (openURL ? `\n点击跳转: ${openURL}` : '') +
          (mediaURL ? `\n多媒体: ${mediaURL}` : '');
        if (isJSBox) {
          const push = require('push');
          push.schedule({
            title: title,
            body: (subtitle ? subtitle + '\n' : '') + content_,
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
        if (typeof $context !== 'undefined') {
          $context.headers = value.headers;
          $context.statusCode = value.statusCode;
          $context.body = value.body;
        }
      }
    }

    stringify(obj_or_str) {
      if (typeof obj_or_str === 'string' || obj_or_str instanceof String)
        return obj_or_str;
      else
        try {
          return JSON.stringify(obj_or_str, null, 2);
        } catch (err) {
          return '[object Object]';
        }
    }
  })(name, debug);
}