var body = $response.body;
var obj = JSON.parse(body);

obj.result.memberType = 12,
obj.result.StartTime = "2022-04-23 16:20:35",
obj.result.EndTime = "2029-04-23 16:20:35",
obj.result.isSuperVip = 3,
obj.result.superStartTime = "2022-04-23 16:20:35",
obj.result.superEndTime = "2029-04-23 16:20:35",
obj.result.oldSuperStartTime = "2022-04-23 16:20:35",
obj.result.oldSuperEndTime = "2029-04-23 16:20:35",
obj.result.pro_center_data = {
      "pro_type": 2,
      "pro_type_title": "金星會員",
      "pro_service_title": "",
      "pro_start_date": "",
      "pro_end_date": "2029-04-30",
      "day_left": "",
      "is_pro_center_red_dot": 0
    },
obj.result.specialRight = {
      "isBaseData": 1,
      "isSuperVideo": 1,
      "isAllSession": 0,
      "isAllProgram": 1,
      "isAllKol": 1,
      "isAllMusicService": 1,
      "isCusterProgram": 1,
      "isCusterProgramDays": 1,
      "isSuperData": 1,
      "isPoseLibrary": 1,
      "isPoseLibraryDays": 1,
      "isQa": 1,
      "isKillAd": 1,
      "isKillAdDays": 1,
      "isMessage": 1,
      "isMessageLevel": 0,
      "isMessageImg": 0,
      "isMessageImgLevel": 0,
      "isUserZone": 0,
      "isUserZoneLevel": 3,
      "isYomi": 1,
      "isYomiLevel": 3,
      "isAllMusic": 1,
      "isAllMusicDays": 0,
      "isMirror": 0,
      "isMirrorLevel": 11,
      "isSingleMusic": 0,
      "isShareCommunity": 1,
      "isShareCommunityLevel": 0,
      "isSmartCoachTrial": 0,
      "isSmartCoachOpen": 0
    },
  

body = JSON.stringify(obj); 
$done({body});
