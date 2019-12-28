if (self.CavalryLogger) { CavalryLogger.start_js(["NWuHy"]); }

__d("FileInput.react",["cx","invariant","FileInput","InlineBlock.react","React","ReactDOM","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.getFileInput=function(){return b("nullthrows")(d.$1)},d.focus=function(){var a=b("ReactDOM").findDOMNode(d.refs.fileInput);a instanceof HTMLInputElement&&!a.disabled&&a.focus()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=b("joinClasses")("_m",this.props.containerClassName),c="container",d=b("React").jsx("input",babelHelpers["extends"]({},this.props,{type:"file",className:b("joinClasses")(this.props.className,"_n"),ref:"fileInput",children:void 0}));if(this.props.display==="block")return b("React").jsxs("div",{className:a,ref:c,children:[this.props.children,d]});else if(this.props.display==="inline-block")return b("React").jsxs(b("InlineBlock.react"),{className:a,ref:c,children:[this.props.children,d]});else return b("React").jsxs("span",{className:a,ref:c,children:[this.props.children,d]})};d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.fileInput),c=b("ReactDOM").findDOMNode(this.refs.container);if(!(a instanceof HTMLInputElement)||!(c instanceof HTMLElement))return;var d=c.firstChild;d instanceof HTMLAnchorElement||h(0,5212);d.setAttribute("rel","ignore");this.$1=new(b("FileInput"))(c,d,a)};d.componentWillUnmount=function(){this.$1&&(this.$1.destroy(),this.$1=null)};return c}(b("React").Component);a.defaultProps={display:"inline-block"};e.exports=a}),null);
__d("BUIComponent",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").Component;c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("BUIProgressBar.react",["cx","BUIComponent","ErrorMarker.react","Image.react","LoadingMarker.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=248;c={background:"default",isBuffering:!1,isSuccess:!1,isError:!1,height:"medium",width:h,color:"blue",flexibleWidth:!1,padding:!0,representsWait:!0,isComplete:!1,useAltCompleteVisuals:!0};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$BUIProgressBar3=function(){if(c.props.flexibleWidth)return{width:"100%"};var a=+c.props.width;return{width:(a>h?h:a)+"px"}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$BUIProgressBar1=function(){if(!this.props.icon&&!this.props.message)return null;var a;this.props.icon&&(a=b("React").jsx(b("Image.react"),{className:"__q1",src:this.props.icon}));return b("React").jsxs("div",{className:"__q2","data-testid":this.props.dataTestId,children:[a,this.props.message]})};d.$BUIProgressBar2=function(){var a=this.props.background;if(this.props.isBuffering)return b("React").jsx("div",{className:"__q3",style:{width:"100%"}});var c=this.props.percentage||0;c<0&&(c=0);c>100&&(c=100);return b("React").jsx("div",{className:"_65ab"+(a==="default"?" __q6":"")+(a==="transparent"?" _65ac":""),children:b("React").jsx("div",{className:"__q7",style:{width:c+"%"}})})};d.render=function(){var a=b("joinClasses")("__qa"+(this.props.isComplete===!0?" __qb":"")+(this.props.isComplete===!0&&this.props.useAltCompleteVisuals?" _6age":"")+(this.props.isError===!0?" __qc":"")+(this.props.height==="small"?" _2tr-":"")+(this.props.color==="gray"?" _2tr_":"")+(this.props.padding===!0?" _2m-z":""),this.props.className);a=b("React").jsxs("div",{className:a,style:this.$BUIProgressBar3(),children:[this.$BUIProgressBar2(),this.$BUIProgressBar1()]});this.props.representsWait&&!this.props.isComplete&&(a=b("React").jsx(b("LoadingMarker.react"),{children:a}));this.props.isError&&(a=b("React").jsx(b("ErrorMarker.react"),{children:a}));return a};return c}(b("BUIComponent"));d.propTypes={background:a.oneOf(["default","transparent"]),dataTestId:a.string,icon:a.object,isBuffering:a.bool,isError:a.bool,isSuccess:a.bool,message:a.node,percentage:a.number,height:a.oneOf(["small","medium"]),width:a.number,color:a.oneOf(["gray","blue"]),flexibleWidth:a.bool,padding:a.bool,representsWait:a.bool,isComplete:a.bool,useAltCompleteVisuals:a.bool};d.defaultProps=c;e.exports=d}),null);
__d("InputLabel.react",["cx","invariant","HelpLink.react","React","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a,c,d=this.props.children;Array.isArray(d)?(this.props.children.length===2||h(0,691),a=d[0],c=d[1]):a=d;d=a.type==="input";var e=a.props;a=b("React").cloneElement(a,{className:b("joinClasses")(e.className,"uiInputLabelInput"+(d&&e.type==="radio"?" uiInputLabelRadio":"")+(d&&e.type==="checkbox"?" uiInputLabelCheckbox":"")),id:e.id||b("uniqueID")()});e=a.props;var f,g=this.props,i=g.label,j=g.helpText;g=babelHelpers.objectWithoutPropertiesLoose(g,["label","helpText"]);if(c)f=b("React").cloneElement(c,{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:e.id});else{j=j?b("React").jsx(b("HelpLink.react"),{tooltip:j,href:this.props.helpLink}):null;f=b("React").jsxs("label",{className:b("joinClasses")(this.props.labelClassName,this.props.flipped?"uiInputLabelLabelFlipped":"uiInputLabelLabel"),htmlFor:e.id,children:[i,j]})}e="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").jsxs("div",babelHelpers["extends"]({},g,{className:b("joinClasses")(this.props.className,e),children:[this.props.flipped?f:a,this.props.flipped?a:f]}))};return c}(b("React").Component);c.propTypes={display:a.oneOf(["block","inline"])};c.defaultProps={display:"block"};e.exports=c}),null);
__d("MenuDeprecated",["ArbiterMixin","CSS","DataStore","DOM","Event","HTML","Keys","Parent","Style","UserAgent_DEPRECATED","emptyFunction","mixin","Run"],(function(a,b,c,d,e,f){__p&&__p();var g="menu:mouseover",h=null;function i(a){return b("CSS").hasClass(a,"uiMenuContainer")?a:b("Parent").byClass(a,"uiMenu")}function j(a){return b("Parent").byClass(a,"uiMenuItem")}function k(a){if(document.activeElement){var b=j(document.activeElement);return a.indexOf(b)}return-1}function l(a){return b("DOM").find(a,"a.itemAnchor")}function m(a){return b("CSS").hasClass(a,"checked")}function n(a){return!b("CSS").hasClass(a,"disabled")&&b("Style").get(a,"display")!=="none"}function o(a){var c=document.activeElement;if(!c||!b("Parent").byClass(c,"uiMenu")||!b("DOM").isInputNode(c)){c=j(a.getTarget());c&&r.focusItem(c)}}function p(a){b("UserAgent_DEPRECATED").firefox()&&l(a).blur(),r.inform("select",{menu:i(a),item:a})}var q=function(){__p&&__p();q=b("emptyFunction");var a={};a.click=function(a){a=j(a.getTarget());if(a&&n(a)){p(a);a=l(a);var b=a.href;a=a.getAttribute("rel");return a&&a!=="ignore"||b&&b.charAt(b.length-1)!=="#"}};a.keydown=function(a){__p&&__p();var c=a.getTarget();if(a.getModifiers().any)return;if(!h||b("DOM").isInputNode(c))return;var d=b("Event").getKeyCode(a),e;switch(d){case b("Keys").UP:case b("Keys").DOWN:var f=r.getEnabledItems(h);e=k(f);r.focusItem(f[e+(d===b("Keys").UP?-1:1)]);return!1;case b("Keys").SPACE:f=j(c);f&&(p(f),a.prevent());break;default:c=String.fromCharCode(d).toLowerCase();f=r.getEnabledItems(h);e=k(f);a=e;d=f.length;while(~e&&(a=++a%d)!==e||!~e&&++a<d){var g=r.getItemLabel(f[a]);if(g&&g.charAt(0).toLowerCase()===c){r.focusItem(f[a]);return!1}}}};b("Event").listen(document.body,a)};a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.focusItem=function(a){a&&n(a)&&(this.$removeSelected(i(a)),b("CSS").addClass(a,"selected"),l(a).focus())};d.getEnabledItems=function(a){return r.getItems(a).filter(n)};d.getCheckedItems=function(a){return r.getItems(a).filter(m)};d.getItems=function(a){return b("DOM").scry(a,"li.uiMenuItem")};d.getItemLabel=function(a){return a.getAttribute("data-label",2)||""};d.isItemChecked=function(a){return b("CSS").hasClass(a,"checked")};d.autoregister=function(a,b,c){a.subscribe("show",function(){r.register(b,c)}),a.subscribe("hide",function(){r.unregister(b)})};d.register=function(a,c){a=i(a),q(),b("DataStore").get(a,g)||b("DataStore").set(a,g,b("Event").listen(a,"mouseover",o)),c!==!1&&(h=a)};d.setItemEnabled=function(a,c){!c&&!b("DOM").scry(a,"span.disabledAnchor")[0]&&b("DOM").appendContent(a,b("DOM").create("span",{className:b("DOM").find(a,"a").className+" disabledAnchor"},b("HTML")(l(a).innerHTML))),b("CSS").conditionClass(a,"disabled",!c)};d.toggleItem=function(a){var b=!r.isItemChecked(a);r.setItemChecked(a,b)};d.setItemChecked=function(a,c){b("CSS").conditionClass(a,"checked",c),l(a).setAttribute("aria-checked",c)};d.unregister=function(a){a=i(a);var c=b("DataStore").remove(a,g);c&&c.remove();h=null;this.$removeSelected(a)};d.$removeSelected=function(a){r.getItems(a).filter(function(a){return b("CSS").hasClass(a,"selected")}).forEach(function(a){b("CSS").removeClass(a,"selected")})};return c}(b("mixin")(b("ArbiterMixin")));var r=new a();e.exports=r}),null);
__d("SubscriptionLevels",[],(function(a,b,c,d,e,f){a=Object.freeze({ALL:"162318810514679",DEFAULT:"271670892858696",TOP:"266156873403755"});e.exports=a}),null);
__d("EditSubscriptions",["csx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuDeprecated","Parent","SubscriptionLevels","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();var h=45,i=[b("SubscriptionLevels").ALL,b("SubscriptionLevels").DEFAULT,b("SubscriptionLevels").TOP],j={},k={},l={},m={},n={},o={},p={},q={},r={},s={},t={},u="/ajax/follow/follow_profile.php",v="/ajax/follow/unfollow_profile.php",w="/ajax/settings/notifications/notify_me.php",x={},y={},z={},A=null,B={};function C(a){return i.includes(a)}function D(a,c,d,e){__p&&__p();e=b("Parent").byClass(e,"uiMenuItem")||b("Parent").bySelector(e,"._54ni");var f=b("getOrCreateDOMID")(a);if(!e||!b("DOM").contains(a,e))return;else if(b("CSS").hasClass(e,"SubscribeMenuSubscribeCheckbox")){l[c]?I(f,c):H(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuUnsubscribe")){I(f,c);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuSettingsItem")){U(a,!0);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuGoBack")){U(a,!1);return!1}else if(b("CSS").hasClass(e,"SubscriptionMenuItem")){F(a,c,d,e);return!1}else if(b("CSS").hasClass(e,"SubscribeMenuNotifyMeCheckbox")){E(a,c);return!1}}function E(a,b){m[b]?Y(a,b):X(a,b)}function F(a,c,d,e){if(b("CSS").hasClass(e,"SubscriptionMenuLevel")){if(b("MenuDeprecated").isItemChecked(e))return;S(a,c,L(e),!0,d)}else b("CSS").hasClass(e,"SubscriptionMenuCategory")?P(c,e,!b("MenuDeprecated").isItemChecked(e),!0,d):b("CSS").hasClass(e,"SubscriptionAppStory")&&R(c,e,!b("MenuDeprecated").isItemChecked(e),d)}function G(a){return B[a]?B[a]:0}function H(a,c){var d={profile_id:c};b("Arbiter").inform("FollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,d);new(b("AsyncRequest"))().setURI(u).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",d)).send()}function I(a,c){var d={profile_id:c};b("Arbiter").inform("UnfollowingUser",d);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,d);new(b("AsyncRequest"))().setURI(v).setMethod("POST").setData({profile_id:c,location:G(a)}).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",d)).send()}function J(a,c,d){c={profile_id:a,level:q[a],custom_categories:r[a],location:d};new(b("AsyncRequest"))().setURI("/ajax/follow/manage_subscriptions.php").setData(c).send()}function K(a,c){__p&&__p();var d=r[c]||[],e=b("MenuDeprecated").getItems(a);e.forEach(function(a){if(b("CSS").hasClass(a,"SubscriptionMenuCategory")){var e=L(a);d.includes(e)?N(a):O(a)}else if(b("CSS").hasClass(a,"SubscriptionAppStory")){e=L(a);z[c]&&z[c][e]?N(a):O(a)}});S(a,c,q[c],!1)}function L(a){a=b("DOM").scry(a,"input")[0];return a&&a.value}function M(a){return b("DOM").find(a,"a.itemAnchor")}function N(a){b("CSS").addClass(a,"checked"),M(a).setAttribute("aria-checked",!0)}function O(a){b("CSS").removeClass(a,"checked"),M(a).setAttribute("aria-checked",!1)}function P(a,b,c,d,e){__p&&__p();c?N(b):O(b);b=L(b);if(C(b))c&&Q(a,b);else if(c)r[a].includes(b)||r[a].push(b);else{c=r[a].indexOf(b);c!==-1&&r[a].splice(c,1)}d&&J(a,b,e)}function Q(a,c){q[a]=c,b("Arbiter").inform("SubscriptionLevelUpdated",{profile_id:a,level:c})}function R(a,c,d,e){e="/ajax/feed/filter_action/";var f=L(c),g={actor_id:a,app_id:f};d?(N(c),e+="resubscribe_user_app/",g.action="resubscribe_user_app",z[a]||(z[a]={}),z[a][f]=!0):(O(c),e+="unsubscribe_user_app_checkbox/",g.action="unsubscribe_user_app_checkbox",z[a]&&(z[a][f]=!1));new(b("AsyncRequest"))().setURI(e).setData(g).send()}function S(a,c,d,e,f){a=b("DOM").scry(a,".SubscriptionMenuLevel");var g=null;a.forEach(function(a){L(a)==d?g=a:b("MenuDeprecated").isItemChecked(a)&&P(c,a,!1,!1)});g&&P(c,g,!0,e,f)}function T(a,c,d){l[c]=d;b("CSS").conditionClass(a,"isUnsubscribed",!d);c=b("DOM").scry(a,"li.SubscribeMenuSubscribeCheckbox");if(c.length!==0){a=c[0];d?N(a):O(a)}}function U(a,c){b("CSS").conditionClass(a,"subscriptionMenuOpen",c)}function V(a,c,d){c=b("DOM").find(a,".FriendListSubscriptionsMenu");var e=b("DOM").find(c,".uiMenuInner");A!=null&&A.forEach(function(a){e.removeChild(a)});d.forEach(function(a){e.appendChild(a)});A=d}b("Arbiter").subscribe("UnfollowUser",function(a,b){s[b.profile_id]&&(Q(b.profile_id,s[b.profile_id]),r[b.profile_id]=t[b.profile_id].slice())});b("Arbiter").subscribe("UpdateSubscriptionLevel",function(a,c){a=c.profile_id+"";c=c.level+"";Q(a,c);var d;for(d in j)if(j[d]===a){var e=b("ge")(d);e&&S(e,a,c,!1)}});b("Arbiter").subscribe("listeditor/close_editor",function(){var a;for(a in j){var c=b("ge")(a);c&&U(c,!1)}});function W(a,c,d){__p&&__p();m[c]=d;c=y[c];if(c){d?c.select():c.deselect();return}c=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckbox");if(c.length!==0){c=c[0];b("CSS").conditionShow(c,!0);a=b("DOM").scry(a,"li.SubscribeMenuNotifyMeCheckboxSeparator");a.length>0&&b("CSS").conditionShow(a[0],!0);d?N(c):O(c)}}function X(a,c){a={profile_id:c};b("Arbiter").inform("EnableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!0}).setErrorHandler(b("Arbiter").inform.bind(null,"EnableNotifsForUserFail",a)).send()}function Y(a,c){a={profile_id:c};b("Arbiter").inform("DisableNotifsForUser",a);new(b("AsyncRequest"))().setURI(w).setMethod("POST").setData({notifier_id:c,enable:!1}).setErrorHandler(b("Arbiter").inform.bind(null,"DisableNotifsForUserFail",a)).send()}c={init:function(a,c,d){__p&&__p();var e=b("getOrCreateDOMID")(a);B[e]=d;j[e]||b("Event").listen(a,"click",function(b){return D(a,j[e],d,b.getTarget())});d===h&&x[c].length&&V(a,c,x[c]);q[c]&&K(a,c);j[e]=c;b("CSS").conditionClass(a,"NonFriendSubscriptionMenu",!k[c]);b("CSS").conditionClass(a,"cannotSubscribe",!n[c]);b("CSS").conditionClass(a,"noSubscriptionLevels",o[c]&&!p[c]);b("CSS").conditionClass(a,"noSubscribeCheckbox",!k[c]&&!o[c]);T(a,c,l[c]);W(a,c,m[c]);b("Arbiter").subscribe(["FollowUser","FollowingUser","UnfollowUserFail"],function(b,d){d.profile_id==c&&T(a,c,!0)}.bind(this));b("Arbiter").subscribe(["UnfollowUser","UnfollowingUser","FollowUserFail"],function(d,e){e.profile_id==c&&(b("Arbiter").inform("SubMenu/Reset"),T(a,c,!1))}.bind(this));b("Arbiter").subscribe(["EnableNotifsForUser","DisableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!0)}.bind(this));b("Arbiter").subscribe(["DisableNotifsForUser","EnableNotifsForUserFail"],function(b,d){d.profile_id==c&&W(a,c,!1)}.bind(this));b("Arbiter").subscribe("listeditor/friend_lists_changed",function(b,c){if(c.notify_state){b=c.added_uid?c.added_uid:c.removed_uid;W(a,b,c.notify_state.is_notified)}}.bind(this))},getSubscriptions:function(a){return{level:q[a],custom_categories:r[a]}},registerTimelineNotifySelector:function(a,c){var d=a.getInitialMenu(),e=a.getContentRoot();d.forEachItem(function(a){var d=a.getRoot();b("CSS").hasClass(d,"SubscribeMenuNotifyMeCheckbox")&&(y[c]=a,W(e,c,m[c]))});d.subscribe("itemclick",function(a,b){b.item===y[c]&&E(e,c);return!0})},toggleNotificationsOnJoin:function(a,b){m[a]!==b&&E(null,a)},setSubscriptions:function(a,b,c,d,e,f,g,h,i,j,q,u){Q(a,g+""),k[a]=b,l[a]=c,n[a]=d,o[a]=e,p[a]=f,s[a]=i+"",r[a]=h.map(String),t[a]=j.map(String),x[a]=u,m[a]=q}};e.exports=a.EditSubscriptions||c}),null);
__d("PagesNuxFrameworkTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setNuxID=function(a){this.$1.nux_id=a;return this};c.setNuxSurface=function(a){this.$1.nux_surface=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,nux_id:!0,nux_surface:!0,page_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ExceptionDialog",["fbt","invariant","DialogX","FbtResultBase","LayerDestroyOnHide","LayerHideOnEscape","React","ServerHTML.react","XUIDialogBody.react","XUIDialogCloseButton.react","XUIDialogFooter.react","XUIDialogTitle.react","XUIGrayText.react","getViewportDimensions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=900,j=40,k={};function l(a){a instanceof b("FbtResultBase")&&(a={__html:a});return a}var m={showAsyncError:function(a,c){__p&&__p();c===void 0&&(c="dev");try{var d=a.getErrorSummary(),e=a.getErrorDescription();a.silentError&&e===""&&(e=g._("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again."));if(a.error){this.errorCode=a.error;if(k[this.errorCode])return;k[this.errorCode]=!0}var f=["always"],h=null;if(f.includes(c)&&(a.payload instanceof XMLHttpRequest&&a.payload.responseText)){f={width:"100%",height:window.innerHeight*.7+"px"};h=b("React").jsx("iframe",{style:f,srcDoc:a.payload.responseText});e=null}return m.show(d,e,h)}catch(b){alert(JSON.stringify(a))}},show:function(a,c,d){c=l(c);!c||!d||h(0,3624);var e=b("getViewportDimensions").withoutScrollbars().width;e=e>0?Math.min(e-j,i):i;e=new(b("DialogX"))({width:e,addedBehaviors:[b("LayerDestroyOnHide"),b("LayerHideOnEscape")]},b("React").jsxs("div",{"data-testid":"exception_dialog",style:{maxHeight:"80vh",overflow:"auto"},children:[b("React").jsx(b("XUIDialogTitle.react"),{showCloseButton:!1,children:a}),b("React").jsx(b("XUIDialogBody.react"),{children:b("React").jsxs(b("XUIGrayText.react"),{shade:"medium",size:"body1",children:[c!=null&&b("React").jsx(b("ServerHTML.react"),{blob:c}),d]})}),b("React").jsx(b("XUIDialogFooter.react"),{children:b("React").jsx(b("XUIDialogCloseButton.react"),{use:"confirm",className:"autofocus"})})]}));e.subscribe(["hide"],function(a){this.errorCode&&delete k[this.errorCode]}.bind(this));e.show();return e}};e.exports=m}),null);
__d("SelectorDeprecated",["Arbiter","ArbiterMixin","Button","ContextualLayer","CSS","DataStore","DOM","Event","Focus","HTML","Keys","MenuDeprecated","Parent","Style","Toggler","TooltipData","URI","Vector","emptyFunction","getDocumentScrollElement","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=[],k;function l(a){return b("Parent").byClass(a,"uiSelector")}function m(a){return b("Parent").byClass(a,"uiSelectorButton")}function n(){i||(i=new(b("ContextualLayer"))({position:"below"},b("DOM").create("div")),b("CSS").addClass(i.getRoot(),"uiSelectorContextualLayer"));return i}function o(a){return b("DOM").scry(a,"select")[0]}function p(a){return b("DOM").find(a,"div.uiSelectorMenuWrapper")}var q=function(){__p&&__p();q=b("emptyFunction"),b("MenuDeprecated").subscribe("select",function(a,c){__p&&__p();if(!h||!c||c.menu!==v.getSelectorMenu(h))return;a=r(h);var d=s(c.item);if(d){var e=h,f=v.isOptionSelected(c.item),g=v.inform("select",{selector:e,option:c.item,clone:k});if(g===!1)return;(a||!f)&&(v.setSelected(e,v.getOptionValue(c.item),!f),v.inform("toggle",{selector:e,option:c.item}),v.inform("change",{selector:e}),b("Arbiter").inform("Form/change",{node:e}),t(e)&&b("DataStore").set(e,"dirty",!0))}(!a||!d)&&(h&&v.toggle(h))})};function r(a){return!!a.getAttribute("data-multiple")}function s(a){return b("CSS").hasClass(a,"uiSelectorOption")}function t(a){return!!a.getAttribute("data-autosubmit")}var u=function(){__p&&__p();u=b("emptyFunction");var a={keydown:function(a){__p&&__p();var c=a.getTarget();if(b("DOM").isInputNode(c))return;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:case b("Keys").SPACE:case b("Keys").UP:if(m(c)){a=l(c);v.toggle(a);return!1}break;case b("Keys").ESC:if(h){c=v.getSelectorButton(h);v.toggle(h);c&&b("Focus").set(c);return!1}break}},mouseover:function(a){a=b("Parent").byAttribute(a.getTarget(),"ajaxify");a&&b("CSS").hasClass(a,"uiSelectorButton")&&v.loadMenu(l(a))}};b("Event").listen(document.body,a)};b("Toggler").subscribe(["show","hide"],function(a,c){__p&&__p();var d=l(c.getActive());if(d){u();q();var e=v.getSelectorButton(d),f=v.getSelectorMenu(d);a=a==="show";e.setAttribute("aria-expanded",a?"true":"false");if(a){h=d;if(b("CSS").hasClass(e,"uiButtonDisabled")){v.setEnabled(d,!1);return!1}f=f||v.loadMenu(d);e=b("Style").getScrollParent(d);var g=e!==window&&e!==b("getDocumentScrollElement")();if(g||b("CSS").hasClass(d,"uiSelectorUseLayer")){g&&j.push(b("Event").listen(e,"scroll",function(){c.hide()}));k=b("DOM").create("div",{className:d.className});b("CSS").addClass(k,"invisible_elem");b("Vector").getElementDimensions(d).setElementDimensions(k);b("DOM").replace(d,k);g=b("CSS").hasClass(d,"uiSelectorRight");e=b("CSS").hasClass(d,"uiSelectorBottomUp");n().setContext(k).setContent(d).setPosition(e?"above":"below").setAlignment(g?"right":"left").show()}b("MenuDeprecated").register(f);e=b("MenuDeprecated").getCheckedItems(f);e.length||(e=b("MenuDeprecated").getEnabledItems(f));e.length&&b("MenuDeprecated").focusItem(e[0])}else{h=null;if(k){while(j.length)j.pop().remove();b("DOM").replace(k,d);n().hide();k=null}f&&b("MenuDeprecated").unregister(f);if(t(d)&&b("DataStore").get(d,"dirty")){g=b("DOM").scry(d,"input.submitButton")[0];g&&g.click();b("DataStore").remove(d,"dirty")}}b("CSS").conditionClass(v.getSelectorButton(d),"selected",a);v.inform(a?"open":"close",{selector:d,clone:k})}});a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var e=c.prototype;e.attachMenu=function(a,c,d){__p&&__p();a=l(a);if(a){h&&b("MenuDeprecated").unregister(v.getSelectorMenu(h));b("DOM").setContent(p(a),c);h&&b("MenuDeprecated").register(v.getSelectorMenu(a));k&&n().updatePosition();if(d){c=a.getAttribute("data-name");c&&d.setAttribute("name",c);r(a)||d.setAttribute("multiple",!1);c=o(a);c?b("DOM").replace(c,d):b("DOM").insertAfter(a.firstChild,d)}return!0}};e.getOption=function(a,b){a=v.getOptions(a);var c=a.length;while(c--)if(b===v.getOptionValue(a[c]))return a[c];return null};e.getOptions=function(a){a=b("MenuDeprecated").getItems(v.getSelectorMenu(a));return a.filter(s)};e.getEnabledOptions=function(a){a=b("MenuDeprecated").getEnabledItems(v.getSelectorMenu(a));return a.filter(s)};e.getSelectedOptions=function(a){return b("MenuDeprecated").getCheckedItems(v.getSelectorMenu(a))};e.getOptionText=function(a){return b("MenuDeprecated").getItemLabel(a)};e.getOptionValue=function(a){var b=l(a),c=o(b);b=v.getOptions(b).indexOf(a);return b>=0?c.options[b+1].value:""};e.getSelectorButton=function(a){return b("DOM").find(a,"a.uiSelectorButton")};e.getSelectorMenu=function(a){return b("DOM").scry(a,"div.uiSelectorMenu")[0]};e.getValue=function(a){__p&&__p();var b=o(a);if(!b)return null;if(!r(a))return b.value;a=[];b=b.options;for(var c=1,d=b.length;c<d;c++)b[c].selected&&a.push(b[c].value);return a};e.isOptionSelected=function(a){return b("MenuDeprecated").isItemChecked(a)};e.listen=function(a,b,c){return this.subscribe(b,function(b,d){if(d.selector===a)return c(d,b)})};e.loadMenu=function(a,c){__p&&__p();var e=v.getSelectorMenu(a);if(!e){var f=v.getSelectorButton(a),h=f.getAttribute("ajaxify");if(h){d(["AsyncRequest"],function(a){var d=new(g||(g=b("URI")))(h),e=d.getQueryData();d.setQueryData({});a=new a(d).setData(e).setNectarModuleDataSafe(f).setRelativeTo(f);c&&a.setFinallyHandler(function(){setTimeout(c,0)});a.send()}.bind(this));var i=b("HTML")('<div class="uiSelectorMenuWrapper uiToggleFlyout"><div class="uiMenu uiSelectorMenu loading"><ul class="uiMenuInner"><li><span></span></li></ul></div></div>');b("DOM").appendContent(f.parentNode,i);e=v.getSelectorMenu(a);f.removeAttribute("onmouseover")}}else c&&c();return e};e.setButtonLabel=function(a,c){a=v.getSelectorButton(a);var d=parseInt(a.getAttribute("data-length"),10);c=c||a.getAttribute("data-label")||"";b("Button").setLabel(a,c);typeof c==="string"&&(d&&c.length>d?a.setAttribute("title",c):a.removeAttribute("title"))};e.setButtonTooltip=function(a,c){a=v.getSelectorButton(a);var d=b("Parent").byTag(a,"a");d&&b("TooltipData").set(d,c||a.getAttribute("data-tooltip")||"")};e.setEnabled=function(a,c){!c&&h&&l(a)===h&&v.toggle(a),b("Button").setEnabled(v.getSelectorButton(a),c)};e.setOptionEnabled=function(a,c){b("MenuDeprecated").setItemEnabled(a,c)};e.setSelected=function(a,c,d){__p&&__p();d=d!==!1;c=v.getOption(a,c);if(!c)return;var e=v.isOptionSelected(c);if(d!==e){if(!r(a)&&!e){d=v.getSelectedOptions(a)[0];d&&b("MenuDeprecated").toggleItem(d)}b("MenuDeprecated").toggleItem(c)}v.updateSelector(a)};e.toggle=function(a){b("Toggler").toggle(b("DOM").scry(l(a),"div.wrap")[0])};e.updateSelector=function(a){__p&&__p();var c=v.getOptions(a),d=v.getSelectedOptions(a),e=o(a).options,f=[],g=[];for(var h=0,i=c.length;h<i;h++){var j=d.includes(c[h]);e[h+1].selected=j;if(j){j=v.getOptionText(c[h]);f.push(j);g.push(c[h].getAttribute("data-tooltip")||j)}}e[0].selected=!d.length;j=b("CSS").hasClass(a,"uiSelectorDynamicLabel");h=b("CSS").hasClass(a,"uiSelectorDynamicTooltip");if(j||h){i="";if(r(a)){c=v.getSelectorButton(a);i=c.getAttribute("data-delimiter")||", "}f=f.join(i);g=g.join(i);j&&v.setButtonLabel(a,f);h&&v.setButtonTooltip(a,g)}};return c}(b("mixin")(b("ArbiterMixin")));var v=new a();e.exports=v}),null);
__d("XPageNuxSelectorAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/nux_selector/",{page_id:{type:"FBID",required:!0},nux_ids:{type:"EnumVector",required:!0,enumType:{member:0}},surface:{type:"Enum",required:!0,enumType:1}})}),null);
__d("PagesNuxFrameworkHelper",["AsyncRequest","BasicFBNux","FBLogger","PagesNuxFrameworkTypedLogger","Run","XPageNuxSelectorAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={},i=null,j=null;function k(){return i}function l(a){i=a}function m(){return j}function n(a){j=a}function o(a,b,c,d,e){g[b]||(g[b]={}),g[b][a]={showCallback:c,isReadyForRender:d,contextRef:e}}function p(){return g}function q(a,b,c){if(!g[b]||!g[b][a])return;g[b][a].isReadyForRender=c}function r(a,b){h[a]=b}function s(){return h}var t={_initSurface:function(a,b){n(b),l(a)},_showNux:function(c,d){__p&&__p();var a=m();if(!a)return;if(!c.isShown()){try{c.show()}catch(c){b("FBLogger")("pages_nux_framework").mustfix("Nux ID: %s, Surface: %s, raised exception when rendering",d,a)}c.subscribe("hide",function(){t.closeNux(d,a)})}},_setNuxActive:function(c){__p&&__p();if(!c)return;var a=m();if(!a)return;var d=p()[a][c];if(!d.isReadyForRender&&d.contextRef){new(b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.hold").setPageID(k()).setNuxID(c).setNuxSurface(a).log();d.contextRef&&d.contextRef.addEventListener("show",function(){c&&(d.showCallback&&d.showCallback(),b("BasicFBNux").onView(c),new(b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.show_nux").setPageID(k()).setNuxID(c).setNuxSurface(a).log())});r(a,c);return}d.showCallback.apply();b("BasicFBNux").onView(c);r(a,c);new(b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.show_nux").setPageID(k()).setNuxID(c).setNuxSurface(a).log()},_pickAndShowNux:function(){__p&&__p();var d=m();if(!d)return;var a=p()[d];if(!a)return;var c=s()[d];if(c){a[c].isReadyForRender===!1&&q(c,d,!0);t._setNuxActive(c);return}c=k();if(!c)return;c=b("XPageNuxSelectorAsyncController").getURIBuilder().setFBID("page_id",c).setEnumVector("nux_ids",Object.keys(a)).setEnum("surface",d).getURI();new(b("AsyncRequest"))().setHandler(function(a){t._setNuxActive(a.payload)}).setURI(c).send()},registerNux:function(a,c,d,e,f){o(a,c,d,e?e:!0,f),new(b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.register_nux").setPageID(k()).setNuxID(a).setNuxSurface(c).log()},closeNux:function(a,c){r(c,null),b("BasicFBNux").onDismiss(a),new(b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.xout").setPageID(k()).setNuxID(a).setNuxSurface(c).log()},registerNuxFromServer:function(a,b,c){var d=function(){return t._showNux(a,b)};t.registerNux(b,c,d)},setCurrentSurface:function(a){n(a)},showNuxAfterLoading:function(a,c){t._initSurface(a,c),b("Run").onAfterLoad(function(){return t._pickAndShowNux()})},RegisterNuxWithDependency:function(a,b,c,d){var e=function(){return t._showNux(a,b)};t.registerNux(b,c,e,!1,d)},showNuxAferComponentLoading:function(b){var a=m();if(!a||a!==b)return;a=s();if(a[b])return;this._pickAndShowNux()}};e.exports=t}),null);
__d("GridItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.alignv,d=a.alignh,e=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignv","alignh","className"]);return b("React").jsx("td",babelHelpers["extends"]({},a,{className:b("joinClasses")(e,"_51m-"+(c==="top"?" vTop":"")+(c==="middle"?" vMid":"")+(c==="bottom"?" vBot":"")+(d==="left"?" hLeft":"")+(d==="center"?" hCent":"")+(d==="right"?" hRght":""))}))}e.exports=a}),null);
__d("Grid.react",["cx","GridItem.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,d=a.alignh,e=a.alignv,f=a.children,g=a.cols,h=a.fixed,i=a.spacing,j=b("React").Children.count(f),k=[],l=[],m=0;b("React").Children.forEach(f,function(a,f){__p&&__p();if(a===null||a===void 0)return;var n=a.type===c.GridItem;m+=n?Math.max(a.props.colSpan||0,1):1;var o=m===g?"_51mw":"";n=n?b("React").cloneElement(a,{key:a.key||f,alignh:a.props.alignh||d,alignv:a.props.alignv||e,className:b("joinClasses")(a.props.className,i,o)}):b("React").jsx(b("GridItem.react"),{alignh:d,alignv:e,className:b("joinClasses")(i,o),children:a},a.key||f);l.push(n);if(m%g===0||f+1===j){if(h===!0&&m<g){for(var o=m;o<g;o++)l.push(b("React").jsx(b("GridItem.react"),{},f+o));m=g}k.push(b("React").jsx("tr",{className:"_51mx",children:l},f));l=[];m=0}});return b("React").jsx("table",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"uiGrid _51mz"+(h===!0?" _5f0n":"")),cellSpacing:"0",cellPadding:"0",children:b("React").jsx("tbody",{children:k})}))};return c}(b("React").Component);a.GridItem=b("GridItem.react");e.exports=a}),null);
__d("XVanityURLController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/",{and:{type:"String"},filter:{type:"Int"},sk:{type:"String"},v:{type:"String"},vanity:{type:"String",required:!0},__xts__:{type:"StringVector"},__tn__:{type:"String"},redto:{type:"String"}})}),null);