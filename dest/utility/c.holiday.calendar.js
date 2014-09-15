define(["cCalendar"],function(a){"use strict";function b(a){return 15&g[a-1900]}function c(a,b){return g[a-1900]&65536>>b?30:29}function d(a){return b(a)?65536&g[a-1900]?30:29:0}function e(a){for(var b=348,c=32768;c>8;c>>=1)b+=g[a-1900]&c?1:0;return b+d(a)}function f(a){var f,g=0,h=0,i={},j=new Date(1900,0,31),k=(a-j)/864e5;for(i.dayCyl=k+40,i.monCyl=14,f=1900;2050>f&&k>0;f++)h=e(f),k-=h,i.monCyl+=12;for(0>k&&(k+=h,f--,i.monCyl-=12),i.year=f,i.yearCyl=f-1864,g=b(f),i.isLeap=!1,f=1;13>f&&k>0;f++)g>0&&f===g+1&&i.isLeap===!1?(--f,i.isLeap=!0,h=d(i.year)):h=c(i.year,f),i.isLeap===!0&&f===g+1&&(i.isLeap=!1),k-=h,i.isLeap===!1&&i.monCyl++;return 0===k&&g>0&&f===g+1&&(i.isLeap?i.isLeap=!1:(i.isLeap=!0,--f,--i.monCyl)),0>k&&(k+=h,--f,--i.monCyl),i.month=f,i.day=k+1,i}var g=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835],h=_.defaults({holidayCls:"cui_cld_holiday",solarHoliday:{"0101":"元旦","0214":"情人节","0405":"清明","0501":"劳动节",1001:"国庆",1225:"圣诞节"},lunarHoliday:{1230:"除夕","0101":"春节","0115":"元宵","0505":"端午","0707":"七夕","0815":"中秋","0909":"重阳"},_lunarHoliday:{}},a.defaults),i=a.extend({initialize:function(a){this.options=$.extend(!0,{},h,a)},getDateDesc:function(a){var b,c,d,e=i.__super__.getDateDesc.apply(this,arguments),g=this.generateHolidayKey(a.getMonth()+1,a.getDate()),h=this.options;return h.solarHoliday[g]?(e.desc=h.solarHoliday[g],e.cls=h.holidayCls):(c=f(a),b=this.generateHolidayKey(c.month,c.day),d=a.getFullYear()+b,h.lunarHoliday[b]&&(h._lunarHoliday[d]&&h._lunarHoliday[d]===g?(e.desc=h.lunarHoliday[b],e.cls=h.holidayCls):h._lunarHoliday[d]||(e.desc=h.lunarHoliday[b],e.cls=h.holidayCls,h._lunarHoliday[d]=g))),e},generateHolidayKey:function(a,b){return 10>a&&(a="0"+a),10>b&&(b="0"+b),""+a+b}},{defaults:h});return i});