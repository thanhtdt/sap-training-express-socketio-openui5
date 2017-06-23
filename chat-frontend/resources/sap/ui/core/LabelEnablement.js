/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','../base/ManagedObject'],function(q,M){"use strict";function l(o,m){var F=sap.ui.require(m);return typeof F==='function'&&(o instanceof F);}var C={};function t(i,I){if(!i){return null;}var o=sap.ui.getCore().byId(i);if(o&&I&&(!l(o,'sap/ui/core/Control')||o.getDomRef())){o.invalidate();}return o;}function r(o,d){var s=o.getId();var O=o.__sLabeledControl;var n=d?null:o.getLabelForRendering();if(O==n){return;}if(!d){o.invalidate();}if(n){o.__sLabeledControl=n;}else{delete o.__sLabeledControl;}var b;if(O){b=C[O];if(b){b=q.grep(b,function(f){return f!=s;});if(b.length){C[O]=b;}else{delete C[O];}}}if(n){b=C[n]||[];b.push(s);C[n]=b;}var e=t(O,true);var N=t(n,true);if(e){o.detachRequiredChange(e);}if(N){o.attachRequiredChange(N);}}function c(o){if(!o){throw new Error("sap.ui.core.LabelEnablement cannot enrich null");}var m=o.getMetadata();if(!m.isInstanceOf("sap.ui.core.Label")){throw new Error("sap.ui.core.LabelEnablement only supports Controls with interface sap.ui.core.Label");}var b=m.getAssociation("labelFor");if(!b||b.multiple){throw new Error("sap.ui.core.LabelEnablement only supports Controls with a to-1 association 'labelFor'");}}var L={};L.writeLabelForAttribute=function(R,o){if(!o||!o.getLabelForRendering){return;}var s=o.getLabelForRendering();if(!s){return;}var b=t(s);if(b&&b.getIdForLabel){s=b.getIdForLabel();}if(s){R.writeAttributeEscaped("for",s);}};L.getReferencingLabels=function(e){var i=e?e.getId():null;if(!i){return[];}return C[i]||[];};L.isRequired=function(e){if(a(e)){return true;}var b=L.getReferencingLabels(e),o;for(var i=0;i<b.length;i++){o=sap.ui.getCore().byId(b[i]);if(a(o)){return true;}}return false;};function a(e){return!!(e&&e.getMetadata().getProperty("required")&&e.getRequired());}L.enrich=function(o){c(o);o.__orig_setLabelFor=o.setLabelFor;o.setLabelFor=function(i){var b=this.__orig_setLabelFor.apply(this,arguments);r(this);return b;};o.__orig_exit=o.exit;o.exit=function(){this._sAlternativeId=null;r(this,true);if(o.__orig_exit){o.__orig_exit.apply(this,arguments);}};o.setAlternativeLabelFor=function(i){if(i instanceof M){i=i.getId();}else if(i!=null&&typeof i!=="string"){return this;}this._sAlternativeId=i;r(this);return this;};o.getLabelForRendering=function(){return this.getLabelFor()||this._sAlternativeId;};if(!o.getMetadata().getProperty("required")){return;}o.__orig_setRequired=o.setRequired;o.setRequired=function(R){var O=this.getRequired(),b=this.__orig_setRequired.apply(this,arguments);if(this.getRequired()!==O){t(this.__sLabeledControl,true);}return b;};o.isRequired=function(){var f=t(this.getLabelForRendering(),false);return a(this)||a(f);};o.disableRequiredChangeCheck=function(n){this._bNoRequiredChangeCheck=n;};o.attachRequiredChange=function(f){if(f&&!this._bNoRequiredChangeCheck){if(f.getMetadata().getProperty("required")){f.attachEvent("_change",_,this);}this._bRequiredAttached=true;}};o.detachRequiredChange=function(f){if(f&&!this._bNoRequiredChangeCheck){if(f.getMetadata().getProperty("required")){f.detachEvent("_change",_,this);}this._bRequiredAttached=false;}};function _(e){if(e.getParameter("name")=="required"){this.invalidate();}}o.__orig_onAfterRendering=o.onAfterRendering;o.onAfterRendering=function(e){var b;if(this.__orig_onAfterRendering){b=this.__orig_onAfterRendering.apply(this,arguments);}if(!this._bNoRequiredChangeCheck&&!this._bRequiredAttached&&this.__sLabeledControl){var f=t(this.__sLabeledControl,false);this.attachRequiredChange(f);}return b;};};return L;},true);
