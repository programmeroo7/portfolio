if (self.CavalryLogger) { CavalryLogger.start_js(["oXzmJ"]); }

__d("CometUFIVideoPlayerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext;c=a([null,function(){}]);e.exports=c}),null);
__d("useCometUFIVideoPlayerStateAndController",["CometUFIVideoPlayerContext","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){var a=g(b("CometUFIVideoPlayerContext")),c=a[0];a[1];return c}e.exports=a}),null);
__d("IdentityBadgeUtils",["cx","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){switch(a){case"tipper":case"birthday_week_tipper":case"streamer_appreciation_week_tipper":return b("gkx")("709988");case"sharer":return b("gkx")("709989");case"follower":return b("gkx")("833805");case"woodhenge_submageddon":return b("gkx")("1113070");case"original":return b("gkx")("1144561");case"top_fan":case"frequent_watcher":case"woodhenge":case"author":case"fan_funding_supporter":return!0;default:return!1}};a=function(a){__p&&__p();if(a==null||a.length===0)return null;a=a.filter(function(a){a=JSON.parse(a.serialized);a=a.type;return h(a)});return a.length===0?null:a.map(function(a){var b=JSON.parse(a.serialized);b=b.type;return{type:b,badge_asset:a.badge_asset,badge_color:a.badge_color,multiple_badge_asset:a.multiple_badge_asset,multiple_badge_asset_colored:a.multiple_badge_asset_colored,text:a.text,serialized:a.serialized}})};var i=(c={},c.frequent_watcher="_7wxe",c.woodhenge="_7wxf",c.top_fan="_7wxg",c),j=function(a,c){return a!=null&&a.isgamingvideo&&c&&(c.feedLocationType===131||c.isTahoeUFI===!0)&&b("gkx")("900386")};d=function(a,b,c,d){if(!a||!Array.isArray(a.identityBadges)||a.identityBadges.length===0||!a.isunseen||d===!0||!j(b,c))return null;d=a.identityBadges.map(function(a){return a.type}).filter(function(a){return a.toString()in i});return d.length===0?null:i[d[0]]};e.exports={commentColorAnimationClass:d,fromLiveVideoCommentCreateSubscription:a,isEligibleForColorComments:j,isBadgeTypeEligible:h}}),null);