define(["cBase","FlightStore","mapping","cAjax","BusinessModel"],function(a,b,c,d,e){var f={};return f.CheckInCancelSubmitModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/CheckInCancelSubmit",this.method="POST",this.param={ver:99,oid:0},this.isUserData=!0},initialize:function($super,a){$super(a)},formatParam:function(a){var b={aucde:a.aucde,oid:a.oid,fcsinf:{fno:a.fno,dcode:a.dacode,acode:a.aacode,ddate:a.depdat,setno:a.ciplst[0].setno},psginf:{ctype:a.ciplst[0].ctype,cno:a.ciplst[0].cno,tno:a.ciplst[0].tno,psgname:a.ciplst[0].psgnam,phone:a.ciplst[0].phone}};this.param=b}}),f.GetAuthCodeModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/AuthCodeSearch",this.method="POST",this.param={ver:99,oid:0,fcsinf:{fno:0,dcode:0,acode:0,ddate:"2005/12/12",setno:0},psginf:{ctype:0,cno:0,tno:0,psgname:"",phone:""}},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.OrderCancelModel=new a.Class(e,{__propertys__:function(){this.url="/Basic/Order/Cancel",this.method="POST",this.param={ver:99,oid:0,biztype:3},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightCityListModel=new a.Class(e,{__propertys__:function(){this.url="/Data/AirportCity",this.method="GET",this.param={ver:99},this.dataformat=function(a){var b=a.cities||[],c={};if(b.length)for(var d=0,e=b.length;e>d;d++)c[b[d].portCode]=b[d];return a.cities2=c,a},this.result=b.FlightCityListStore.getInstance()},initialize:function($super,a){$super(a)}}),f.FlightInterCityListModel=new a.Class(e,{__propertys__:function(){this.url="/Data/InternationalCity",this.method="GET",this.param={dataVer:0,ver:0,type:64},this.dataformat=function(a){var b,c,d=a.cities||[],e={},f={},g=[];if(d.length)for(var h=0,i=d.length;i>h;h++)b=e[d[h].einitial]=e[d[h].einitial]||[],c=f[d[h].einitial]=f[d[h].einitial]||{},c[d[h].code+""+d[h].flag]||(64==(64&d[h].flag)?g.push(d[h]):b.push(d[h]),c[d[h].code+""+d[h].flag]=!0);for(var h in e)e[h].sort(function(a,b){return a.hotFlag-b.hotFlag});return g.sort(function(a,b){return a.hotFlag-b.hotFlag}),a.cities2=e,a.hotcity=g,a},this.result=b.FlightInterCityListStore.getInstance()},initialize:function($super,a){$super(a)}}),f.FlightDetailModel=new a.Class(e,{__propertys__:function(){function a(a,b,c){var d={};return $(a).each(function(a,e){return b==e[c]?(d=e,!1):void 0}),d}return this.url="/Flight/Domestic/FlightDetailV2/Query",this.method="POST",this.param=b.FlightDetailParamStore.getInstance(),this.result=b.FlightDetailsStore.getInstance(),$(originData.pols).each(function(b,c){var d=a(c.prices,psgType,"psgtype"),e=a(c.frinfo,psgType,"psgtype"),f=a(c.promos,1,"promotype"),g=a(c.notes,5,"notetype"),h=a(c.notes,4,"notetype"),i={"class":c.grades[0].grade,classForDisp:c.grades[0].dplclass,discount:d.discount,flag:h.notes&&h.notes[0]?h.notes[0].desc||h.notes[0].notes:"",fuelCost:d.fuel,price:d.price,tax:d.tax,rebateAmt:f.price||0,rebateRmk:f.promodates&&f.promodates[0]?f.promodates[0].rmk:"",giftCardInfo:a(c.pkginfo,2,"pkgtype"),promos:c.promos,pkginfo:c.pkginfo,polid:c.polid,rmk:{endNote:e.end,ext:null,notice:"",refNote:e.refnote,rerNote:e.rer,specialClass:"",ticketBody:"",ticketRmk:g.notes&&g.notes[0]?g.notes[0].desc||g.notes[0].notes:"",ticketTitle:g.notetit||""}};cabinsData.cabins.push(i)}),cabinsData}}),f.FlightOrderSumbitModel=new a.Class(e,{__propertys__:function(){this.url="/html5/Flight/AddFlightOrder",this.method="POST",this.param={dataVer:99,ver:99}},initialize:function($super,a){$super(a)}}),f.FlightOrderListModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/OrderList/Query",this.method="POST",this.param={dataVer:99,ver:99},this.result=b.FlightOrderListStore.getInstance(),this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightOrderDetailModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/Query",this.method="POST",this.param={dataVer:99,ver:99},this.result=b.FlightOrderDetailStore.getInstance(),this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightTicketRefundChangeModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Ticket/RefundChangeStatus/Query",this.result=b.FlightTicketRefundChangeStore.getInstance(),this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightTicketChangeModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Ticket/Change",this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightTicketRefundModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Ticket/Refund",this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightListModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/FlightList/Query",this.param=b.FlightSearchStore.getInstance(),this.result=b.FlightListStore.getInstance()},initialize:function($super,a){$super(a)}}),f.FlightAirlineModel=new a.Class(e,{__propertys__:function(){this.url="/Data/Airline?ver=1",this.method="GET",this.param={},this.result=b.FlightAirlineStore.getInstance(),this.dataformat=function(a){var b=a.airlines||[],c={};if(b.length)for(var d=0,e=b.length;e>d;d++)c[b[d].code]=b[d];return c}},initialize:function($super,a){$super(a)}}),f.FlightAircraftModel=new a.Class(e,{__propertys__:function(){this.url="/Data/Aircraft?ver=1",this.method="GET",this.param={},this.result=b.FlightAircraftStore.getInstance(),this.dataformat=function(a){var b=a.aircrafts||[],c={};if(b.length)for(var d=0,e=b.length;e>d;d++)c[b[d].type]=b[d];return c}},initialize:function($super,a){$super(a)}}),f.FlightPickTicketModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/DeliveryV2/Query",this.param={},this.result=b.FlightPickTicketStore.getInstance(),this.isUserData=!0},initialize:function($super,a){$super(a)},setFlightNo:function(a){var b=this.param.get();item=b.items&&b.items[0]||{},item.flightNo=a,b.items=[item],this.param.set(b)}}),f.FlightTicketRefundChangeModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Ticket/RefundChangeStatus/Query",this.result=b.FlightTicketRefundChangeStore.getInstance(),this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightTicketChangeModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Ticket/Change",this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.ExpressStatusSearchModel=new a.Class(e,{__propertys__:function(){this.url="/customer/Express/status/query",this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.LowestPriceSearchModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Flight/LowestPrice/Query",this.method="POST",this.param=b.LowestPriceSearchStore.getInstance(),this.result=b.FlightLowestPriceStore.getInstance()},initialize:function($super,a){$super(a)}}),f.SelectSeatModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/ModelFigure/Query",this.method="POST",this.param={},this.result=b.FlightSelectSeatStore.getInstance()},initialize:function($super,a){$super(a)}}),f.CheckinSearchModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/AircraftRulesSearch",this.method="POST",this.param=b.CheckinSearchParamStore.getInstance(),this.result=b.CheckinResultStore.getInstance()},initialize:function($super,a){$super(a)}}),f.CheckinListModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/CheckInListSearch",this.method="POST",this.param={ver:0},this.result=b.CheckinListStore.getInstance()},initialize:function($super,a){$super(a)}}),f.SeatSubmitModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Seat/Submit",this.method="POST",this.param={}},initialize:function($super,a){$super(a)}}),f.CheckinSegmentModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/CheckInSegmentSearch",this.method="POST",this.param={},this.result=b.CheckinSegmentStore.getInstance()},initialize:function($super,a){$super(a)}}),f.SubmitCheckinModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/CheckInSubmit",this.method="POST",this.param={}},initialize:function($super,a){$super(a)}}),f.CheckAirListModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/CheckIn/AircraftRulesSearch",this.method="POST",this.param={},this.result=b.CheckinAirListStore.getInstance()},initialize:function($super,a){$super(a)}}),f.OrderCreateModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/OrderCreate",this.method="POST",this.param={},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.CustomerCouponModel=new a.Class(e,{__propertys__:function(){this.method="POST",this.param={ver:1,pageIdx:1,flag:1},this.isUserData=!0,this.result=b.CustomerCouponStore.getInstance();var a=this;this.buildurl=function(){return a.protocol+"://"+a.getdomain().domain+"/"+a.getdomain().path+"/customer/coupon/query"}},initialize:function($super,a){$super(a)},getdomain:function(a){var a=a||window.location.host;return a.match(/^m\.ctrip\.com/i)||a.match(/^secure\.ctrip\.com/i)?(domain="m.ctrip.com",path="restapi"):a.match(/^(localhost|172\.16|127\.0)/i)||window.DEBUG_MODE?(domain="m.fat19.qa.nt.ctripcorp.com",path="restapi.common"):a.match(/^10\.8\.2\.111/i)||a.match(/^10\.8\.5\.10/i)?(domain="m.ctrip.com",path="restapi"):a.match(/^m\.uat\.qa\.ctripcorp\.com/i)?(domain="m.uat.qa.ctripcorp.com",path="restapi"):a.match(/^m\.fat/i)||a.match(/^waptest\.ctrip|^210\.13\.100\.191/i)||a.match(/^wapsecuretest\.ctrip|^210\.13\.100\.191/i)||window.DEBUG_MODE?(domain="m.fat19.qa.nt.ctripcorp.com",path="restapi.common"):(domain="m.ctrip.com",path="restapi"),{domain:domain,path:path}}}),f.PaymentModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/OrderSubmit",this.method="POST",this.param={ver:0},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.PaymentThirdModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/OrderSubmit",this.method="POST",this.param={ver:0},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.PaymentThirdPartySignatureForFlightSearch=new a.Class(e,{__propertys__:function(){this.method="POST",this.param={ver:1},this.isUserData=!0;var a=this;this.buildurl=function(){return a.getdomain().protocol+"://"+a.getdomain().domain+"/"+a.getdomain().path+"/Flight/International/PaymentRelationChange/Query"}},initialize:function($super,a){$super(a)},getdomain:function(a){var b="http",c="m.ctrip.com",d="restapi",a=a||window.location.host;return a.match(/^m\.ctrip\.com/i)||a.match(/^secure\.ctrip\.com/i)?(b="http",c="m.ctrip.com",d="restapi"):a.match(/^10\.8\.2\.111/i)||a.match(/^10\.8\.5\.10/i)?(b="http",c="m.ctrip.com",d="restapi"):a.match(/^m\.uat\.qa\.nt\.ctripcorp\.com/i)?(c="ws.mobile.flight.uat.ctripcorp.com",d="FlightWirelessApi"):a.match(/^(localhost|172\.16|127\.0)/i)?(b="http",c="172.16.156.70:88",d="restapi"):a.match(/^m\.fat/i)?(b="http",c="ws.mobile.flight.fat36.qa.nt.ctripcorp.com",d="FlightWirelessApi"):(b="http",c="m.ctrip.com",d="restapi"),{protocol:b,domain:c,path:d}}}),f.RepeatOrderCheckModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/RepeatOrderCheck",this.method="POST",this.param={ver:0},this.result=b.RepeatOrderCheckStore.getInstance(),this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightVarListModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/FlightVarList/Query",this.method="POST",this.param={queryType:2,ver:0},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.XiaoMiModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/International/Miui/Push",this.method="POST",this.param={ver:0}},initialize:function($super,a){$super(a)}}),f.NonmemberLoginModel=new a.Class(e,{__propertys__:function(){this.url="/User/Nonmember/Login",this.method="POST",this.param={},this.isUserData=!0,this.protocol="https"},initialize:function($super,a){$super(a)}}),f.AddrCheckModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Delivery/AddressCheck",this.method="POST",this.param={ver:0},this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightDetailModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/FlightDetailV2/Query",this.method="POST",this.param=b.FlightDetailParamStore.getInstance(),this.result=b.FlightDetailsStore.getInstance(),this.isUserData=!0},initialize:function($super,a){$super(a)}}),f.FlightOrderCreateModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/Order/OrderCreate",this.param={},this.method="POST"},initialize:function($super,a){$super(a)}}),f.FlightCabinModel=new a.Class(e,{__propertys__:function(){this.url="/Flight/Domestic/FlightDetailV2/Query",this.method="POST",this.param=b.FlightDetailParamStore.getInstance(),this.result=b.FlightCabinListStore.getInstance(),this.dataformat=this.formatData},initialize:function($super,a){$super(a)},formatData:function(a){function c(a,b,c){var d={};return $(a).each(function(a,e){return b==e[c]?(d=e,!1):void 0}),d}var d=b.FlightSearchStore.getInstance().getAttr("passengerType"),e=a.originData;return cabinsData={head:e.head,cabins:[],ext:null,flag:0},$(e.pols).each(function(a,b){var e=c(b.prices,d,"psgtype"),f=c(b.frinfo,d,"psgtype"),g=c(b.promos,1,"promotype"),h=c(b.notes,5,"notetype"),i=c(b.notes,4,"notetype"),j={"class":b.grades[0].grade,classForDisp:b.grades[0].dplclass,discount:e.discount,flag:i.notes&&i.notes[0]?i.notes[0].desc||i.notes[0].notes:"",fuelCost:e.fuel,price:e.price,tax:e.tax,rebateAmt:g.price||0,rebateRmk:g.promodates&&g.promodates[0]?g.promodates[0].rmk:"",giftCardInfo:c(b.pkginfo,2,"pkgtype"),promos:b.promos,pkginfo:b.pkginfo,polid:b.polid,rmk:{endNote:f.end,ext:null,notice:"",refNote:f.refnote,rerNote:f.rer,specialClass:"",ticketBody:"",ticketRmk:h.notes&&h.notes[0]?h.notes[0].desc||h.notes[0].notes:"",ticketTitle:h.notetit||""}};cabinsData.cabins.push(j)}),cabinsData}}),f.FlightOrderSumbitModel=new a.Class(e,{__propertys__:function(){this.url="/html5/Flight/AddFlightOrder",this.method="POST",this.param={dataVer:99,ver:99}},initialize:function($super,a){$super(a)}}),f});