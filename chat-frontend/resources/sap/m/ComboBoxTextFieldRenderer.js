/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./InputBaseRenderer','sap/ui/core/Renderer'],function(q,I,R){"use strict";var C=R.extend(I);C.CSS_CLASS_COMBOBOXTEXTFIELD="sapMComboBoxTextField";C.writeInnerAttributes=function(r,c){r.writeAttribute("autocomplete","off");r.writeAttribute("autocorrect","off");r.writeAttribute("autocapitalize","off");r.writeAttribute("type","text");};C.writeOuterAttributes=function(r,c){if(sap.ui.getCore().getConfiguration().getAccessibility()){r.writeAttribute("role","combobox");}};C.getAriaRole=function(){};C.getAccessibilityState=function(c){var a=I.getAccessibilityState.call(this,c);a.autocomplete="both";return a;};C.addOuterStyles=function(r,c){r.addStyle("max-width",c.getMaxWidth());};C.addOuterClasses=function(r,c){var a=C.CSS_CLASS_COMBOBOXTEXTFIELD;r.addClass(a);if(!c.getEnabled()){r.addClass(a+"Disabled");}if(!c.getEditable()){r.addClass(a+"Readonly");}};C.addPaddingClass=q.noop;C.addInnerClasses=function(r,c){var a=C.CSS_CLASS_COMBOBOXTEXTFIELD;r.addClass(a+"Inner");if(!c.getEditable()){r.addClass(a+"InnerReadonly");}if(c.getShowButton()){r.addClass(a+"InnerWidthExtraPadding");}};C.addValueStateClasses=function(r,c){var a=C.CSS_CLASS_COMBOBOXTEXTFIELD;r.addClass(a+"State");r.addClass(a+c.getValueState());};C.writeInnerContent=function(r,c){if(c.getShowButton()){this.renderButton(r,c);}};C.renderButton=function(r,c){var i=c.getId(),b=i+"-arrow",a=sap.ui.getCore().getConfiguration().getAccessibility(),A=c.getAggregation("_buttonLabelText");r.write('<span tabindex="-1" ');r.writeAttribute("id",b);if(a){r.writeAttribute("role","button");r.writeAttribute("aria-labelledby",A.getId());}this.addButtonClasses(r,c);r.writeClasses();r.write(">");a&&r.renderControl(A);r.write("</span>");};C.addButtonClasses=function(r,c){var a=C.CSS_CLASS_COMBOBOXTEXTFIELD+"Arrow";r.addClass(a);if(!c.getEnabled()){r.addClass(a+"Disabled");}};return C;},true);
