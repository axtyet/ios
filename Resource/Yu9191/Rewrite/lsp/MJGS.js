
[rewrite_local]
#广告
https:\/\/gnjk\.eapep\.com\/(playerinfo|api\/get_advert|api\/home\/popup) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/mjgsad.js
#游戏
^https:\/\/gnjk\.eapep\.com\/request_game\/v3\/game\/list url reject-dict
#视频
https?:\/\/(mfjk|gnjk).+\.com\/api\/(comic|video|short_movie_info|novel) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/mjgshd.js

[mitm]
hostname = gnjk.eapep.com, mfjk.eapep.com
