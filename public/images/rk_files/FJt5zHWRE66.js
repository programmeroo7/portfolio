if (self.CavalryLogger) { CavalryLogger.start_js(["X2mXp"]); }

__d("TypeaheadFacepile",["DOM"],(function(a,b,c,d,e,f){function a(){}a.render=function(a){var c=[b("DOM").create("span",{className:"splitpic leftpic"},[b("DOM").create("img",{alt:"",src:a[0]})]),b("DOM").create("span",{className:"splitpic"+(a[2]?" toppic":"")},[b("DOM").create("img",{alt:"",src:a[1]})])];a[2]&&c.push(b("DOM").create("span",{className:"splitpic bottompic"},[b("DOM").create("img",{alt:"",src:a[2]})]));return b("DOM").create("span",{className:"splitpics clearfix"},c)};e.exports=a}),null);
__d("BucketedTypeaheadView",["fbt","DOM","TypeaheadView"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(b,c,d,e){var f=c.length>0;for(var g=0;g<c.length;++g)c[g].type!=="hashtag"&&(f=!1);f||(c=this.buildBuckets(b,c));if(d&&e){g=this.results.length-this.index;this.index=c.length-g}return a.prototype.render.call(this,b,c,d)};d.highlight=function(b,c){this.headerIndex=!1;b==-1&&this.index!==0&&(b=this.index);while(b>=0&&b<this.items.length&&!this.isHighlightable(this.results[b]))b=b+1,this.headerIndex=!0;a.prototype.highlight.call(this,b,c)};d.buildBuckets=function(a,b){__p&&__p();if(!this.typeObjects||!b||!b.length)return b;a=[];var c={};for(var d=0;d<b.length;++d){var e=b[d],f=e.render_type||e.type;Object.prototype.hasOwnProperty.call(c,f)||(c[f]=a.length,a.push([this.buildBucketHeader(f)]));e.classNames=e.classNames||f;e.groupIndex=c[f];e.indexInGroup=a[e.groupIndex].length-1;e.globalIndex=d;a[e.groupIndex].push(e)}for(f in this.typeObjects)!Object.prototype.hasOwnProperty.call(c,f)&&this.typeObjects[f].show_always&&(c[f]=a.length,a.push([this.buildBucketHeader(f)]),e=this.buildNoResultsEntry(),e.classNames=e.type,e.groupIndex=c[f],e.indexInGroup=a[e.groupIndex].length-1,a[e.groupIndex].push(e));d=[];if(this.typeObjectsOrder)for(var b=0;b<this.typeObjectsOrder.length;++b){e=this.typeObjectsOrder[b];Object.prototype.hasOwnProperty.call(c,e)&&(d=d.concat(a[c[e]]))}else for(var f=0;f<a.length;++f)d=d.concat(a[f]);return d};d.buildNoResultsEntry=function(){return{uid:"disabled_result",type:"disabled_result",text:g._("No Results")}};d.buildBucketHeader=function(a){var b=this.typeObjects[a];if(b===void 0)throw new Error(a+" is undefined in "+JSON.stringify(this.typeObjects));b.markup&&(b.text=b.markup,delete b.markup);return this.typeObjects[a]};d.buildResults=function(c){c=a.prototype.buildResults.call(this,c);if(this.typeObjects)return b("DOM").create("div",{className:"bucketed"},[c]);else return c};d.isHighlightable=function(a){return a.type!="header"&&a.type!="disabled_result"};d.select=function(b){var c=this.results[this.index];c&&this.isHighlightable(c)&&a.prototype.select.call(this,b)};d.updateResults=function(a){this.results=a};d.normalizeIndex=function(a){var b=this.results.length;if(b===0)return-1;else if(a<-1)return a%b+b+1;else if(a>=b)return a%b-1;else return a};d.getDefaultIndex=function(a){var b=this.autoSelect&&!this.disableAutoSelect;if(this.index<0&&!b)return-1;if(!a||a&&a.length===0)return-1;b=0;while(!this.isHighlightable(a)&&b<a.length)b++;return b};d.prev=function(){var b=this.results[this.normalizeIndex(this.index-1)];while(b&&!this.isHighlightable(b))this.index=this.normalizeIndex(this.index-1),b=this.results[this.normalizeIndex(this.index-1)];return a.prototype.prev.call(this)};d.next=function(){var b=this.results[this.normalizeIndex(this.index+1)];while(b&&!this.isHighlightable(b))this.index=this.normalizeIndex(this.index+1),b=this.results[this.normalizeIndex(this.index+1)];return a.prototype.next.call(this)};return c}(b("TypeaheadView"));e.exports=a}),null);
__d("ContextualTypeaheadView",["BucketedTypeaheadView","ContextualLayer","ContextualLayerAutoFlip","ContextualLayerHideOnScroll","CSS","DOM","DOMDimensions","Style"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.init=function(){this.initializeLayer(),a.prototype.init.call(this)};d.initializeLayer=function(){this.context=this.getContext(),this.wrapper=b("DOM").create("div"),b("DOM").appendContent(this.wrapper,this.element),b("CSS").addClass(this.element,"uiContextualTypeaheadView"),this.layer=new(b("ContextualLayer"))({context:this.context,position:"below",alignment:this.alignment,causalElement:this.causalElement,permanent:!0,shouldSetARIAProperties:!1},this.wrapper),this.layer.enableBehavior(b("ContextualLayerHideOnScroll")),(b("Style").isFixed(this.context)||this.autoflip)&&this.layer.enableBehavior(b("ContextualLayerAutoFlip")),this.subscribe("render",this.renderLayer.bind(this))};d.show=function(){this.minWidth?b("Style").set(this.wrapper,"min-width",this.minWidth+"px"):this.width?b("Style").set(this.wrapper,"width",this.width+"px"):b("Style").set(this.wrapper,"width",b("DOMDimensions").getElementDimensions(this.context).width+"px");var c=a.prototype.show.call(this);this.layer.show();this.inform("show");return c};d.hide=function(){this.layer.hide();this.inform("hide");return a.prototype.hide.call(this)};d.renderLayer=function(){if(!this.isVisible())return;this.layer.isShown()?this.layer.updatePosition():this.layer.show()};d.clearText=function(){this.layer.getCausalElement().value=""};d.getContext=function(){return this.element.parentNode};return c}(b("BucketedTypeaheadView"));e.exports=a}),null);
__d("TypeaheadCore",["Arbiter","ArbiterMixin","CSS","DOM","Event","Focus","Input","InputSelection","Keys","StickyPlaceholderInput","UserAgent","bind","emptyFunction","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){__p&&__p();var c;c=a.call(this)||this;c.events=["blur","focus","click","unselect","loading","change"];c.keepFocused=!0;c.preventFocusChangeOnTab=!1;c.queryTimeout=250;c.resetOnKeyup=!0;c.resetOnSelect=!1;c.setValueOnSelect=!1;c.selectOnTabKey=!0;c.selectOnClick=!0;Object.assign(babelHelpers.assertThisInitialized(c),b);return c}var d=c.prototype;d.init=function(a,c,d){this.init=b("emptyFunction"),this.data=a,this.view=c,this.root=d,this.initInput(),this.inputWrap=b("DOM").find(d,"div.wrap"),this.hiddenInput=b("DOM").find(d,"input.hiddenInput"),this.value="",this.nextQuery=null,this.selectedText=null,this.setValueOnSelect&&b("CSS").hasClass(this.inputWrap,"selected")&&(this.selectedText=this.getValue()),this.initView(),this.initData(),this.initEvents(),this.initToggle(),this._exclusions=[]};d.initInput=function(){this.element=b("DOM").find(this.root,".textInput");var a=b("DOM").scry(this.element,"input")[0];a&&(this.element=a)};d.initView=function(){var a=this;this.view.subscribe("highlight",b("Focus").set.bind(null,this.element));this.view.subscribe("select",function(b,c){a.select(c.selected)});this.view.subscribe("afterSelect",function(){a.afterSelect()})};d.initData=function(){var a=this;this.data.subscribe("notify",function(b,c){a.root.id==c.rootid&&!a.element.disabled&&c.value==a.getValue()&&a.view.render(c.value,c.results,c.isAsync)});this.data.subscribe("respond",function(b,c){(c.forceDisplay||c.value==a.getValue()&&!a.element.disabled&&(a.element.getAttribute("singlestate")!=="true"||c.nullState))&&a.view.render(c.value,c.results,c.isAsync)});this.data.subscribe("activity",function(b,c){a.fetching=c.activity,a.fetching||a.nextQuery&&a.performQuery(),a.loading!=a.fetching&&(a.loading=a.fetching,a.inform("loading",{loading:a.loading}))})};d.initEvents=function(){var a;b("Event").listen(this.view.getElement(),{mouseup:this.viewMouseup.bind(this),mousedown:this.viewMousedown.bind(this)});a={blur:(a=b("bind"))(this,"blur"),focus:a(this,"focus"),click:a(this,"click"),keyup:a(this,"keyup"),keydown:a(this,"keydown"),keypress:a(this,"keypress")};b("UserAgent").isBrowser("Firefox")&&b("Event").listen(this.element,{input:a.keyup});b("Event").listen(this.element,a)};d.initToggle=function(){this.subscribe("blur",this.view.hide.bind(this.view)),this.subscribe("focus",this.view.show.bind(this.view))};d.viewMousedown=function(){this.selecting=!0};d.viewMouseup=function(){this.selecting=!1};d.blur=function(){if(this.selecting){this.selecting=!1;return}this.inform("blur")};d.click=function(){if(this.selectOnClick){var a=b("InputSelection").get(this.element);a.start==a.end&&this.element.select()}this.inform("click")};d.focus=function(){this.checkValue(),this.inform("focus")};d.keyup=function(){this.resetOnKeyup&&!this.getValue()&&this.view.reset(),this.checkValue(),this.getValue().length===0&&this.inform("change",null)};d.keydown=function(a){__p&&__p();if(!this.view.isVisible()||this.view.isEmpty()){setTimeout(this.checkValue.bind(this),0);return}switch(b("Event").getKeyCode(a)){case b("Keys").TAB:this.handleTab(a);return;case b("Keys").UP:this.view.prev();break;case b("Keys").DOWN:this.view.next();break;case b("Keys").ESC:this.view.reset();break;default:setTimeout(this.checkValue.bind(this),0);return}a.kill()};d.keypress=function(a){this.view.getSelection()&&b("Event").getKeyCode(a)==b("Keys").RETURN&&(this.view.select(),a.kill())};d.handleTab=function(a){this.preventFocusChangeOnTab&&(this.view.getSelection()?a.kill():a.prevent()),this.selectOnTabKey&&this.view.select()};d.select=function(a){if(a&&this.setValueOnSelect){var c=a.orig_text||a.text;this.setValue(c);this.setHiddenValue(a.uid);this.selectedText=c;b("CSS").addClass(this.inputWrap,"selected")}};d.afterSelect=function(){this.keepFocused?b("Focus").set(this.element):this.element.blur(),this.resetOnSelect?this.reset():this.view.reset()};d.unselect=function(){this.setValueOnSelect&&(this.selectedText=null,b("CSS").removeClass(this.inputWrap,"selected")),this.setHiddenValue(),this.inform("unselect",this)};d.setEnabled=function(a){a=a===!1;this.element.disabled=a;b("CSS").conditionClass(this.root,"uiTypeaheadDisabled",a)};d.reset=function(){this.unselect(),this.setValue(),this.keepFocused||b("Input").reset(this.element),this.view.reset(),this.inform("reset")};d.getElement=function(){return this.element};d.setExclusions=function(a){this._exclusions=a.map(String)};d.getExclusions=function(){return this._exclusions};d.setValue=function(a){this.value=this.nextQuery=a||"",b("Input").setValue(this.element,this.value),b("StickyPlaceholderInput").update(this.element),this.inform("change",a)};d.setHiddenValue=function(a){typeof a==="number"&&(a=String(a));this.hiddenInput.value=a||"";b("Arbiter").inform("Form/change",{node:this.hiddenInput});a=document.createEvent("HTMLEvents");a.initEvent("change",!1,!0);this.hiddenInput.dispatchEvent(a)};d.getValue=function(){return b("Input").getValue(this.element)};d.getHiddenValue=function(){return this.hiddenInput.value||""};d.checkValue=function(){var a=this.getValue();if(a==this.value)return;this.selectedText&&this.selectedText!=a&&this.unselect();var b=Date.now(),c=b-this.time;this.time=b;this.value=this.nextQuery=a;this.inform("change",this.value);this.performQuery(c)};d.performQuery=function(a){if(this.selectedText)return;a=a||0;this.fetching&&a<this.queryTimeout?this.data.query(this.nextQuery,!0,this._exclusions,a):(this.data.query(this.nextQuery,!1,this._exclusions,a),this.nextQuery=null)};d.updateHeight=function(){};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("SearchFiltersCustomSource",["csx","cx","CSS","DOM","DOMQuery","EventListener","Form","Keys","tidyEvent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.sourceElem=a;this.placeholder=c;this.form=d;a=b("DOMQuery").scry(this.sourceElem,'input[type="text"]');a.length>0&&(this.input=a[0]);b("tidyEvent")(b("EventListener").listen(this.placeholder,"click",function(a){e.$1()}));b("tidyEvent")(b("EventListener").listen(this.placeholder,"keyup",function(a){a.keyCode===b("Keys").RETURN&&e.$1()}));this.input!=null&&b("tidyEvent")(b("EventListener").listen(this.input,"blur",function(a){b("CSS").show(e.placeholder),e.placeholder.setAttribute("aria-hidden","false"),e.placeholder.setAttribute("aria-expanded","false"),b("CSS").hide(e.sourceElem),e.sourceElem.setAttribute("aria-hidden","true")}))}var c=a.prototype;c.$1=function(){b("CSS").addClass(this.sourceElem,"_4ivt"),b("CSS").show(this.sourceElem),this.sourceElem.setAttribute("aria-hidden","false"),b("CSS").hide(this.placeholder),this.placeholder.setAttribute("aria-hidden","true"),this.placeholder.setAttribute("aria-expanded","true"),this.$2(),this.$3()};c.$2=function(){this.input!=null&&this.input.focus()};c.$3=function(){__p&&__p();var a=b("DOMQuery").scry(this.sourceElem,"._4ivu input");if(a.length>0){b("Form").getElements(this.form).forEach(function(a){a.type==="radio"&&b("DOM").setAttributes(a,{checked:!1})});for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("DOM").setAttributes(e,{checked:!0})}}};return a}();e.exports=a}),null);
__d("SearchLHCFiltersUtil",[],(function(a,b,c,d,e,f){"use strict";a={FILTERS:"filters",encodeFilters:function(a){return btoa(JSON.stringify(a))},decodeFilters:function(a){return JSON.parse(atob(a))}};e.exports=a}),null);
__d("SearchFiltersDateSelector",["csx","DateStrings","DateTime","DOM","DOMQuery","SearchLHCFiltersUtil","goURI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c){this.date=b("DateTime").localCreate(c.timestamp).toFBDate(),this.monthSelector=c.monthSelect,this.requestParam=c.requestParam,this.uri=c.uri,this.useWildcard=c.useWildcard,this.yearSelector=c.yearSelect,this.filterName=c.filterName,this.init()}var c=a.prototype;c.init=function(){var a=this;this.useWildcard?this.monthSelector.setValue("none"):(this.monthSelector.setValue(String(this.date.getMonth())),this.$1());this.yearSelector.setValue(String(this.date.getYear()));this.$2();this.$3();this.monthSelector.subscribe("change",function(){a.$1(),a.refreshFilter()});this.yearSelector.subscribe("change",function(){a.$2(),a.refreshFilter()})};c.$3=function(){var a=b("DateTime").localNow(),c=this.monthSelector.getMenu();a.getYear()===this.date.getYear()?c.forEachItem(function(b){var c=Number(b.getValue());c>a.getMonth()?b.disable():b.enable()}):c.forEachItem(function(a){a.enable()})};c.$1=function(){var a=this.monthSelector.getValue();if(a==="none")return;a=Number(a);var c=b("DateStrings").getMonthNameShort(a);this.date=this.date.setMonth(a);a=b("DOMQuery").find(this.monthSelector.getButton(),"span._55pe");b("DOM").setContent(a,c)};c.$2=function(){var a=this.yearSelector.getValue();this.date=this.date.setYear(Number(a))};c.refreshFilter=function(){__p&&__p();var a=String(this.date.getYear()),c,d=this.monthSelector.getValue();if(d==="none")c={start_year:a,start_month:a+"-01",end_year:a,end_month:a+"-12"};else{d=this.date.format("m");switch(d){case"01":c={start_year:a,end_month:a+"-"+d};break;case"12":c={start_month:a+"-"+d,end_year:a};break;default:c={start_month:a+"-"+d,end_month:a+"-"+d}}}c={name:this.filterName,args:JSON.stringify(c)};a=this.uri.getQueryData();d={};b("SearchLHCFiltersUtil").FILTERS in a&&(d=b("SearchLHCFiltersUtil").decodeFilters(a.filters));d[this.requestParam]=JSON.stringify(c);this.uri.addQueryData(b("SearchLHCFiltersUtil").FILTERS,b("SearchLHCFiltersUtil").encodeFilters(d));b("goURI")(this.uri)};return a}();e.exports=a}),null);
__d("SearchFiltersFreeFormSelection",["cx","fbt","DOM","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.typeahead=a,this.subscription=null}var c=a.prototype;c.enable=function(){__p&&__p();var a=this.typeahead.getElement();a=b("DOM").find(a,"input.hiddenInput");if(!a)return;a=a.name;var c="",d="";switch(a){case"filters_employer":c="employer";d="_378l";break;case"filters_city":c="location";d="_378m";break;case"filters_school":c="school";d="_378n";break;default:return}a=this.typeahead.getView();this.subscription=a.subscribe("beforeRender",function(a,e){a=String(h._("Use any {entityType} matching \"{value}\"",[h._param("entityType",c),h._param("value",e.value)]));var f=b("joinClasses")("_378o",d);e.results.unshift({text:a,uid:e.value,iconClass:f,type:"_378p"})})};c.disable=function(){this.typeahead.getView().unsubscribe(this.subscription),this.subscription=null};return a}();e.exports=a}),null);
__d("Selector",["csx","ArbiterMixin","BehaviorsMixin","Button","DOM","DOMQuery","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d,e,f){var g;g=a.call(this)||this;g._popoverMenu=b;g._button=c;g._menu=d;g._input=e;g.init();f.behaviors&&g.enableBehaviors(f.behaviors);return g}var d=c.prototype;d.init=function(){this._menu.subscribe("change",function(a,b){this._setLabelContent(b.label),this._input.value=b.value,this.inform("change",b)}.bind(this)),this._popoverMenu.getPopover().subscribe(["hide","show"],function(a){this.inform(a)}.bind(this))};d._getLabel=function(){return b("DOMQuery").find(this._button,"span._55pe")};d._setLabelContent=function(a){var c=this._getLabel();b("DOM").setContent(c,a)};d.getLabelContent=function(){var a=this._getLabel();return a.firstChild};d.setValue=function(a){this._menu.setValue(a)};d.getValue=function(){return this._input.value};d.getName=function(){return this._input.name};d.getButton=function(){return this._button};d.getMenu=function(){return this._menu};d.enable=function(){b("Button").setEnabled(this._button,!0),this._popoverMenu.enable()};d.disable=function(){b("Button").setEnabled(this._button,!1),this._popoverMenu.disable()};return c}(b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));e.exports=a}),null);
__d("BrowseInstantFilterTypeahead",["SearchLHCFiltersUtil","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=function(a){a.typeahead.subscribe("select",function(c,d){c=new(g||(g=b("URI")))(a.current_uri);var e=c.getQueryData(),f={};b("SearchLHCFiltersUtil").FILTERS in e&&(f=b("SearchLHCFiltersUtil").decodeFilters(e.filters));f[a.request_param]=JSON.stringify({name:a.filter_name,args:d.selected.uid});c.addQueryData(b("SearchLHCFiltersUtil").FILTERS,b("SearchLHCFiltersUtil").encodeFilters(f));c.go()})};e.exports=a}),null);
__d("TypeaheadPreventSubmitOnEnter",["Event","Keys"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){var a=this._typeahead.getCore().getElement();this._listener=b("Event").listen(a,"keypress",function(a){b("Event").getKeyCode(a)==b("Keys").RETURN&&a.kill()})};c.disable=function(){this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_listener:null});e.exports=a}),null);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){this._typeahead.getCore().resetOnKeyup=!1,this._subscription=this._typeahead.subscribe("bootstrap",function(a,b){this.firstFetch(b,this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._keyUpListener=b("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(a){(b("Event").getKeyCode(a)==b("Keys").BACKSPACE||b("Event").getKeyCode(a)==b("Keys").DELETE)&&this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._focusListener=b("Event").listen(this._typeahead.getCore().getElement(),"focus",function(a){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};c.disable=function(){this._typeahead.unsubscribe(this._subscription),this._subscription=null,this._keyUpListener.remove(),this._keyUpListener=null,this._focusListener.remove(),this._focusListener=null};c.firstFetch=function(a,b,c){a.bootstrapping||this.respond(b,c)};c.respond=function(a,b){a.getValue()||this.refreshAndShowNeededResults(a,b)};c.refreshAndShowNeededResults=function(a,b){var c=this.getUidsFromData(b);a.setValue("");a=b.buildUids(" ",c);b.respond("",a)};c.getUidsFromData=function(a){a=a.getAllEntries();var b=[];for(var c in a)b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};return a}();Object.assign(a.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=a}),null);
__d("createEmojiElement",["cx","JSXDOM"],(function(a,b,c,d,e,f,g){function a(a,c,d){d=d||16;d={height:d+"px",width:d+"px",fontSize:d+"px",backgroundImage:"url('"+c+"')"};return b("JSXDOM").span({className:"_5mfr"},[b("JSXDOM").span({className:"_6qdm",style:d},a)])}e.exports=a}),null);
__d("DOMEmoji",["cx","EmojiImageURL","EmojiRenderer","FBEmojiUtils","JSXDOM","createEmojiElement","flattenArray","gkx","isElementNode"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={MAX_ITEMS:40,transform:function(a,c){var d=this;c=c||{};var e=c.size||16,f=c.emojiUrlGenerator||b("EmojiImageURL").getFBEmojiURL;return b("flattenArray")(a.map(function(a){if(!b("isElementNode")(a))return b("EmojiRenderer").render(a,function(a){var c=b("FBEmojiUtils").getSupportedKey(a);return c?b("createEmojiElement")(a.join(""),f(c,e),e):b("JSXDOM").span({className:"_4ay8"+(e===16?" _3kkw":"")},a.join(""))},d.MAX_ITEMS);else return a}))},params:function(a){if(!a)return this;var b=this;return{__params:!0,obj:b,params:a}}};e.exports=a}),null);
__d("TransformTextToDOMMixin",["flattenArray","isElementNode"],(function(a,b,c,d,e,f){__p&&__p();var g=3;a={transform:function(a,c){__p&&__p();return b("flattenArray")(a.map(function(a){__p&&__p();if(!b("isElementNode")(a)){var d=a,e=[],f=this.MAX_ITEMS||g;while(f--){var h=c?[d].concat(c):[d];h=this.match.apply(this,h);if(!h)break;e.push(d.substring(0,h.startIndex));e.push(h.element);d=d.substring(h.endIndex)}d&&e.push(d);return e}return a}.bind(this)))},params:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=this;return{__params:!0,obj:d,params:b}}};e.exports=a}),null);
__d("DOMEmote",["cx","fbt","EmojiImageURL","EmoticonEmojiList","EmoticonsList","JSXDOM","SupportedFacebookEmoji","TransformTextToDOMMixin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={MAX_ITEMS:40,match:function(a,c){var d=c&&c.getMessengerEmote;a=d?b("EmoticonEmojiList").regexp.exec(a):b("EmoticonsList").regexp.exec(a);if(!a||!a.length)return!1;var e=a[2];a=a.index+a[1].length;d=d?b("EmoticonEmojiList").names[e]:b("EmoticonsList").emotes[e];return{startIndex:a,endIndex:a+e.length,element:this._element(e,d,c)}},_element:function(a,c,d){d=d&&d.getMessengerEmote;var e=d?b("EmoticonEmojiList").emote2emojis[c]:b("EmoticonsList").emoji[c];if(e==null)return a;c=h._("{emoticonName} emoticon",[h._param("emoticonName",c)]);return b("JSXDOM").span({className:"_47e3 _5mfr",title:c},[b("JSXDOM").img({"aria-hidden":!0,className:"img",height:16,src:d?b("EmojiImageURL").getMessengerURL(e,16):b("SupportedFacebookEmoji")[e]?b("EmojiImageURL").getFBEmojiURL(e):b("EmojiImageURL").getFBEmojiExtendedURL(e),width:16}),b("JSXDOM").span({"aria-hidden":!0,className:"_7oe"},a)])}};e.exports=Object.assign(a,b("TransformTextToDOMMixin"))}),null);
__d("transformTextToDOM",["createArrayFromMixed"],(function(a,b,c,d,e,f){function a(a,c){var d=[a];c=b("createArrayFromMixed")(c);c.forEach(function(a){var b,c=a;a.__params&&(b=a.params,c=a.obj);d=c.transform(d,b)});return d}e.exports=a}),null);
__d("emojiAndEmote",["DOMEmoji","DOMEmote","FbtResultBase","transformTextToDOM"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){if(a instanceof b("FbtResultBase"))return[a];var d=c?{isSupportedEmoji:c.isSupportedEmoji}:null;c=c?{getMessengerEmote:c.getMessengerEmote}:null;d=[b("DOMEmoji").params(d),b("DOMEmote").params(c)];return b("transformTextToDOM")(a,d)};e.exports=a}),null);
__d("CompactTypeaheadRenderer",["BadgeHelper","DOM","TypeaheadFacepile","emojiAndEmote","isSocialPlugin"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=[];if(a.xhp)return b("DOM").create("li",{className:"raw"},a.xhp);var d=a.photos||a.photo;d&&(d instanceof Array?d=b("TypeaheadFacepile").render(d):d=b("DOM").create("img",{alt:"",src:d}),c.push(d));d=a.iconClass;if(d){d=b("DOM").create("span",{className:d});c.push(d)}d=a.debug_info;d&&c.push(b("DOM").create("span",{className:"debugInfo"},d));if(a.text){d=[a.text];b("isSocialPlugin")()||(d=b("emojiAndEmote")(a.text));a.is_verified?d.push(b("BadgeHelper").renderBadge("xsmall","verified")):a.is_trending_hashtag&&d.push(b("BadgeHelper").renderBadge("xsmall","trending"));c.push(b("DOM").create("span",{className:"text"},d))}d=a.subtext;var e=a.category;if(d||e){var f=[];d&&f.push(d);d&&e&&f.push(" \xb7 ");e&&f.push(e);c.push(b("DOM").create("span",{className:"subtext"},f))}d=b("DOM").create("li",{className:a.type||""},c);a.text&&(d.setAttribute("title",a.text),d.setAttribute("aria-label",a.text));return d}a.className="compact";e.exports=a}),null);
__d("ContextualLayerAsyncRelative",["Event","Parent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._layerSubscription=this._layer.subscribe("show",this._attachListener.bind(this)),this._layer.isShown()&&this._attachListener()};c.disable=function(){this._layerSubscription.unsubscribe(),this._layerSubscription=null,this._listener&&(this._listener.remove(),this._listener=null)};c._attachListener=function(){this._listener=b("Event").listen(this._layer.getRoot(),"click",this._onclick.bind(this))};c._onclick=function(a){__p&&__p();var c=b("Parent").byTag(a.getTarget(),"A");if(!c)return;a=c.getAttribute("ajaxify");var e=c.href,f=a||e;if(c.rel==="async"||c.rel==="async-post"){d(["AsyncRequest"],function(a){a.bootstrap(f,this._layer.getContext(),c.rel==="async-post")}.bind(this));return!1}};return a}();Object.assign(a.prototype,{_layerSubscription:null,_listener:null});e.exports=a}),null);