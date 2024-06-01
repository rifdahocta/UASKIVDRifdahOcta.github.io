// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/dom-style dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(q,k,m,g,n,h,r,l,t,u,v,p){return q([t,u],{baseClass:"jimu-anchorbar-more-pupup jimu-main-background",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,nodes:[],forIcon:null,postCreate:function(){this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new v({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup()},setForIcon:function(a){this.forIcon=a},setNodes:function(a){this.nodes=a;this.oldGridParam=null;this.resize()},resize:function(){var a=this._calculateGridParam();if(null!==a){g.setStyle(this.domNode,p.getPositionStyle(a.position));this.nodeWidth=a.cellSize-this.margin;this.clearPages();this.createPages(a);
m.forEach(l(".icon-node",this.domNode),k.hitch(this,function(b,c){this.setItemNodePosition(b,c,a)}));this.oldGridParam=a;var d=l("div.close",this.domNode)[0];g.setStyle(d,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})}else this.oldGridParam=null,g.setStyle(this.domNode,p.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0},setItemNodePosition:function(a,d,b){var c=0===d%b.cols?0:this.margin/2;d=d%(b.rows*b.cols)<b.cols?0:this.margin/2;b={};"number"===typeof this.nodeWidth&&
(b.width=this.nodeWidth+"px",b.height=this.nodeWidth+"px");"number"===typeof c&&(window.isRTL?b.marginRight=c+"px":b.marginLeft=c+"px");"number"===typeof d&&(b.marginTop=d+"px");g.setStyle(a,b)},clearPages:function(){m.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);h.empty(this.pointsNode);this.pages=[]},createPages:function(a){var d;var b=Math.ceil(this.nodes.length/(a.rows*a.cols));for(d=0;d<b;d++){var c=h.create("div",{"class":"page"});this.createPageItems(d,c,a);this.viewStack.addView(c);
if(1<b){var e=h.create("div",{"class":"point"},this.pointsNode);this.own(n(e,"click",k.hitch(this,this._onPageNodeClick,d)))}this.pages.push({pageNode:c,pointNode:e})}0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(a){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected"),g.addClass(this.pages[a].pointNode,"point-selected"));this.viewStack.switchView(this.pages[a].pageNode)},createPageItems:function(a,
d,b){var c=this.nodes.length;var e=b.rows*b.cols;b=(a+1)*e;var f=b-c;b=Math.min(b,c);for(a*=e;a<b;a++)this.createItemNode(a,d);for(a=c;a<c+f;a++)this.createEmptyItemNode(d)},createItemNode:function(a,d){d=h.create("div",{"class":"icon-node jimu-float-leading"},d);var b=(this.nodeWidth-this.nodes[a].size)/2;r.set(this.nodes[a].domNode,{position:"absolute",left:b+"px",top:b+"px","margin-left":""});this.nodes[a].placeAt(d)},createEmptyItemNode:function(a){return h.create("div",{"class":"icon-node jimu-float-leading"},
a)},createCloseBtn:function(){var a=h.create("div",{"class":"close"},this.domNode);h.create("div",{"class":"close-inner"},a);n(a,"click",k.hitch(this,function(){this.hide()}));return a},hide:function(){g.setStyle(this.domNode,"display","none");this.forIcon&&this.forIcon.setOpened(!1)},show:function(){g.setStyle(this.domNode,"display","block")},_calculateGridParam:function(){var a=!1,d=!0;var b=g.getContentBox(jimuConfig.mapId);var c=Math.min(b.w,b.h)-40;if(240<=c)var e=80;else{e=Math.floor(c/3);if(10>
e)return null;a=!0;60>e&&(d=!1)}c=Math.floor((b.h-40)/e);var f=Math.floor((b.w-40)/e);c=4<c?4:c;c=3>c?3:c;f=3>c?3:4<f?4:f;return{rows:c,cols:f,cellSize:e,iconScaled:a,showLabel:d,position:{top:(b.h-e*c)/2,bottom:(b.h-e*c)/2,left:(b.w-e*f)/2,right:(b.w-e*f)/2,width:e*f-this.margin*(f-1)/2,height:e*c-this.margin*(c-1)/2,zIndex:111}}}})});