var objc = JSON.parse($response.body);

    objc = {
  "Message" : "",
  "Result" : 0,
  "Data" : {
    "PursueBookCard" : {
      "ShowTab" : 0,
      "Url" : "https://h5.if.qidian.com/h5/chaseBookCard?_viewmode=0"
    },
    "BenefitButtonList" : [
      {
        "PositionMark" : "mypagenew_FULIZHONGXIN",
        "Url" : "https://h5.if.qidian.com/h5/adv-develop/entry?_viewmode=0",
        "Name" : "福利中心",
        "Desc" : "做任务赢章节卡",
        "DescType" : 1,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/376a9a249eb18eb209792d0cbf8b6826.pag"
      },
      {
        "PositionMark" : "mypagenew_HUODONGZHONGXIN",
        "Url" : "QDReader://app/actscenter?query={“tabId”:1}",
        "Name" : "活动中心",
        "Desc" : "精彩活动等你来",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/dd8ae7d636c9b26dfd4529486b6ac4cd.png"
      },
      {
        "PositionMark" : "mypagenew_YUEDUJIFEN",
        "Url" : "QDReader://app/openReadTimePage",
        "Name" : "阅读积分",
        "Desc" : "领积分兑好礼",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/8b5ebc1972c92e5a3e7d98b8be1f8526.png"
      },
      {
        "PositionMark" : "mypagenew_WODEKAPAI",
        "Url" : "QDReader://app/openTabWebView?query={\"urls\":\"QDReader://h5.if.qidian.com/h5/roleCard/mineCard;QDReader://h5.if.qidian.com/h5/roleCard/cardPlaza\", \"titles\":\"我的卡牌;卡牌广场\", \"pageIndex\": 1}",
        "Name" : "卡牌广场",
        "Desc" : "首抽必出SSR",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/2f4870437273f8eb6728708a83af2d97.png"
      },
      {
        "PositionMark" : "mypagenew_ZHOUBIANGOU",
        "Url" : "QDReader://app/openYouZan?query={\"url\":\"https://h5.youzan.com/v2/showcase/homepage?alias=hZLkvE8p1o\"}",
        "Name" : "周边购",
        "Desc" : "首购立减10元",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/a18b83e09e24425b513049d24db7fbc8.png"
      },
      {
        "PositionMark" : "mypagenew_YOUXIZHONGXIN",
        "Url" : "https://qdgame.qidian.com/game/region/6?entry=center",
        "Name" : "游戏中心",
        "Desc" : "尽享精彩游戏",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/25b448548b667d71c4f4c0d5d81134b5.png"
      }
    ],
    "FreshManGuideSwitch" : 1,
    "DianNiangWorldSwitch" : 1,
    "FunctionButtonList" : [
      {
        "PositionMark" : "mypagenew_WOFABUDE",
        "Url" : "QDReader://app/openMyPublish?query={\"index\":0}",
        "Name" : "我发布的",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/9fa888d325065dabb7631f5f62458c3a.png"
      },
      {
        "PositionMark" : "mypagenew_GUANZHUSHOUCANG",
        "Url" : "QDReader://app/openMyFollow?query={\"index\":0,\"tab\":\"mark\"}",
        "Name" : "关注收藏",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/98f686a918d1bda8a9c38facad7c1c19.png"
      },
      {
        "PositionMark" : "mypagenew_ZHUANGBANZHONGXIN",
        "Url" : "QDReader://app/DressUpCenter",
        "Name" : "装扮中心",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/33f2d00590e3e5706d77b32b1a2b812b.png"
      },
      {
        "PositionMark" : "mypagenew_HUIZHANGCHENGHAO",
        "Url" : "QDReader://app/openTabWebView?query={\"urls\":\"QDReader://h5.if.qidian.com/h5/mine/badgeTypeList?_viewmode=1;QDReader://h5.if.qidian.com/h5/mine/titleV2?_viewmode=1\", \"titles\":\"徽章;称号\", \"pageIndex\": 0}",
        "Name" : "徽章称号",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/fab6f55ace711a03c6bc82a15830ab1e.png"
      },
      {
        "PositionMark" : "mypagenew_CHENGWEIZUOJIA",
        "Url" : "QDReader://m.write.qq.com/portal/appGuide/1",
        "Name" : "成为作家",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/f13556e467cda23325cdd08df4161fd.png"
      },
      {
        "PositionMark" : "mypagenew_XINSHUTOUZI",
        "Url" : "QDReader://app/openMyNewBookInvest",
        "Name" : "新书投资",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/4893ce817ffc47656cccdb1a32a3bc33.png"
      },
      {
        "PositionMark" : "mypagenew_LIULANJILU",
        "Url" : "QDReader://app/openBrowseHistory",
        "Name" : "浏览记录",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/6edc72e8aeb0159c09af137e7835b0a0.png"
      },
      {
        "PositionMark" : "mypagenew_DARENZHONGXIN",
        "Url" : "QDReader://h5.if.qidian.com/h5/talentPerson/center",
        "Name" : "达人中心",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/2599876e2dee7a935217cb96498ccd51.png"
      },
      {
        "PositionMark" : "mypagenew_DIANNIANGQIMIAOSHIJIE",
        "Url" : "QDReader://h5.if.qidian.com/h5/dian/home?_viewmode=0",
        "Name" : "奇妙世界",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/4b35b045915b2d05d2e061ac5d10fcec.png"
      },
      {
        "PositionMark" : "mypagenew_SHUZICANGPIN",
        "Url" : "https://cangpin.yuewen.com/yuewen?_viewmode=0",
        "Name" : "数字藏品",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/bf7c861ce18944bd5c9432fba6d5cbb6.png"
      }
    ],
    "SchoolText" : "校园福利专区",
    "DianNiangUrl" : "QDReader://h5.if.qidian.com/h5/dian/home?_viewmode=0",
    "SchoolUrl" : "https://h5v6.if.qidian.com/h5/campusArea?_viewmode=0",
    "UserBasicInfo" : {
      "UserId" : 428156494,
      "LevelName" : "普通用户",
      "Head" : "https://raw.githubusercontent.com/Yu9191/-/main/dingdangmao.jpg",
      "LevelNumber" : 0,
      "FrameId" : 0,
      "LevelActionUrl" : "QDReader://h5.if.qidian.com/statics/profile/scorelevel.html;QDReader://h5.if.qidian.com/statics/profile/vip.html?_viewmode=1",
      "Level" : "Lv.888888",
      "FrameUrl" : "",
      "NickName" : "lovebabyforever"
    },
    "AccountBalance" : {
      "QdWorthBalance" : 0,
      "ChapterCardUrl" : "QDReader://h5.if.qidian.com/h5/account/chpCard",
      "ChapterCard" : 888888,
      "YdBalance" : 888888,
      "YdFreeBalance" : 0,
      "RechargeAd" : {
        "PositionMark" : "mypagenew_CHONGZHI",
        "Id" : 0
      },
      "Coupon" : 888888,
      "Hints" : [
        {
          "Desc" : "今日有新的限免券到账",
          "Type" : 1
        },
        {
          "Desc" : "更多",
          "Type" : 0
        }
      ],
      "CouponUrl" : "QDReader://h5.if.qidian.com/h5/account/coupon",
      "RecTicketUrl" : "QDReader://h5.if.qidian.com/statics/profile/rcm.html",
      "MonthTicket" : 8888888,
      "MonthTicketUrl" : "QDReader://h5.if.qidian.com/h5/mine/monthTicket",
      "YdWorthBalance" : 0,
      "QdBalance" : 0,
      "BalanceUrl" : "QDReader://h5.if.qidian.com/h5/account/profile?_viewmode=0",
      "QdFreeBalance" : 0
    },
    "DianNiangWorldImage" : "https://imgservices-1252317822.image.myqcloud.com/coco/s08172023/7d97970a.0ahv62.png",
    "SchoolImage" : "https://imgservices-1252317822.image.myqcloud.com/coco/s04032023/61cfb167.v4twxh.png",
    "BottomButtonList" : [
      {
        "PositionMark" : "mypagenew_BANGZHUYUKEFU",
        "Url" : "https://t.me/chxm1023",
        "Name" : "点击进入作者TG频道",
        "Desc" : "",
        "DescType" : 0,
        "Image" : "https://readx-her-1252317822.file.myqcloud.com/yuewen-amis/backend/e9c208cff366b7be49ca1bf402851b42.png"
      }
    ],
    "Member" : {
      "ExpireTips" : "2099-09-29",
      "SubTitle" : "2099-09-09到期|权益升级！新增2万+免费有声书等福利",
      "ExpireTime" : 4092599349000,
      "ActionUrl" : "https://h5.if.qidian.com/h5/vip-card/entry?_viewmode=0",
      "ButtonTitle" : "立即续费",
      "CardId" : "member",
      "IsMember" : 1,
      "MemberType" : 1,
      "Title" : "超级起点会员",
      "IconUrl" : "https://qidian.qpic.cn/qidian_common/349573/b607187c713dc16bb9b2f09d1119843c/0",
      "IsAuto" : 0,
      "NextFeeTime" : 0
    }
  }
}

$done({body : JSON.stringify(objc)});
