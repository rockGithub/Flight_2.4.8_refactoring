define(["cUtility"],function(a){"use strict";function b(a){if(a%100===0){if(a%400===0)return!0}else if(a%4===0)return!0;return!1}function c(a,c){return[31,b(a)?29:28,31,30,31,30,31,31,30,31,30,31][c]}function d(a,b){var c,d=this;c=a&&_.has(a,"constructor")?a.constructor:function(){return d.apply(this,arguments)},_.extend(c,d,b);var e=function(){this.constructor=c};return e.prototype=d.prototype,c.prototype=new e,a&&_.extend(c.prototype,a),c.__super__=d.prototype,c}function e(){}var f=a.Date.format,g=a.getServerDate(),h=function(){var a=new Date(g);return a.setHours(0,0,0,0),a}(),i={cls:"cui-calendar",monthsNum:1,animateSwitch:"right",format:"Y-m-d",days:"min",monthFormate:"Y年n月",appendElement:"body",startTime:h,todayCls:"cui_cld_today",endTime:Number.MAX_VALUE,header:{title:"",tel:!1,home:!1,homeHandler:e},headerTemplate:'<header><h1><%= title %></h1><i id="js_return" class="returnico lefthead"></i><% if(home) { %> <i class="icon_home i_bef" id="c-ui-header-home"></i> <% } %><% if(tel) { %><a href="tel:<%= tel %>" class="icon_phone i_bef __hreftel__" id="c-ui-header-tel"></a><% } %></header>',bodyPrefixTemplate:'<article class="cont_wrap"><div class="cui_cldwrap">',daysTemplate:'<ul class="cui_cldweek"><% _.each(days, function(day) { %><li><%= day %><% }); %></ul>',monthTemplate:'<section class="cui_cldunit"><h1 class="cui_cldmonth"><%= monthFormate %></h1><ul class="cui_cld_daybox"><% _.each(month, function(day) { %><li data-date="<%= day.format %>" class="<% if (day.invalid) { print("cui_cld_invalid cui_cld_daypass"); } else { print("cui_cld_valid"); } if(day.desc) { print(" cui_cld_day_havetxt"); } if (day.cls) { print(" " + day.cls); } %>"><em><%= day.value %></em><% if (day.desc) { %><i><%= day.desc %></i><% } %><% }); %></ul></section>',bodySuffixTemplate:"</div></article>",callback:e,onShow:e,onHide:e,constant:{days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],daysShort:["周日","周一","周二","周三","周四","周五","周六"],daysMin:["日","一","二","三","四","五","六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"]}},j=function(a){a=a||{},this.options=$.extend(!0,{},i,a),this.$el=$("<div>").addClass(this.options.cls),this.initialize.apply(this,arguments),this.render()};return j.prototype={constructor:j,initialize:e,hasPushState:history&&history.pushState,show:function(){var a=this.options,b=this.$el,c=this.animateHandler(),d=this;return this._isShow?void 0:(this.hasPushState&&this.options.header&&(history.pushState({},document.title,location.href),$(window).one("popstate",function(){d.hide(!0)})),a.animateSwitch?b.css({"-webkit-transform":c,transform:c}).show().animate({"-webkit-transform":"translate(0, 0)",transform:"translate(0, 0)"},500,"ease-in-out",function(){b.css({"-webkit-transform":"",transform:""})}):b.show(),this._isShow=!0,a.onShow.call(this),this)},hide:function(a){var b=this,c=this.options,d=this.$el,e=this.animateHandler();return this._isShow&&!a&&this.hasPushState&&this.options.header&&history.back(),c.animateSwitch?d.animate({"-webkit-transform":e,transform:e},500,"ease-in-out",function(){d.hide()}):d.hide(),c.onHide.call(b),this._isShow=!1,this},remove:function(){var a=this.$el;this.options.animateSwitch?setTimeout(function(){a.remove()},501):a.remove()},animateHandler:function(){var a,b=this.options.animateSwitch;if(b)switch(b){case"top":a="translate(0, 100%)";break;case"bottom":a="translate(0, -100%)";break;case"left":a="translate(-100%, 0)";break;case"right":a="translate(100%, 0)";break;default:a="translate(100%, 0)"}return a},setOptions:function(a,b){return _.isObject(a)?_.each(a,function(a,b){this.options[b]=a},this):this.options[a]=b,this},isValid:function(a){var b,c=this.options.startTime.getTime();return a=a.getTime(),b=_.isDate(this.options.endTime)?this.options.endTime.getTime():this.options.endTime,a-c>=0&&b-a>=0},bindEvents:function(){var a=this,b=this.options.header;this.$el.on("click",".cui_cld_valid",function(){var b=$(this),c=b.attr("data-date").split("-"),d=new Date(c[0],parseInt(c[1],10)-1,c[2]),e=d.getDay(),g=d.getMonth(),h=a.options.constant,i={days:h.days[e],daysShort:h.daysShort[e],daysMin:h.daysMin[e],months:h.months[g],monthsShort:h.monthsShort[g],value:f(d,a.options.format),holiday:a.getDateDesc(d).desc};a.options.callback.call(a,d,i,b)}),b&&(this.$el.on("click","#js_return",function(){a.hide()}),b.home&&this.$el.on("click","#c-ui-header-home",function(){b.homeHandler.call(a)}))},render:function(){var a=this.options,b=[],c=a.startTime.getFullYear(),d=a.startTime.getMonth();b.push(this.createHeader()),b.push(a.bodyPrefixTemplate),b.push(this.createDays());for(var e=0;e<a.monthsNum;e++)d+1>12&&(d=0,c++),b.push(this.createMonth(c,d++));b.push(a.bodySuffixTemplate),this.$el.css("display","none").html(b.join("")).appendTo($(a.appendElement)),"body"===a.appendElement?this.$el.css({position:"absolute",zIndex:3001,top:0,right:0,left:0}):this.$el.addClass("cui-calendar-static"),this.bindEvents()},createHeader:function(){var a=this.options.header;return a?_.template(this.options.headerTemplate,a):""},createDays:function(){var a,b=this.options.days,c=this.options.constant;return a="short"===b?c.daysShort:"min"===b?c.daysMin:c.days,_.template(this.options.daysTemplate,{days:a})},createMonth:function(a,b){for(var c=new Date(a,b),d=c.getDay(),e={monthFormate:f(c,this.options.monthFormate),month:[]},g=this.generateMonthModel(a,b),h=0;d>h;h++)e.month.push({invalid:!0,value:""});return e.month=e.month.concat(g),_.template(this.options.monthTemplate,e)},generateMonthModel:function(a,b){for(var d,e,g=c(a,b),h=[],i=1;g>=i;i++)d=new Date(a,b,i),e={invalid:!0,value:i},_.extend(e,this.getDateDesc(d)),this.isValid(d)&&(e.invalid=!1,e.format=f(d,"Y-m-d")),h.push(e);return h},getDateDesc:function(a){var b=864e5,c="",d="",e=a.getTime(),f=h.getTime();return e===f?(c="今天",d=this.options.todayCls):e-f===b?(c="明天",d=this.options.todayCls):e-f===2*b&&(c="后天",d=this.options.todayCls),{cls:d,desc:c}}},_.extend(j,{isLeapYear:b,getDaysInMonth:c,extend:d,dateFormat:f,defaults:i,serverDate:g}),j});