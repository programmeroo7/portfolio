if (self.CavalryLogger) { CavalryLogger.start_js(["CiUWl"]); }

__d("XPagesVideoListChainingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/video_hub/collection/chaining/",{limit:{type:"Int",required:!0},offset:{type:"Int"},video_list_id:{type:"Int",required:!0}})}),null);
__d("PagesVideoListChaining",["AsyncRequest","DOM","SubscriptionsHandler","XPagesVideoListChainingController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c,d,e){this.$1=a;this.$2=c;this.$3=d;this.$4=e;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(a.subscribe("needsitems",this.$5.bind(this)))}var c=a.prototype;c.$5=function(){var a=this,c=b("XPagesVideoListChainingController").getURIBuilder().setInt("offset",this.$3).setInt("limit",this.$2).setInt("video_list_id",this.$4).getURI();new(b("AsyncRequest"))().setURI(c).setHandler(function(c){c=c.getPayload();c.final_video_id?(a.$3=c.final_video_id,a.$1.addItems(c.elements.map(function(a){return b("DOM").create("li",{},a.markup)}))):a.$1.endCarousel()}).send()};return a}();e.exports=a}),null);
__d("TimelineCollectionsCarousel",["cx","Animation","CSS","DOM","Ease","Event","Locale","TidyArbiterMixin","mixin","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h=2,i=2,j=154,k=40;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;g=a.call(this)||this;g._node=c.node;g._grid=c.grid;g._prevLink=c.prev_link;g._nextLink=c.next_link;g._disabledNext=!1;g._visibleCount=d;g._slideMaxItems=g._visibleCount-i;c=g._prevLink.offsetWidth||k;g._itemWidth=f&&f>0?f:j;g._visibleIndex=-1;d=g._itemWidth*-1;f=c+h+e+d;g._position=f;g._positionProperty=b("Locale").isRTL()?"right":"left";g._grid.style[g._positionProperty]=g._position+"px";g._lastBoundaryItem=g._grid.lastChild;g.updateBoundaryItems();b("CSS").addClass(g._node,"_5rr8");b("tidyEvent")([b("Event").listen(g._prevLink,"click",g._onPrevClick.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(g._prevLink,"mouseenter",g._onPrevEnter.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(g._prevLink,"mouseleave",g._onPrevLeave.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(g._nextLink,"click",g._onNextClick.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(g._nextLink,"mouseenter",g._onNextEnter.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(g._nextLink,"mouseleave",g._onNextLeave.bind(babelHelpers.assertThisInitialized(g)))]);g.refresh();return g}var d=c.prototype;d.getGrid=function(){return this._grid};d.removeItem=function(a){b("DOM").remove(a),this.refresh(),this.getVisibleNodes().length-i===0&&this.inform("lastelementremoved")};d.disableNext=function(){this._disabledNext=!0,this.refresh()};d.enableNext=function(){this._disabledNext=!1,this.refresh()};d.getNode=function(){return this._node};d.getNextLink=function(){return this._nextLink};d.getVisibleNodes=function(){var a=[],b=Math.min(this._visibleCount,this._grid.childNodes.length);for(var c=1;c<=b;c++){var d=this._grid.childNodes[this._visibleIndex+c];a.push(d)}return a};d.getVisibleNodesMax=function(){return this._visibleCount};d.getLastVisibleIndex=function(){return this._visibleIndex+this._visibleCount-1};d.insertBefore=function(a,c){c?this._grid.insertBefore(a,c):b("DOM").insertBefore(this._lastBoundaryItem,a),this.refresh()};d.refresh=function(){b("CSS").conditionClass(this._node,"_58rf",!this._isPrevEnabled()),b("CSS").conditionClass(this._node,"_58rg",!this._isNextEnabled())};d.updateBoundaryItems=function(){this._grid.childNodes.length<this._visibleCount?b("CSS").hide(this._lastBoundaryItem):b("CSS").show(this._lastBoundaryItem)};d._getNextOverflowCount=function(){return this._grid.childNodes.length-(this.getLastVisibleIndex()+1)};d._getPrevOverflowCount=function(){return this._visibleIndex+1};d._isPrevEnabled=function(){return this._getPrevOverflowCount()>0};d._isNextEnabled=function(){return this._getNextOverflowCount()>1&&!this._disabledNext};d._onNextClick=function(){this._isNextEnabled()&&(this._getPrevOverflowCount()===0&&b("CSS").removeClass(this._node,"_5rr8"),this._slide(Math.min(this._getNextOverflowCount()-1,this._slideMaxItems)),this.inform("nextclick"))};d._onNextEnter=function(){this._isNextEnabled()&&(b("CSS").addClass(this._node,"_5di5"),this.inform("nextenter"))};d._onNextLeave=function(){b("CSS").removeClass(this._node,"_5di5"),this.inform("nextleave")};d._onPrevClick=function(){this._isPrevEnabled()&&(this._getPrevOverflowCount()<=this._slideMaxItems&&b("CSS").addClass(this._node,"_5rr8"),this._slide(-1*Math.min(this._getPrevOverflowCount(),this._slideMaxItems)),this.inform("prevclick"))};d._onPrevEnter=function(){this._isPrevEnabled()&&(b("CSS").addClass(this._node,"_5di6"),this.inform("preventer"))};d._onPrevLeave=function(){b("CSS").removeClass(this._node,"_5di6"),this.inform("prevleave")};d.silentSlide=function(a){this._visibleIndex+=a,this._position-=a*this._itemWidth,this._grid.style[this._positionProperty]=this._position+"px",this.refresh()};d.slide=function(a,c){a=Math.min(this._getNextOverflowCount(),a);if(a>0){b("CSS").removeClass(this._node,"_5rr8");this._slide(a,c);return!0}return!1};d._computeDisplacement=function(){if(this._grid.childNodes.length<2+i)return 0;var a=this._grid.childNodes[1].getBoundingClientRect(),b=this._grid.childNodes[2].getBoundingClientRect();return Math.abs(b.left-a.left)};d._slide=function(a,c){this._visibleIndex+=a;this._position-=a*this._computeDisplacement();c||(c=500*Math.abs(a/this._slideMaxItems));var d=this._node;b("CSS").addClass(d,"_58rj");new(b("Animation"))(this._grid).to(this._positionProperty,this._position).duration(c).ease(b("Ease").sineOut).ondone(function(){b("CSS").removeClass(d,"_58rj"),this.inform("onSlideDone"),this.refresh()}.bind(this)).go();this.inform("onSlide")};return c}(b("mixin")(b("TidyArbiterMixin")));e.exports=a}),null);
__d("TimelineCollectionsInfiniteCarousel",["csx","cx","CSS","DOM","TidyArbiterMixin","mixin","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=2;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e){__p&&__p();var f;f=a.call(this)||this;f._carousel=c;f._items=d;f._needsItems=!1;f._placeholderIndex=0;f._visibleCount=f._carousel.getVisibleNodesMax();f._carouselDone=!1;for(var c=0;c<f._visibleCount-1;++c){d=e.cloneNode(!0);f._carousel.insertBefore(d,f._placeholder);f._placeholder=d}b("tidyEvent")([f._carousel.subscribe("onSlide",f.refresh.bind(babelHelpers.assertThisInitialized(f))),f._carousel.subscribe("nextclick",f.inform.bind(babelHelpers.assertThisInitialized(f),"nextclick")),f._carousel.subscribe("nextenter",f.inform.bind(babelHelpers.assertThisInitialized(f),"nextenter")),f._carousel.subscribe("nextleave",f.inform.bind(babelHelpers.assertThisInitialized(f),"nextleave")),f._carousel.subscribe("prevclick",f.inform.bind(babelHelpers.assertThisInitialized(f),"prevclick")),f._carousel.subscribe("preventer",f.inform.bind(babelHelpers.assertThisInitialized(f),"preventer")),f._carousel.subscribe("prevleave",f.inform.bind(babelHelpers.assertThisInitialized(f),"prevleave"))]);f.refresh();return f}var d=c.prototype;d.addItems=function(a){this._needsItems=!1;for(var b=0;b<a.length;++b)this._items.push(a[b]);this.refresh();this.inform("newitemsadded",a)};d.endCarousel=function(){this._placeholder=null;var a=b("DOM").scry(this._carousel.getNode(),"li._5b4r");a.forEach(function(a){b("DOM").remove(a)}.bind(this));this._carouselDone=!0;this._carousel.updateBoundaryItems();this.refresh()};d.getGrid=function(){return this._carousel.getGrid()};d.getNode=function(){return this._carousel.getNode()};d.getNextLink=function(){return this._carousel.getNextLink()};d.getVisibleNodes=function(){return this._carousel.getVisibleNodes()};d.getVisibleNodesMax=function(){return this._carousel.getVisibleNodesMax()};d.removeItem=function(a){b("DOM").remove(a),this._placeholderIndex--,this.getVisibleNodes().length-i===0&&this.inform("lastelementremoved"),this.refresh()};d._addItem=function(a){this._placeholderIndex++,this._carousel.insertBefore(a,this._placeholder)};d.refresh=function(){while((this._carousel.getLastVisibleIndex()>=this._placeholderIndex||this._carouselDone)&&this._items.length)this._addItem(this._items.shift());this._carousel.getLastVisibleIndex()>=this._placeholderIndex&&!this._carouselDone?(b("CSS").addClass(this._carousel.getNode(),"_58rd"),this._carousel.disableNext()):(b("CSS").removeClass(this._carousel.getNode(),"_58rd"),this._carousel.enableNext());this._items.length<this._visibleCount&&!this._needsItems&&!this._carouselDone&&(this._needsItems=!0,this.inform("needsitems",null,"persistent"));this._carousel.refresh();this.inform("refreshed")};d.slide=function(a,b){return this._carousel.slide(a,b)};return c}(b("mixin")(b("TidyArbiterMixin")));e.exports=a}),null);