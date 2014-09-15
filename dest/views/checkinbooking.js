define(["libs","c","cBasePageView","CommonStore","cMultipleDate","FlightModel","FlightStore",buildViewTemplatesPath("checkinbooking.html")],function(a,b,c,d,e,f,g,h){b.ui,b.base,d.SalesObjectStore.getInstance,b.utility;userStore=d.UserStore.getInstance(),userInfo=userStore?userStore.getUser():null,flightAirlineModel=f.FlightAirlineModel.getInstance(),checkinParamStore=g.CheckinParamStore.getInstance(),checkPassengerStore=g.CheckPassengerStore.getInstance(),checkinListStore=g.CheckinListStore.getInstance(),checkAirListModel=f.CheckAirListModel.getInstance(),_this=null;var i=c.extend({pageid:"",tpl:h,ariLineData:null,uid:null,passengerData:null,render:function(){this.viewdata.req=this.request,this.$el.html(this.tpl),this.els={contentBox:this.$el.find("#content"),contentTpl:this.$el.find("#contentTpl")},this.content=_.template(this.els.contentTpl.html())},events:{"click #AirName":"selectFlightAir","click #CardType":"changeCard","click #CheckinButton":"checkIn","click #CheckinRule":"checkinRule","click #CheckinNotice":"checkinNotice","click #HazardNotice":"hazardNotice","click .flight-footer li":"ToNextPage","click #js_return":"backAction"},onCreate:function(){this.render()},onLoad:function(a){if(this.hasChange=!1,"checkinprotocol"!=a&&checkinParamStore.setAttr("hasChange",!1),checkAirListModel.url=userStore.isLogin()?"/Flight/Domestic/CheckIn/AircraftRulesSearch":"/Flight/Domestic/CheckIn/NonMemberAircraftRulesSearch",this.baseDataModel=new e({models:{CheckAirListModel:checkAirListModel}}),_this=this,!this.uid)if(userStore.isLogin()){var c=userStore.getUser();this.uid=c.UserID}else this.uid=b.utility.getGuid();this.passengerData=checkPassengerStore.get()||{},this.initParamStore(),this.updatePage(function(){this.hideLoading(),this.turning()})},onShow:function(){},onHide:function(){this.hideLoading()},backAction:function(){userStore.isLogin()?checkPassengerStore.get()||checkinListStore.get()&&checkinListStore.get().fcinfos&&checkinListStore.get().fcinfos.length?checkinListStore.get()&&checkinListStore.get().fcinfos&&checkinListStore.get().fcinfos.length&&this.showAlert(function(){_this.back("CheckInList")}):this.showAlert(function(){_this.forward("index")}):this.showAlert(function(){_this.back("checkin")})},showAlert:function(a){1==checkinParamStore.getAttr("hasChange")?(this.backAlert=new b.ui.Alert({title:"提示信息",message:"填写尚未完成，确定要离开吗？",buttons:[{text:"取消",click:function(){this.hide()}},{text:"确定",click:function(){this.hide(),_this.hideLoading(),a()}}]}),this.backAlert.show()):a()},updatePage:function(a){this.showLoading();this.baseDataModel.excute(function(c){if(this.ariLineData=c.CheckAirListModel,!this.ariLineData.aplst||0==this.ariLineData.aplst.length)return this.ruleAlert=new b.ui.Alert({message:"抱歉，在线值机临时关闭，请稍候再试。",buttons:[{text:"知道了",click:function(){this.hide(),_this.backAction()}}]}),this.ruleAlert.show(),void this.hideLoading();for(var d=null,e=0;e<this.ariLineData.aplst.length;e++)checkinParamStore.getAttr("airCode")==this.ariLineData.aplst[e].alcode&&(d=this.ariLineData.aplst[e].alname);checkinParamStore.setAttr("airName",d),this.els.contentBox.html(this.content(checkinParamStore.get())),checkPassengerStore.get()?(this.$el.find(".flight-headtips").hide(),this.$el.find("#CardInput").attr("disabled","disabled"),this.$el.find("#AirName").removeClass("flight-arrrht"),this.$el.find("#CardType").removeClass("flight-arrdown")):userStore.isLogin()&&checkinListStore.get()&&checkinListStore.get().fcinfos&&checkinListStore.get().fcinfos.length&&this.$el.find(".flight-headtips").hide(),this.onInputSave(),b.ui.InputClear(this.$el.find("input"),null,null,{},!0),a.call(this)},function(){this.ariLineData={FlightAirline:[]},_this.backAction()},!1,this)},changeCard:function(a){if(!checkPassengerStore.get()){for(var c=$(a.currentTarget).attr("data-Id"),d=$(a.currentTarget),e=[],f=0,g=$("#CardInput"),h=0,i=this.idCardType.length;i>h;h++){var j={};c==this.idCardType[h].id&&(f=h),j.key=this.idCardType[h].id,j.val=this.idCardType[h].name,e.push(j)}this.idCardList=new b.ui.ScrollRadioList({title:"请选择有效证件",index:f,data:e,itemClick:function(a){switch(a.key){case 1:g.attr("placeholder","乘机人身份证号");break;case 2:g.attr("placeholder","乘机人护照号");break;case 3:g.attr("placeholder","票号13位数字")}f=a.index;var b=checkinParamStore.getAttr("cards")||[];d.text(a.val),d.attr("data-Id",a.key),checkinParamStore.setAttr("cardType",a.key),checkinParamStore.setAttr("cardName",b[f].name);var c=b[f].no?b[f].no:"";checkinParamStore.setAttr("card",c),$("#CardInput").val(c)}}),this.idCardList.show()}},selectFlightAir:function(a){if(!checkPassengerStore.get()){_this.hasChange=!0,checkinParamStore.setAttr("hasChange",!0);for(var c=this.$el.find("#AirName span").first(),d=this.$el.find("#AirName span").last(),e=$(a.target).attr("data-code"),f=0,g=[],h=0,i=this.ariLineData.aplst.length;i>h;h++){var j=this.ariLineData.aplst[h],k={};e==j.alcode&&(f=h),k.key=j.alcode,k.val='<span class="pubFlights_'+j.alcode+'">'+j.alname+"</span>",g.push(k)}this.airLineList=new b.ui.ScrollRadioList({title:"请选择航空公司",index:f,data:g,itemClick:function(a){$("#AirName").attr("data-code",a.key),d.text(a.val.split(">")[1].split("<")[0]),checkinParamStore.setAttr("airName",a.val.split(">")[1].split("<")[0]),checkinParamStore.setAttr("airCode",a.key),c.attr("class","pubFlights_"+a.key)}}),this.airLineList.show()}},validate:function(){var a=checkinParamStore.getAttr("airCode"),c=(checkinParamStore.getAttr("airName"),checkinParamStore.getAttr("tel")),d=checkinParamStore.getAttr("cardType"),e=checkinParamStore.getAttr("card");if(e&&(e=e.replace(/\s/g,"")),!a)return this.showToast("请选择航空公司"),!1;if(1==d){if(!e||!e.length)return _this.showToast("请填写身份证号码"),$("#CardInput").hasClass("highlight")||$("#CardInput").addClass("highlight"),$("#CardInput").focus(),!1;if(15==e.length)return this.showValidateAlter("根据国家法律规定，第一代居民身份证自2013年1月1日起停止使用。请填写您的18位身份证号码。"),$("#CardInput").focus(),!1;if(!b.utility.validate.isIdCard(e))return this.showValidateAlter("请填写正确的身份证号码!"),$("#CardInput").focus(),!1}var f=/^[A-Za-z0-9]+$/g;if(2==d){if(!e||!e.length)return _this.showToast("请填写护照号"),$("#CardInput").hasClass("highlight")||$("#CardInput").addClass("highlight"),$("#CardInput").focus(),!1;if(e.length>20)return this.showValidateAlter("请填写正确的护照号码"),$("#CardInput").focus(),!1;if(!f.test(e))return this.showValidateAlter("证件号码只能是英文或数字"),$("#CardInput").focus(),!1}if(3==d){if(f=/^[0-9]+$/g,!e||!e.length)return _this.showToast("请填写机票号"),$("#CardInput").hasClass("highlight")||$("#CardInput").addClass("highlight"),$("#CardInput").focus(),!1;if(13!=e.length||!f.test(e))return this.showValidateAlter("机票号为13位数字"),$("#CardInput").focus(),!1}return c?c.length<11||!b.utility.validate.isMobile(c)?(_this.showToast("请填写正确的手机号码"),$("#tel").focus(),!1):!0:(_this.showToast("请输入手机号码"),$("#tel").focus(),$("#tel").hasClass("highlight")||$("#tel").addClass("highlight"),!1)},showValidateAlter:function(a){var c=new b.ui.Alert({title:"confirm title",message:a,buttons:[{text:"知道了",click:function(){this.hide()}}]});c.show()},onInputSave:function(){this.$el.find(".flight-zjtable").on("input","#CardInput",function(){var a=$(this).val().trim();checkinParamStore.setAttr("card",a);var b=checkinParamStore.getAttr("cardType"),c=checkinParamStore.getAttr("cards");c[b-1]&&(c[b-1].no=a),a.length&&$(this).hasClass("highlight")&&$(this).removeClass(),checkinParamStore.setAttr("cards",c)}),this.$el.find(".flight-zjtable").on("input","#tel",function(){var a=$(this).val().trim();if(a.length&&$(this).hasClass("highlight")&&$(this).removeClass(),checkinParamStore.setAttr("tel",a),checkPassengerStore.get()&&checkPassengerStore.get().ciplst&&checkPassengerStore.get().ciplst.length){var b=checkPassengerStore.get().ciplst;b[0].phone=a,checkPassengerStore.setAttr("ciplst",b)}}),this.$el.find(".flight-zjtable").on("focus","#CardInput",function(){_this.hasChange=!0,checkinParamStore.setAttr("hasChange",!0)}),this.$el.find(".flight-zjtable").on("focus","#tel",function(){_this.hasChange=!0,checkinParamStore.setAttr("hasChange",!0)})},checkIn:function(){this.validate()&&(checkPassengerStore.get()?(checkPassengerStore.setAttr("backurl","checkinbooking"),this.forward("selectseat")):this.forward("checkinselectflight"))},checkinRule:function(){{var a=$("#AirName").attr("data-code");$("#AirName").text()}return a?(checkinParamStore.setAttr("noticeType",0),checkinParamStore.setAttr("alcode",a),void this.forward("checkinprotocol")):(this.ruleAlert=new b.ui.Alert({message:"请先选择航空公司，再查看值机协议",buttons:[{text:"确认",click:function(){this.hide()}}]}),this.ruleAlert.show(),!1)},checkinNotice:function(){checkinParamStore.setAttr("noticeType",1),this.forward("checkinprotocol")},hazardNotice:function(){checkinParamStore.setAttr("noticeType",2),this.forward("checkinprotocol")},ToNextPage:function(a){var b=$(a.target);"flightSearch"==b.attr("id")?this.forward("index"):"flightSchedule"==b.attr("id")&&this.jump("/html5/Flight/Schedule/")},initParamStore:function(){if(checkinParamStore.getAttr("uid")!=this.uid&&checkinParamStore.remove(),this.passengerData&&this.passengerData.ciplst&&this.passengerData.ciplst.length){var a=this.passengerData.ciplst;if(checkinParamStore.setAttr("airCode",this.passengerData.aircde),a.length){switch(a[0].ctype){case 1:checkinParamStore.setAttr("cardName","身份证"),checkinParamStore.setAttr("card",a[0].cno);break;case 2:checkinParamStore.setAttr("cardName","护照"),checkinParamStore.setAttr("card",a[0].cno);break;case 3:checkinParamStore.setAttr("cardName","机票号"),checkinParamStore.setAttr("card",a[0].tno);break;default:checkinParamStore.setAttr("cardName","身份证"),checkinParamStore.setAttr("card",null)}checkinParamStore.setAttr("cardType",a[0].ctype),checkinParamStore.setAttr("tel",a[0].phone)}}var b=checkinParamStore.getAttr("cards")||[];b.length!=this.idCardType.length&&(_.each(this.idCardType,function(a,c){var d=!0;_.each(b,function(b){return b.id==a.id?(d=!1,!1):void 0}),d&&(b[c]=a)}),checkinParamStore.setAttr("cards",b)),checkinParamStore.setAttr("uid",this.uid)},idCardType:[{id:1,name:"身份证"},{id:2,name:"护照"},{id:3,name:"机票号"}]});return i});