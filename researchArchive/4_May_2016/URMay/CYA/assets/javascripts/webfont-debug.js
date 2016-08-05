/*
 * Copyright 2012 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var webfont={};webfont.bind=function(e,t,n){var r=arguments.length>2?Array.prototype.slice.call(arguments,2):[];return function(){return r.push.apply(r,arguments),t.apply(e,r)}},webfont.extendsClass=function(e,t){function n(){}n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.superCtor_=e,t.super_=e.prototype},webfont.DomHelper=function(e,t){this.document_=e,this.userAgent_=t},webfont.DomHelper.prototype.createElement=function(e,t,n){var r=this.document_.createElement(e);if(t)for(var i in t)t.hasOwnProperty(i)&&(i=="style"?this.setStyle(r,t[i]):r.setAttribute(i,t[i]));return n&&r.appendChild(this.document_.createTextNode(n)),r},webfont.DomHelper.prototype.insertInto=function(e,t){var n=this.document_.getElementsByTagName(e)[0];return n||(n=document.documentElement),n&&n.lastChild?(n.insertBefore(t,n.lastChild),!0):!1},webfont.DomHelper.prototype.whenBodyExists=function(e){var t=function(){document.body?e():setTimeout(t,0)};t()},webfont.DomHelper.prototype.removeElement=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},webfont.DomHelper.prototype.createCssLink=function(e){return this.createElement("link",{rel:"stylesheet",href:e})},webfont.DomHelper.prototype.createScriptSrc=function(e){return this.createElement("script",{src:e})},webfont.DomHelper.prototype.appendClassName=function(e,t){var n=e.className.split(/\s+/);for(var r=0,i=n.length;r<i;r++)if(n[r]==t)return;n.push(t),e.className=n.join(" ").replace(/^\s+/,"")},webfont.DomHelper.prototype.removeClassName=function(e,t){var n=e.className.split(/\s+/),r=[];for(var i=0,s=n.length;i<s;i++)n[i]!=t&&r.push(n[i]);e.className=r.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")},webfont.DomHelper.prototype.hasClassName=function(e,t){var n=e.className.split(/\s+/);for(var r=0,i=n.length;r<i;r++)if(n[r]==t)return!0;return!1},webfont.DomHelper.prototype.setStyle=function(e,t){this.userAgent_.getName()=="MSIE"?e.style.cssText=t:e.setAttribute("style",t)},webfont.UserAgent=function(e,t,n,r,i,s,o,u){this.name_=e,this.version_=t,this.engine_=n,this.engineVersion_=r,this.platform_=i,this.platformVersion_=s,this.documentMode_=o,this.webFontSupport_=u},webfont.UserAgent.prototype.getName=function(){return this.name_},webfont.UserAgent.prototype.getVersion=function(){return this.version_},webfont.UserAgent.prototype.getEngine=function(){return this.engine_},webfont.UserAgent.prototype.getEngineVersion=function(){return this.engineVersion_},webfont.UserAgent.prototype.getPlatform=function(){return this.platform_},webfont.UserAgent.prototype.getPlatformVersion=function(){return this.platformVersion_},webfont.UserAgent.prototype.getDocumentMode=function(){return this.documentMode_},webfont.UserAgent.prototype.isSupportingWebFont=function(){return this.webFontSupport_},webfont.UserAgentParser=function(e,t){this.userAgent_=e,this.doc_=t},webfont.UserAgentParser.UNKNOWN="Unknown",webfont.UserAgentParser.UNKNOWN_USER_AGENT=new webfont.UserAgent(webfont.UserAgentParser.UNKNOWN,webfont.UserAgentParser.UNKNOWN,webfont.UserAgentParser.UNKNOWN,webfont.UserAgentParser.UNKNOWN,webfont.UserAgentParser.UNKNOWN,webfont.UserAgentParser.UNKNOWN,undefined,!1),webfont.UserAgentParser.prototype.parse=function(){return this.isIe_()?this.parseIeUserAgentString_():this.isOpera_()?this.parseOperaUserAgentString_():this.isWebKit_()?this.parseWebKitUserAgentString_():this.isGecko_()?this.parseGeckoUserAgentString_():webfont.UserAgentParser.UNKNOWN_USER_AGENT},webfont.UserAgentParser.prototype.getPlatform_=function(){var e=this.getMatchingGroup_(this.userAgent_,/(iPod|iPad|iPhone|Android)/,1);if(e!="")return e;var t=this.getMatchingGroup_(this.userAgent_,/(Linux|Mac_PowerPC|Macintosh|Windows)/,1);return t!=""?(t=="Mac_PowerPC"&&(t="Macintosh"),t):webfont.UserAgentParser.UNKNOWN},webfont.UserAgentParser.prototype.getPlatformVersion_=function(){var e=this.getMatchingGroup_(this.userAgent_,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(e)return e;var t=this.getMatchingGroup_(this.userAgent_,/(iPhone )?OS ([\d_]+)/,2);if(t)return t;var n=this.getMatchingGroup_(this.userAgent_,/Linux ([i\d]+)/,1);return n?n:webfont.UserAgentParser.UNKNOWN},webfont.UserAgentParser.prototype.isIe_=function(){return this.userAgent_.indexOf("MSIE")!=-1},webfont.UserAgentParser.prototype.parseIeUserAgentString_=function(){var e=this.getMatchingGroup_(this.userAgent_,/(MSIE [\d\w\.]+)/,1),t=webfont.UserAgentParser.UNKNOWN,n=webfont.UserAgentParser.UNKNOWN;if(e!=""){var r=e.split(" "),i=r[0],s=r[1];return new webfont.UserAgent(i,s,i,s,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),this.getMajorVersion_(s)>=6)}return new webfont.UserAgent("MSIE",webfont.UserAgentParser.UNKNOWN,"MSIE",webfont.UserAgentParser.UNKNOWN,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),!1)},webfont.UserAgentParser.prototype.isOpera_=function(){return this.userAgent_.indexOf("Opera")!=-1},webfont.UserAgentParser.prototype.parseOperaUserAgentString_=function(){var e=webfont.UserAgentParser.UNKNOWN,t=webfont.UserAgentParser.UNKNOWN,n=this.getMatchingGroup_(this.userAgent_,/(Presto\/[\d\w\.]+)/,1);if(n!=""){var r=n.split("/");e=r[0],t=r[1]}else{this.userAgent_.indexOf("Gecko")!=-1&&(e="Gecko");var i=this.getMatchingGroup_(this.userAgent_,/rv:([^\)]+)/,1);i!=""&&(t=i)}if(this.userAgent_.indexOf("Version/")!=-1){var s=this.getMatchingGroup_(this.userAgent_,/Version\/([\d\.]+)/,1);if(s!="")return new webfont.UserAgent("Opera",s,e,t,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),this.getMajorVersion_(s)>=10)}var s=this.getMatchingGroup_(this.userAgent_,/Opera[\/ ]([\d\.]+)/,1);return s!=""?new webfont.UserAgent("Opera",s,e,t,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),this.getMajorVersion_(s)>=10):new webfont.UserAgent("Opera",webfont.UserAgentParser.UNKNOWN,e,t,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),!1)},webfont.UserAgentParser.prototype.isWebKit_=function(){return this.userAgent_.indexOf("AppleWebKit")!=-1},webfont.UserAgentParser.prototype.parseWebKitUserAgentString_=function(){var e=this.getPlatform_(),t=this.getPlatformVersion_(),n=this.getMatchingGroup_(this.userAgent_,/AppleWebKit\/([\d\.\+]+)/,1);n==""&&(n=webfont.UserAgentParser.UNKNOWN);var r=webfont.UserAgentParser.UNKNOWN;this.userAgent_.indexOf("Chrome")!=-1?r="Chrome":this.userAgent_.indexOf("Safari")!=-1?r="Safari":this.userAgent_.indexOf("AdobeAIR")!=-1&&(r="AdobeAIR");var i=webfont.UserAgentParser.UNKNOWN;this.userAgent_.indexOf("Version/")!=-1?i=this.getMatchingGroup_(this.userAgent_,/Version\/([\d\.\w]+)/,1):r=="Chrome"?i=this.getMatchingGroup_(this.userAgent_,/Chrome\/([\d\.]+)/,1):r=="AdobeAIR"&&(i=this.getMatchingGroup_(this.userAgent_,/AdobeAIR\/([\d\.]+)/,1));var s=!1;if(r=="AdobeAIR"){var o=this.getMatchingGroup_(i,/\d+\.(\d+)/,1);s=this.getMajorVersion_(i)>2||this.getMajorVersion_(i)==2&&parseInt(o,10)>=5}else{var o=this.getMatchingGroup_(n,/\d+\.(\d+)/,1);s=this.getMajorVersion_(n)>=526||this.getMajorVersion_(n)>=525&&parseInt(o,10)>=13}return new webfont.UserAgent(r,i,"AppleWebKit",n,e,t,this.getDocumentMode_(this.doc_),s)},webfont.UserAgentParser.prototype.isGecko_=function(){return this.userAgent_.indexOf("Gecko")!=-1},webfont.UserAgentParser.prototype.parseGeckoUserAgentString_=function(){var e=webfont.UserAgentParser.UNKNOWN,t=webfont.UserAgentParser.UNKNOWN,n=!1;if(this.userAgent_.indexOf("Firefox")!=-1){e="Firefox";var r=this.getMatchingGroup_(this.userAgent_,/Firefox\/([\d\w\.]+)/,1);if(r!=""){var i=this.getMatchingGroup_(r,/\d+\.(\d+)/,1);t=r,n=r!=""&&this.getMajorVersion_(r)>=3&&parseInt(i,10)>=5}}else this.userAgent_.indexOf("Mozilla")!=-1&&(e="Mozilla");var s=this.getMatchingGroup_(this.userAgent_,/rv:([^\)]+)/,1);if(s=="")s=webfont.UserAgentParser.UNKNOWN;else if(!n){var o=this.getMajorVersion_(s),u=parseInt(this.getMatchingGroup_(s,/\d+\.(\d+)/,1),10),a=parseInt(this.getMatchingGroup_(s,/\d+\.\d+\.(\d+)/,1),10);n=o>1||o==1&&u>9||o==1&&u==9&&a>=2||s.match(/1\.9\.1b[123]/)!=null||s.match(/1\.9\.1\.[\d\.]+/)!=null}return new webfont.UserAgent(e,t,"Gecko",s,this.getPlatform_(),this.getPlatformVersion_(),this.getDocumentMode_(this.doc_),n)},webfont.UserAgentParser.prototype.getMajorVersion_=function(e){var t=this.getMatchingGroup_(e,/(\d+)/,1);return t!=""?parseInt(t,10):-1},webfont.UserAgentParser.prototype.getMatchingGroup_=function(e,t,n){var r=e.match(t);return r&&r[n]?r[n]:""},webfont.UserAgentParser.prototype.getDocumentMode_=function(e){return e.documentMode?e.documentMode:undefined},webfont.EventDispatcher=function(e,t,n,r){this.domHelper_=e,this.htmlElement_=t,this.callbacks_=n,this.namespace_=r||webfont.EventDispatcher.DEFAULT_NAMESPACE,this.cssClassName_=new webfont.CssClassName("-")},webfont.EventDispatcher.DEFAULT_NAMESPACE="wf",webfont.EventDispatcher.LOADING="loading",webfont.EventDispatcher.ACTIVE="active",webfont.EventDispatcher.INACTIVE="inactive",webfont.EventDispatcher.FONT="font",webfont.EventDispatcher.prototype.dispatchLoading=function(){this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.LOADING)),this.dispatch_(webfont.EventDispatcher.LOADING)},webfont.EventDispatcher.prototype.dispatchFontLoading=function(e,t){this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.LOADING)),this.dispatch_(webfont.EventDispatcher.FONT+webfont.EventDispatcher.LOADING,e,t)},webfont.EventDispatcher.prototype.dispatchFontActive=function(e,t){this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.LOADING)),this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.INACTIVE)),this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.ACTIVE)),this.dispatch_(webfont.EventDispatcher.FONT+webfont.EventDispatcher.ACTIVE,e,t)},webfont.EventDispatcher.prototype.dispatchFontInactive=function(e,t){this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.LOADING));var n=this.domHelper_.hasClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.ACTIVE));n||this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,e,t,webfont.EventDispatcher.INACTIVE)),this.dispatch_(webfont.EventDispatcher.FONT+webfont.EventDispatcher.INACTIVE,e,t)},webfont.EventDispatcher.prototype.dispatchInactive=function(){this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.LOADING));var e=this.domHelper_.hasClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.ACTIVE));e||this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.INACTIVE)),this.dispatch_(webfont.EventDispatcher.INACTIVE)},webfont.EventDispatcher.prototype.dispatchActive=function(){this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.LOADING)),this.domHelper_.removeClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.INACTIVE)),this.domHelper_.appendClassName(this.htmlElement_,this.cssClassName_.build(this.namespace_,webfont.EventDispatcher.ACTIVE)),this.dispatch_(webfont.EventDispatcher.ACTIVE)},webfont.EventDispatcher.prototype.dispatch_=function(e,t,n){this.callbacks_[e]&&this.callbacks_[e](t,n)},webfont.FontModuleLoader=function(){this.modules_={}},webfont.FontModuleLoader.prototype.addModuleFactory=function(e,t){this.modules_[e]=t},webfont.FontModuleLoader.prototype.getModules=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var r=this.modules_[n];r&&t.push(r(e[n]))}return t},webfont.FontWatcher=function(e,t,n,r,i){this.domHelper_=e,this.eventDispatcher_=t,this.fontSizer_=n,this.asyncCall_=r,this.getTime_=i,this.currentlyWatched_=0,this.last_=!1,this.success_=!1},webfont.FontWatcher.DEFAULT_VARIATION="n4",webfont.FontWatcher.prototype.watch=function(e,t,n,r,i){var s=e.length;for(var o=0;o<s;o++){var u=e[o];t[u]||(t[u]=[webfont.FontWatcher.DEFAULT_VARIATION]),this.currentlyWatched_+=t[u].length}i&&(this.last_=i);for(var o=0;o<s;o++){var u=e[o],a=t[u],f=n[u];for(var l=0,c=a.length;l<c;l++){var h=a[l];this.eventDispatcher_.dispatchFontLoading(u,h);var p=webfont.bind(this,this.fontActive_),d=webfont.bind(this,this.fontInactive_),v=new r(p,d,this.domHelper_,this.fontSizer_,this.asyncCall_,this.getTime_,u,h,f);v.start()}}},webfont.FontWatcher.prototype.fontActive_=function(e,t){this.eventDispatcher_.dispatchFontActive(e,t),this.success_=!0,this.decreaseCurrentlyWatched_()},webfont.FontWatcher.prototype.fontInactive_=function(e,t){this.eventDispatcher_.dispatchFontInactive(e,t),this.decreaseCurrentlyWatched_()},webfont.FontWatcher.prototype.decreaseCurrentlyWatched_=function(){--this.currentlyWatched_==0&&this.last_&&(this.success_?this.eventDispatcher_.dispatchActive():this.eventDispatcher_.dispatchInactive())},webfont.FontWatchRunner=function(e,t,n,r,i,s,o,u,a){this.activeCallback_=e,this.inactiveCallback_=t,this.domHelper_=n,this.fontSizer_=r,this.asyncCall_=i,this.getTime_=s,this.nameHelper_=new webfont.CssFontFamilyName,this.fvd_=new webfont.FontVariationDescription,this.fontFamily_=o,this.fontDescription_=u,this.fontTestString_=a||webfont.FontWatchRunner.DEFAULT_TEST_STRING,this.originalSizeA_=this.getDefaultFontSize_(webfont.FontWatchRunner.DEFAULT_FONTS_A),this.originalSizeB_=this.getDefaultFontSize_(webfont.FontWatchRunner.DEFAULT_FONTS_B),this.lastObservedSizeA_=this.originalSizeA_,this.lastObservedSizeB_=this.originalSizeB_,this.requestedFontA_=this.createHiddenElementWithFont_(webfont.FontWatchRunner.DEFAULT_FONTS_A),this.requestedFontB_=this.createHiddenElementWithFont_(webfont.FontWatchRunner.DEFAULT_FONTS_B)},webfont.FontWatchRunner.DEFAULT_FONTS_A="arial,'URW Gothic L',sans-serif",webfont.FontWatchRunner.DEFAULT_FONTS_B="Georgia,'Century Schoolbook L',serif",webfont.FontWatchRunner.DEFAULT_TEST_STRING="BESbswy",webfont.FontWatchRunner.prototype.start=function(){this.started_=this.getTime_(),this.check_()},webfont.FontWatchRunner.prototype.check_=function(){var e=this.fontSizer_.getWidth(this.requestedFontA_),t=this.fontSizer_.getWidth(this.requestedFontB_);this.originalSizeA_==e&&this.originalSizeB_==t||this.lastObservedSizeA_!=e||this.lastObservedSizeB_!=t?this.getTime_()-this.started_>=5e3?this.finish_(this.inactiveCallback_):(this.lastObservedSizeA_=e,this.lastObservedSizeB_=t,this.asyncCheck_()):this.finish_(this.activeCallback_)},webfont.FontWatchRunner.prototype.asyncCheck_=function(){this.asyncCall_(function(e,t){return function(){t.call(e)}}(this,this.check_),25)},webfont.FontWatchRunner.prototype.finish_=function(e){this.domHelper_.removeElement(this.requestedFontA_),this.domHelper_.removeElement(this.requestedFontB_),e(this.fontFamily_,this.fontDescription_)},webfont.FontWatchRunner.prototype.getDefaultFontSize_=function(e){var t=this.createHiddenElementWithFont_(e,!0),n=this.fontSizer_.getWidth(t);return this.domHelper_.removeElement(t),n},webfont.FontWatchRunner.prototype.createHiddenElementWithFont_=function(e,t){var n=this.computeStyleString_(e,this.fontDescription_,t),r=this.domHelper_.createElement("span",{style:n},this.fontTestString_);return this.domHelper_.insertInto("body",r),r},webfont.FontWatchRunner.prototype.computeStyleString_=function(e,t,n){var r=this.fvd_.expand(t),i="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(n?"":this.nameHelper_.quote(this.fontFamily_)+",")+e+";"+r;return i},webfont.WebFont=function(e,t,n,r,i){this.domHelper_=e,this.fontModuleLoader_=t,this.htmlElement_=n,this.asyncCall_=r,this.userAgent_=i,this.moduleLoading_=0,this.moduleFailedLoading_=0},webfont.WebFont.prototype.addModule=function(e,t){this.fontModuleLoader_.addModuleFactory(e,t)},webfont.WebFont.prototype.load=function(e){var t=new webfont.EventDispatcher(this.domHelper_,this.htmlElement_,e);this.userAgent_.isSupportingWebFont()?this.load_(t,e):t.dispatchInactive()},webfont.WebFont.prototype.isModuleSupportingUserAgent_=function(e,t,n,r){var i=e.getFontWatchRunnerCtor?e.getFontWatchRunnerCtor():webfont.FontWatchRunner;if(!r){var s=--this.moduleLoading_==0;this.moduleFailedLoading_--,s&&(this.moduleFailedLoading_==0?t.dispatchInactive():t.dispatchLoading()),n.watch([],{},{},i,s);return}e.load(webfont.bind(this,this.onModuleReady_,t,n,i))},webfont.WebFont.prototype.onModuleReady_=function(e,t,n,r,i,s){var o=--this.moduleLoading_==0;o&&e.dispatchLoading(),this.asyncCall_(webfont.bind(this,function(e,t,n,r,i,s){e.watch(t,n||{},r||{},i,s)},t,r,i,s,n,o))},webfont.WebFont.prototype.load_=function(e,t){var n=this.fontModuleLoader_.getModules(t),r=this;this.moduleFailedLoading_=this.moduleLoading_=n.length;var i=new webfont.FontWatcher(this.domHelper_,e,{getWidth:function(e){return e.offsetWidth}},r.asyncCall_,function(){return(new Date).getTime()});for(var s=0,o=n.length;s<o;s++){var u=n[s];u.supportUserAgent(this.userAgent_,webfont.bind(this,this.isModuleSupportingUserAgent_,u,e,i))}},webfont.CssClassName=function(e){this.joinChar_=e||webfont.CssClassName.DEFAULT_JOIN_CHAR},webfont.CssClassName.DEFAULT_JOIN_CHAR="-",webfont.CssClassName.prototype.sanitize=function(e){return e.replace(/[\W_]+/g,"").toLowerCase()},webfont.CssClassName.prototype.build=function(e){var t=[];for(var n=0;n<arguments.length;n++)t.push(this.sanitize(arguments[n]));return t.join(this.joinChar_)},webfont.CssFontFamilyName=function(){this.quote_="'"},webfont.CssFontFamilyName.prototype.quote=function(e){var t=[],n=e.split(/,\s*/);for(var r=0;r<n.length;r++){var i=n[r].replace(/['"]/g,"");i.indexOf(" ")==-1?t.push(i):t.push(this.quote_+i+this.quote_)}return t.join(",")},webfont.FontVariationDescription=function(){this.properties_=webfont.FontVariationDescription.PROPERTIES,this.values_=webfont.FontVariationDescription.VALUES},webfont.FontVariationDescription.PROPERTIES=["font-style","font-weight"],webfont.FontVariationDescription.VALUES={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]},webfont.FontVariationDescription.Item=function(e,t,n){this.index_=e,this.property_=t,this.values_=n},webfont.FontVariationDescription.Item.prototype.compact=function(e,t){for(var n=0;n<this.values_.length;n++)if(t==this.values_[n][1]){e[this.index_]=this.values_[n][0];return}},webfont.FontVariationDescription.Item.prototype.expand=function(e,t){for(var n=0;n<this.values_.length;n++)if(t==this.values_[n][0]){e[this.index_]=this.property_+":"+this.values_[n][1];return}},webfont.FontVariationDescription.prototype.compact=function(e){var t=["n","4"],n=e.split(";");for(var r=0,i=n.length;r<i;r++){var s=n[r].replace(/\s+/g,"").split(":");if(s.length==2){var o=s[0],u=s[1],a=this.getItem_(o);a&&a.compact(t,u)}}return t.join("")},webfont.FontVariationDescription.prototype.expand=function(e){if(e.length!=2)return null;var t=[null,null];for(var n=0,r=this.properties_.length;n<r;n++){var i=this.properties_[n],s=e.substr(n,1),o=this.values_[i],u=new webfont.FontVariationDescription.Item(n,i,o);u.expand(t,s)}return t[0]&&t[1]?t.join(";")+";":null},webfont.FontVariationDescription.prototype.getItem_=function(e){for(var t=0;t<this.properties_.length;t++)if(e==this.properties_[t]){var n=this.values_[e];return new webfont.FontVariationDescription.Item(t,e,n)}return null};var globalName="WebFont";window[globalName]=function(){var e=new webfont.UserAgentParser(navigator.userAgent,document),t=e.parse(),n=new webfont.DomHelper(document,t),r=function(e,t){setTimeout(e,t)};return new webfont.WebFont(n,new webfont.FontModuleLoader,document.documentElement,r,t)}(),window[globalName].load=window[globalName].load,window[globalName].addModule=window[globalName].addModule,webfont.UserAgent.prototype.getName=webfont.UserAgent.prototype.getName,webfont.UserAgent.prototype.getVersion=webfont.UserAgent.prototype.getVersion,webfont.UserAgent.prototype.getEngine=webfont.UserAgent.prototype.getEngine,webfont.UserAgent.prototype.getEngineVersion=webfont.UserAgent.prototype.getEngineVersion,webfont.UserAgent.prototype.getPlatform=webfont.UserAgent.prototype.getPlatform,webfont.UserAgent.prototype.getPlatformVersion=webfont.UserAgent.prototype.getPlatformVersion,webfont.UserAgent.prototype.getDocumentMode=webfont.UserAgent.prototype.getDocumentMode,webfont.UserAgent.prototype.isSupportingWebFont=webfont.UserAgent.prototype.isSupportingWebFont,webfont.AscenderScript=function(e,t){this.domHelper_=e,this.configuration_=t},webfont.AscenderScript.NAME="ascender",webfont.AscenderScript.VARIATIONS={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"},webfont.AscenderScript.prototype.supportUserAgent=function(e,t){return t(e.isSupportingWebFont())},webfont.AscenderScript.prototype.load=function(e){var t=this.configuration_.key,n="https:"==document.location.protocol?"https:":"http:",r=n+"//webfonts.fontslive.com/css/"+t+".css";this.domHelper_.insertInto("head",this.domHelper_.createCssLink(r));var i=this.parseFamiliesAndVariations(this.configuration_.families);e(i.families,i.variations)},webfont.AscenderScript.prototype.parseFamiliesAndVariations=function(e){var t,n,r;t=[],n={};for(var i=0,s=e.length;i<s;i++)r=this.parseFamilyAndVariations(e[i]),t.push(r.family),n[r.family]=r.variations;return{families:t,variations:n}},webfont.AscenderScript.prototype.parseFamilyAndVariations=function(e){var t,n,r;return r=e.split(":"),t=r[0],n=[],r[1]?n=this.parseVariations(r[1]):n=["n4"],{family:t,variations:n}},webfont.AscenderScript.prototype.parseVariations=function(e){var t=e.split(","),n=[];for(var r=0,i=t.length;r<i;r++){var s=t[r];if(s){var o=webfont.AscenderScript.VARIATIONS[s];n.push(o?o:s)}}return n},window.WebFont.addModule(webfont.AscenderScript.NAME,function(e){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse(),r=new webfont.DomHelper(document,n);return new webfont.AscenderScript(r,e)}),webfont.LastResortWebKitFontWatchRunner=function(e,t,n,r,i,s,o,u,a){webfont.LastResortWebKitFontWatchRunner.superCtor_.call(this,e,t,n,r,i,s,o,u,a),this.webKitLastResortFontSizes_=this.setUpWebKitLastResortFontSizes_(),this.webKitLastResortSizeChange_=!1},webfont.extendsClass(webfont.FontWatchRunner,webfont.LastResortWebKitFontWatchRunner),webfont.LastResortWebKitFontWatchRunner.METRICS_COMPATIBLE_FONTS={Arimo:!0,Cousine:!0,Tinos:!0},webfont.LastResortWebKitFontWatchRunner.prototype.setUpWebKitLastResortFontSizes_=function(){var e=["Times New Roman","Lucida Sans Unicode","Courier New","Tahoma","Arial","Microsoft Sans Serif","Times","Lucida Console","Sans","Serif","Monospace"],t=e.length,n={},r=this.createHiddenElementWithFont_(e[0],!0);n[this.fontSizer_.getWidth(r)]=!0;for(var i=1;i<t;i++){var s=e[i];this.domHelper_.setStyle(r,this.computeStyleString_(s,this.fontDescription_,!0)),n[this.fontSizer_.getWidth(r)]=!0,this.fontDescription_[1]!="4"&&(this.domHelper_.setStyle(r,this.computeStyleString_(s,this.fontDescription_[0]+"4",!0)),n[this.fontSizer_.getWidth(r)]=!0)}return this.domHelper_.removeElement(r),n},webfont.LastResortWebKitFontWatchRunner.prototype.check_=function(){var e=this.fontSizer_.getWidth(this.requestedFontA_),t=this.fontSizer_.getWidth(this.requestedFontB_);!this.webKitLastResortSizeChange_&&e==t&&this.webKitLastResortFontSizes_[e]&&(this.webKitLastResortFontSizes_={},this.webKitLastResortFontSizes_[e]=!0,this.webKitLastResortSizeChange_=!0),(this.originalSizeA_!=e||this.originalSizeB_!=t)&&!this.webKitLastResortFontSizes_[e]&&!this.webKitLastResortFontSizes_[t]?this.finish_(this.activeCallback_):this.getTime_()-this.started_>=5e3?this.webKitLastResortFontSizes_[e]&&this.webKitLastResortFontSizes_[t]&&webfont.LastResortWebKitFontWatchRunner.METRICS_COMPATIBLE_FONTS[this.fontFamily_]?this.finish_(this.activeCallback_):this.finish_(this.inactiveCallback_):this.asyncCheck_()},webfont.FontApiUrlBuilder=function(e){if(e)this.apiUrl_=e;else{var t="https:"==window.location.protocol?"https:":"http:";this.apiUrl_=t+webfont.FontApiUrlBuilder.DEFAULT_API_URL}this.fontFamilies_=[],this.subsets_=[]},webfont.FontApiUrlBuilder.DEFAULT_API_URL="//fonts.googleapis.com/css",webfont.FontApiUrlBuilder.prototype.setFontFamilies=function(e){this.parseFontFamilies_(e)},webfont.FontApiUrlBuilder.prototype.parseFontFamilies_=function(e){var t=e.length;for(var n=0;n<t;n++){var r=e[n].split(":");r.length==3&&this.subsets_.push(r.pop()),this.fontFamilies_.push(r.join(":"))}},webfont.FontApiUrlBuilder.prototype.webSafe=function(e){return e.replace(/ /g,"+")},webfont.FontApiUrlBuilder.prototype.build=function(){if(this.fontFamilies_.length==0)throw new Error("No fonts to load !");if(this.apiUrl_.indexOf("kit=")!=-1)return this.apiUrl_;var e=this.fontFamilies_.length,t=[];for(var n=0;n<e;n++)t.push(this.webSafe(this.fontFamilies_[n]));var r=this.apiUrl_+"?family="+t.join("%7C");return this.subsets_.length>0&&(r+="&subset="+this.subsets_.join(",")),r},webfont.FontApiParser=function(e){this.fontFamilies_=e,this.parsedFontFamilies_=[],this.variations_={},this.fontTestStrings_={},this.fvd_=new webfont.FontVariationDescription},webfont.FontApiParser.VARIATIONS={ultralight:"n2",light:"n3",regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",ul:"n2",l:"n3",r:"n4",b:"n7",i:"i4",bi:"i7"},webfont.FontApiParser.INT_FONTS={latin:webfont.FontWatchRunner.DEFAULT_TEST_STRING,cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},webfont.FontApiParser.prototype.parse=function(){var e=this.fontFamilies_.length;for(var t=0;t<e;t++){var n=this.fontFamilies_[t].split(":"),r=n[0],i=["n4"];if(n.length>=2){var s=this.parseVariations_(n[1]);s.length>0&&(i=s);if(n.length==3){var o=this.parseSubsets_(n[2]);if(o.length>0){var u=webfont.FontApiParser.INT_FONTS[o[0]];u&&(this.fontTestStrings_[r]=u)}}}if(!this.fontTestStrings_[r]){var a=webfont.FontApiParser.INT_FONTS[r];a&&(this.fontTestStrings_[r]=a)}this.parsedFontFamilies_.push(r),this.variations_[r]=i}},webfont.FontApiParser.prototype.generateFontVariationDescription_=function(e){if(!e.match(/^[\w ]+$/))return"";var t=webfont.FontApiParser.VARIATIONS[e];if(t)return t;var n=e.match(/^(\d*)(\w*)$/),r=n[1],i=n[2],s=i?i:"n",o=r?r.substr(0,1):"4",u=this.fvd_.expand([s,o].join(""));return u?this.fvd_.compact(u):null},webfont.FontApiParser.prototype.parseVariations_=function(e){var t=[];if(!e)return t;var n=e.split(","),r=n.length;for(var i=0;i<r;i++){var s=n[i],o=this.generateFontVariationDescription_(s);o&&t.push(o)}return t},webfont.FontApiParser.prototype.parseSubsets_=function(e){var t=[];return e?e.split(","):t},webfont.FontApiParser.prototype.getFontFamilies=function(){return this.parsedFontFamilies_},webfont.FontApiParser.prototype.getVariations=function(){return this.variations_},webfont.FontApiParser.prototype.getFontTestStrings=function(){return this.fontTestStrings_},webfont.GoogleFontApi=function(e,t,n){this.userAgent_=e,this.domHelper_=t,this.configuration_=n},webfont.GoogleFontApi.NAME="google",webfont.GoogleFontApi.prototype.supportUserAgent=function(e,t){t(e.isSupportingWebFont())},webfont.GoogleFontApi.prototype.getFontWatchRunnerCtor=function(){return this.userAgent_.getEngine()=="AppleWebKit"?webfont.LastResortWebKitFontWatchRunner:webfont.FontWatchRunner},webfont.GoogleFontApi.prototype.load=function(e){var t=this.domHelper_,n=this.userAgent_.getName()=="MSIE"&&this.configuration_["blocking"]!=1;n?t.whenBodyExists(webfont.bind(this,this.insertLink_,e)):this.insertLink_(e)},webfont.GoogleFontApi.prototype.insertLink_=function(e){var t=this.domHelper_,n=new webfont.FontApiUrlBuilder(this.configuration_.api),r=this.configuration_.families;n.setFontFamilies(r);var i=new webfont.FontApiParser(r);i.parse(),t.insertInto("head",t.createCssLink(n.build())),e(i.getFontFamilies(),i.getVariations(),i.getFontTestStrings())},window.WebFont.addModule(webfont.GoogleFontApi.NAME,function(e){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse();return new webfont.GoogleFontApi(n,new webfont.DomHelper(document,n),e)}),webfont.CustomCss=function(e,t){this.domHelper_=e,this.configuration_=t},webfont.CustomCss.NAME="custom",webfont.CustomCss.prototype.load=function(e){var t=this.configuration_.urls||[],n=this.configuration_.families||[];for(var r=0,i=t.length;r<i;r++){var s=t[r];this.domHelper_.insertInto("head",this.domHelper_.createCssLink(s))}e(n)},webfont.CustomCss.prototype.supportUserAgent=function(e,t){return t(e.isSupportingWebFont())},window.WebFont.addModule(webfont.CustomCss.NAME,function(e){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse(),r=new webfont.DomHelper(document,n);return new webfont.CustomCss(r,e)}),webfont.FontdeckScript=function(e,t,n){this.global_=e,this.domHelper_=t,this.configuration_=n,this.fontFamilies_=[],this.fontVariations_={},this.fvd_=new webfont.FontVariationDescription},webfont.FontdeckScript.NAME="fontdeck",webfont.FontdeckScript.HOOK="__webfontfontdeckmodule__",webfont.FontdeckScript.API="//f.fontdeck.com/s/css/js/",webfont.FontdeckScript.prototype.getScriptSrc=function(e){var t="https:"==this.global_.location.protocol?"https:":"http:",n=this.configuration_.api||webfont.FontdeckScript.API;return t+n+this.global_.document.location.hostname+"/"+e+".js"},webfont.FontdeckScript.prototype.supportUserAgent=function(e,t){var n=this.configuration_.id,r=this;if(n){this.global_[webfont.FontdeckScript.HOOK]||(this.global_[webfont.FontdeckScript.HOOK]={}),this.global_[webfont.FontdeckScript.HOOK][n]=function(e,n){for(var i=0,s=n.fonts.length;i<s;++i){var o=n.fonts[i];r.fontFamilies_.push(o.name),r.fontVariations_[o.name]=[r.fvd_.compact("font-weight:"+o.weight+";font-style:"+o.style)]}t(e)};var i=this.domHelper_.createScriptSrc(this.getScriptSrc(n));this.domHelper_.insertInto("head",i)}else t(!0)},webfont.FontdeckScript.prototype.load=function(e){e(this.fontFamilies_,this.fontVariations_)},window.WebFont.addModule(webfont.FontdeckScript.NAME,function(e){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse(),r=new webfont.DomHelper(document,n);return new webfont.FontdeckScript(window,r,e)}),webfont.MonotypeScript=function(e,t,n,r,i){this.global_=e,this.userAgent_=t,this.domHelper_=n,this.doc_=r,this.configuration_=i,this.fontFamilies_=[],this.fontVariations_={}},webfont.MonotypeScript.NAME="monotype",webfont.MonotypeScript.HOOK="__mti_fntLst",webfont.MonotypeScript.SCRIPTID="__MonotypeAPIScript__",webfont.MonotypeScript.prototype.supportUserAgent=function(e,t){var n=this,r=n.configuration_.projectId;if(r){var i=n.domHelper_.createScriptSrc(n.getScriptSrc(r));i.id=webfont.MonotypeScript.SCRIPTID+r,i.onreadystatechange=function(e){if(i.readyState==="loaded"||i.readyState==="complete")i.onreadystatechange=null,i.onload(e)},i.onload=function(i){if(n.global_[webfont.MonotypeScript.HOOK+r]){var s=n.global_[webfont.MonotypeScript.HOOK+r]();if(s&&s.length){var o;for(o=0;o<s.length;o++)n.fontFamilies_.push(s[o].fontfamily)}}t(e.isSupportingWebFont())},this.domHelper_.insertInto("head",i)}else t(!0)},webfont.MonotypeScript.prototype.getScriptSrc=function(e){var t=this.protocol(),n=(this.configuration_.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return t+"//"+n+"/"+e+".js"},webfont.MonotypeScript.prototype.load=function(e){e(this.fontFamilies_,this.fontVariations_)},webfont.MonotypeScript.prototype.protocol=function(){var e=["http:","https:"],t=e[0];if(this.doc_&&this.doc_.location&&this.doc_.location.protocol){var n=0;for(n=0;n<e.length;n++)if(this.doc_.location.protocol===e[n])return this.doc_.location.protocol}return t},window.WebFont.addModule(webfont.MonotypeScript.NAME,function(e
){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse(),r=new webfont.DomHelper(document,n);return new webfont.MonotypeScript(window,n,r,document,e)}),webfont.TypekitScript=function(e,t,n){this.global_=e,this.domHelper_=t,this.configuration_=n,this.fontFamilies_=[],this.fontVariations_={}},webfont.TypekitScript.NAME="typekit",webfont.TypekitScript.HOOK="__webfonttypekitmodule__",webfont.TypekitScript.prototype.getScriptSrc=function(e){var t="https:"==window.location.protocol?"https:":"http:",n=this.configuration_.api||t+"//use.typekit.com";return n+"/"+e+".js"},webfont.TypekitScript.prototype.supportUserAgent=function(e,t){var n=this.configuration_.id,r=this.configuration_,i=this;if(n){this.global_[webfont.TypekitScript.HOOK]||(this.global_[webfont.TypekitScript.HOOK]={}),this.global_[webfont.TypekitScript.HOOK][n]=function(n){var s=function(e,n,r){i.fontFamilies_=n,i.fontVariations_=r,t(e)};n(e,r,s)};var s=this.domHelper_.createScriptSrc(this.getScriptSrc(n));this.domHelper_.insertInto("head",s)}else t(!0)},webfont.TypekitScript.prototype.load=function(e){e(this.fontFamilies_,this.fontVariations_)},window.WebFont.addModule(webfont.TypekitScript.NAME,function(e){var t=new webfont.UserAgentParser(navigator.userAgent,document),n=t.parse(),r=new webfont.DomHelper(document,n);return new webfont.TypekitScript(window,r,e)}),window.WebFontConfig&&window.WebFont.load(window.WebFontConfig);