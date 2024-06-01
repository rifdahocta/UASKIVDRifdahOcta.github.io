// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/GriddedReferenceGraphic/templates/GridSettings.html":'\x3cdiv\x3e       \r\n    \x3cdiv class\x3d"tabs" data-dojo-attach-point\x3d"tabsContainer"\x3e\r\n      \x3c!-- Grid Settings Tab --\x3e \r\n      \x3cdiv class\x3d"content-tab" data-dojo-attach-point\x3d"gridTab"\x3e\r\n        \r\n        \x3c!-- Grid Shape --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"gridShapeContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.cellShape}"\x3e\r\n                ${nls.gridSettings.cellShape}\x3c/div\x3e\r\n            \x3cselect class\x3d"GRGcellShapeSelect" data-dojo-attach-point\x3d"cellShape" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" aria-label\x3d"${nls.gridSettings.cellShape}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Units --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"gridUnitsContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.cellUnits}"\x3e\r\n                ${nls.gridSettings.cellUnits}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"cellUnits" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" aria-label\x3d"${nls.gridSettings.cellUnits}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Grid Origin --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"gridOriginContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.gridOrigin}"\x3e\r\n                ${nls.gridSettings.gridOrigin}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"gridOrigin" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" aria-label\x3d"${nls.gridSettings.gridOrigin}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Reference System --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"gridRefSystemContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis labelLeft" title\x3d"${nls.gridSettings.gridReferenceSystem}"\x3e\r\n                ${nls.gridSettings.gridReferenceSystem}\x3c/div\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis labelRight" title\x3d"${nls.gridSettings.gridDatum}"\x3e\r\n                ${nls.gridSettings.gridDatum}\x3c/div\x3e\r\n            \x3cselect class\x3d"referenceSystemSelect" data-dojo-attach-point\x3d"referenceSystem" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" aria-label\x3d"${nls.gridSettings.gridDatum}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Cell Outline Color --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow"\x3e\r\n          \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.cellOutline}"\x3e\r\n                ${nls.gridSettings.cellOutline}\x3c/div\x3e\r\n          \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"cellOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Cell fill Color --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow"\x3e\r\n          \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.cellFill}"\x3e\r\n                ${nls.gridSettings.cellFill}\x3c/div\x3e\r\n          \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"cellFillColorPicker"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Label Settings Tab --\x3e\r\n      \x3cdiv class\x3d"content-tab" data-dojo-attach-point\x3d"labelTab"\x3e  \r\n        \x3c!-- Label Start Position Selector --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"labelStartPositionContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.labelStartPosition}"\x3e\r\n                ${nls.gridSettings.labelStartPosition}\x3c/div\x3e\r\n            \x3cselect class\x3d"GRGlabelStartPositionSelect" data-dojo-attach-point\x3d"labelStartPosition" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect"\r\n                aria-label\x3d"${nls.gridSettings.labelStartPosition}" role\x3d"listbox"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Labelling Style without Reference System --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"labelStyleContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.labelType}"\x3e\r\n                ${nls.gridSettings.labelType}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"labelType" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" \r\n                aria-label\x3d"${nls.gridSettings.labelType}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Labelling Style with Reference System --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"labelStyleWithRefSysContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.labelType}"\x3e\r\n                ${nls.gridSettings.labelType}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"labelTypeWithRefSys" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" \r\n                aria-label\x3d"${nls.gridSettings.labelType}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Labelling direction --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"labelDirectionContainer"\x3e\r\n            \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.gridSettings.labelDirection}"\x3e\r\n                ${nls.gridSettings.labelDirection}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"labelDirection" style\x3d"width: 100%" data-dojo-type\x3d"jimu/dijit/formSelect" \r\n                aria-label\x3d"${nls.gridSettings.labelDirection}"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- Font Settings --\x3e\r\n        \x3cdiv class\x3d"GRGDrafterFullWidth GRGDrafterSettingRow" data-dojo-attach-point\x3d"fontSettingsContainer"\x3e\r\n          \x3cdiv class\x3d"GRGDrafterDropdownLabel GRGDrafterEllipsis" title\x3d"${nls.labelStyle}"\x3e\r\n                ${nls.labelStyle}\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"fontSettingNode"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e        \r\n      \x3c/div\x3e  \r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/on dojo/dom-style ./ColorPickerEditor ./FontSetting jimu/BaseWidget jimu/dijit/TabContainer3 dijit/_WidgetsInTemplateMixin dojo/text!../templates/GridSettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query dojo/keys dijit/registry jimu/dijit/formSelect".split(" "),function(q,f,g,h,k,r,t,u,v,w,b,x,y,l,m,n){return q([t,v,x],{baseClass:"jimu-widget-GRGDrafter-Settings",templateString:w,selectedGridSettings:{},_defaultColor:"#1a299c",_defaultTextSize:12,
colorPickerNodes:null,_defaultFont:{font:{fontFamily:"Arial",bold:!1,italic:!1,underline:!1},fontSize:12,textColor:"#2f4f4f"},gridSettingsOptions:{cellShape:["default","hexagon"],cellUnits:"meters kilometers miles nautical-miles yards feet".split(" "),labelStartPosition:["lowerLeft","lowerRight","upperLeft","upperRight"],labelType:["alphaNumeric","alphaAlpha","numeric"],labelTypeWithRefSys:["gridReferenceSystem","alphaNumeric","alphaAlpha","numeric"],labelDirection:["horizontal","vertical"],gridOrigin:["center",
"lowerLeft","lowerRight","upperLeft","upperRight"],referenceSystem:["MGRS","USNG","UTM"]},constructor:function(a){b.mixin(this,a)},postCreate:function(){this.colorPickerNodes=null},startup:function(){this.tab=new u({tabs:[{title:this.nls.gridSettingsLabel,content:this.gridTab},{title:this.nls.labelSettingsLabel,content:this.labelTab}],selected:this.nls.gridTabLabel});this.tab.placeAt(this.tabsContainer);this.tab.startup();this.gridOutlineColorPicker=new k({nls:this.nls,typeOfColorPicker:"Outline"},
this.cellOutlineColorPicker);h.set(this.gridOutlineColorPicker.slider.domNode,"width","");this.gridOutlineColorPicker.setValues({color:this.config.grg.cellOutline.color,transparency:this.config.grg.cellOutline.transparency});this.gridOutlineColorPicker.startup();this.gridFillColorPicker=new k({nls:this.nls,typeOfColorPicker:"Fill"},this.cellFillColorPicker);h.set(this.gridFillColorPicker.slider.domNode,"width","");this.gridFillColorPicker.setValues({color:this.config.grg.cellFill.color,transparency:this.config.grg.cellFill.transparency});
this.gridFillColorPicker.startup();var a=l(".jimu-color-pickerPopup",this.domNode);f.forEach(a,b.hitch(this,function(c){this.own(g(c,"keydown",b.hitch(this,function(d){d.keyCode!==m.ENTER&&d.keyCode!==m.SPACE||d.currentTarget.click()})))}));this.fontSetting=new r({config:this.config.grg.font||this._defaultFont,nls:this.nls},this.fontSettingNode);this.fontSetting.startup();this._loadOptionsForDropDown(this.cellShape,this.gridSettingsOptions.cellShape);this._loadOptionsForDropDown(this.labelStartPosition,
this.gridSettingsOptions.labelStartPosition);this._loadOptionsForDropDown(this.cellUnits,this.gridSettingsOptions.cellUnits);this._loadOptionsForDropDown(this.labelType,this.gridSettingsOptions.labelType);this._loadOptionsForDropDown(this.labelTypeWithRefSys,this.gridSettingsOptions.labelTypeWithRefSys);this._loadOptionsForDropDown(this.labelDirection,this.gridSettingsOptions.labelDirection);this._loadOptionsForDropDown(this.gridOrigin,this.gridSettingsOptions.gridOrigin);this._loadOptionsForDropDown(this.referenceSystem,
this.gridSettingsOptions.referenceSystem);this.config.grg&&(this.cellShape.setValue(this.config.grg.cellShape),this.cellUnits.setValue(this.config.grg.cellUnits),this.gridOrigin.setValue(this.config.grg.gridOrigin),this.labelType.setValue(this.config.grg.labelType),this.labelDirection.setValue(this.config.grg.labelDirection),this.labelStartPosition.setValue(this.config.grg.labelOrigin),this.referenceSystem.setValue(this.config.grg.referenceSystem),"hexagon"===this.cellShape.get("value")?(this.labelDirection.set("disabled",
!0),this.labelDirection.setValue("horizontal")):this.labelDirection.set("disabled",!1));this.colorPickerNodes=l(".colorPickerEditor",this.domNode);this.onGridsettingsChanged()},postCreate:function(){this.inherited(arguments);y.add(this.domNode,"GRGDrafterSettingsContainer GRGDrafterFullWidth");this._handleClickEvents()},_handleClickEvents:function(){this.own(g(this.cellShape,"change",b.hitch(this,function(){"hexagon"===this.cellShape.get("value")?(this.labelDirection.set("disabled",!0),this.labelDirection.setValue("horizontal")):
this.labelDirection.set("disabled",!1)})))},_loadOptionsForDropDown:function(a,c){var d=[],p;f.forEach(c,b.hitch(this,function(e){p=this.nls.gridSettings[e]&&this.nls.gridSettings[e].hasOwnProperty("label")?{value:e,label:this.nls.gridSettings[e].label}:{value:e,label:this.nls.gridSettings[e]};d.push(p)}));a.addOption(d)},_isSettingsChanged:function(){var a=!1;this.selectedGridSettings.cellShape!==this.cellShape.get("value")?a=!0:this.selectedGridSettings.labelStartPosition!==this.labelStartPosition.get("value")?
a=!0:this.selectedGridSettings.cellUnits!==this.cellUnits.get("value")?a=!0:this.selectedGridSettings.labelType!==this.labelType.get("value")?a=!0:this.selectedGridSettings.labelTypeWithRefSys!==this.labelTypeWithRefSys.get("value")?a=!0:this.selectedGridSettings.labelDirection!==this.labelDirection.get("value")?a=!0:this.selectedGridSettings.gridOrigin!==this.gridOrigin.get("value")?a=!0:this.selectedGridSettings.referenceSystem!==this.referenceSystem.get("value")?a=!0:this.selectedGridSettings.gridOutlineColor!==
this.gridOutlineColorPicker.getValues().color?a=!0:this.selectedGridSettings.gridOutlineTransparency!==this.gridOutlineColorPicker.getValues().transparency?a=!0:this.selectedGridSettings.gridFillColor!==this.gridFillColorPicker.getValues().color?a=!0:this.selectedGridSettings.gridFillTransparency!==this.gridFillColorPicker.getValues().transparency?a=!0:this.selectedGridSettings.fontSettings!==this.fontSetting.getConfig()&&(a=!0);return a},onClose:function(){if(this._isSettingsChanged())this.onGridsettingsChanged()},
validInputs:function(){var a=!0;f.some(this.colorPickerNodes,function(c){if(n.byId(c.id).validateSpinner&&!n.byId(c.id).validateSpinner())return a=!1,!0},this);return a},onGridsettingsChanged:function(){this.selectedGridSettings={cellShape:this.cellShape.get("value"),labelStartPosition:this.labelStartPosition.get("value"),cellUnits:this.cellUnits.get("value"),labelType:this.labelType.get("value"),labelTypeWithRefSys:this.labelTypeWithRefSys.get("value"),labelDirection:this.labelDirection.get("value"),
gridOrigin:this.gridOrigin.get("value"),referenceSystem:this.referenceSystem.get("value"),gridOutlineColor:this.gridOutlineColorPicker.getValues().color,gridOutlineTransparency:this.gridOutlineColorPicker.getValues().transparency,gridFillColor:this.gridFillColorPicker.getValues().color,gridFillTransparency:this.gridFillColorPicker.getValues().transparency,fontSettings:b.clone(this.fontSetting.getConfig())};this.emit("gridSettingsChanged",this.selectedGridSettings)}})});