define(["libs","c","CommonStore","FlightStore","FlightModel",buildViewTemplatesPath("orderdetail.html")],function(a,b,c,d,e,f){var g=e.FlightOrderListModel.getInstance(),h=(d.FlightOrderListStore.getInstance(),e.FlightOrderDetailModel.getInstance()),i=d.FlightOrderParamStore.getInstance(),j=e.FlightAircraftModel.getInstance(),k=c.UserStore.getInstance(),l=k?k.getUser():null,m=d.OrderDetailReturnPage.getInstance(),n=b.base,o=b.view.extend({pageid:"212055",hasAd:!0,tpl:f,render:function(){this.showLoading(),this.$el.html(this.tpl),this.elsBox={orderinfo_tpl:this.$el.find("#orderinfotpl"),orderinfo_box:this.$el.find("#orderinfobox"),flightdetail_tpl:this.$el.find("#flightdetailtpl"),flightdetail_box:this.$el.find("#flightdetailbox"),passenger_tpl:this.$el.find("#passengertpl"),passenger_box:this.$el.find("#passengerbox")},this.boxtplfun=_.template(this.elsBox.orderinfo_tpl.html()),this.flightdetailtplfun=_.template(this.elsBox.flightdetail_tpl.html()),this.passengertplfun=_.template(this.elsBox.passenger_tpl.html())},onCreate:function(){l&&l.Auth?this.render():this.jump("/webapp/myctrip/#account/login?from="+encodeURIComponent(this.getRoot()+"#orderdetail"))},onLoad:function(){if(this.render(),this.elsBox.orderinfo_box.empty(),this.elsBox.flightdetail_box.empty(),this.elsBox.passenger_box.empty(),this.setTitle("携程旅行网手机触屏版-机票详情"),!l||!l.Auth)return void this.jump("/webapp/myctrip/#account/login?from="+encodeURIComponent(this.getRoot()+"#orderlist"));var a=i.get();return a&&a.Id?(h.getHead().setAttr("auth",l.Auth),h.setParam("id",a.Id),this.turning(),void this.getOrderInfoData()):void this.backAction()},events:{"click #js_return":"backAction","click .jsbtnfx":"rebateAction"},appendList:function(a){a.cDate=n.Date;var b=this.boxtplfun(a);this.elsBox.orderinfo_box.append(b),this.elsBox.flightdetail_box.append(this.flightdetailtplfun(a)),this.elsBox.passenger_box.append(this.passengertplfun(a))},getOrderInfoData:function(){h.excute(function(a){this.hideLoading();var b=this;return a?(i.setAttr("Id",a.id),void j.excute(function(c){c&&(a.aircraft=c),b.appendList(a)})):void this.showHeadWarning("订单详情","啊哦,数据加载出错了，请稍候再试!",function(){b.backAction(),this.hide()})},function(a){var b=this,c=a.msg?a.msg:"啊哦,数据加载出错了，请稍候再试";this.showHeadWarning("订单详情",c,function(){b.backAction(),this.hide()}),this.hideLoading()},!0,this)},backAction:function(){g.setParam("pageIdx",1),i&&i.remove(),m.get()?this.forward("#orderlist"):this.back()},rebateAction:function(a){var c=$(a.currentTarget),d=c.attr("data-rebate"),e=c.attr("data-code");if(d&&+d>0&&e&&e.trim().length>0){var f=e.split("|")[0];this.fxAlert=new b.ui.Alert({title:"返现提示",message:"1.在微信中查找“携程旅行网”加关注</br>2.在聊天输入框中输入验证码“"+f+"”后发送",buttons:[{text:"下载微信",click:function(){var a=window.navigator.userAgent;if(a){a=a.toLowerCase();var b="http://weixin.qq.com/m",c="https://itunes.apple.com/cn/app/id414478124?mt=8&ls=1";a.indexOf("android")>-1?window.location=b:a.indexOf("iphone")>-1?window.location=c:this.hide()}else this.hide()}},{text:"确定",click:function(){this.hide()}}]}),this.fxAlert.show()}}});return o});