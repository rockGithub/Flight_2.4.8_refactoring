define(["libs","c","CommonStore","FlightStore","FlightModel",buildViewTemplatesPath("flightdetail.html")],function(a,b,c,d,e,f){var g=d.FlightSelectedInfo.getInstance(),h=e.FlightDetailModel.getInstance(),i=d.FlightDetailsStore.getInstance(),j=d.FlightSearchStore.getInstance(),k=d.FlightSelectedInfo.getInstance(),l=c.UserStore.getInstance(),m=b.base,n=b.view.extend({tpl:f,pageid:"212005",events:{"click #js_return":"backAction"},render:function(){this.showLoading(),this.$el.html(this.tpl),this.elsBox={infobox_tpl:this.$el.find("#flightdetailtpl"),infobox_box:this.$el.find("#flightInfo")},this.infoboxtplfun=_.template(this.elsBox.infobox_tpl.html())},onCreate:function(){var a=j?j.get():null;if(!a)return void this.forward("index",!0);var b=g?g.get():null;return b?void this.render():void this.forward("#bookinginfo")},onShow:function(){this.setTitle("携程旅行网手机触屏版-航班详情")},onLoad:function(){var a=g?g.get():null,b=j?j.get():null;if(!b)return void this.forward("index",!0);if(!a)return void this.forward("#bookinginfo");userInfo=l?l.getUser():null,this.render(),this.elsBox.infobox_box.empty();var c=[],d={aCtyCode:b.items[0].aCtyCode,"class":a.depart.cabin.class,dCtyCode:b.items[0].dCtyCode,dDate:a.depart.flight.dTime,flightNo:a.depart.flight.flightNo,price:a.depart.cabin.price,productType:a.depart.cabin.productType,subclass:a.depart.cabin.subClass};c.push(d);var e=1;if(a.arrive&&a.arrive.cabin&&b.tripType&&+b.tripType>1){e=2;var f={aCtyCode:b.items[0].dCtyCode,"class":a.arrive.cabin.class,dCtyCode:b.items[0].aCtyCode,dDate:a.arrive.flight.dTime,flightNo:a.arrive.flight.flightNo,price:a.arrive.cabin.price,productType:a.arrive.cabin.productType,subclass:a.arrive.cabin.subClass};c.push(f)}h.setParam("items",c),h.setParam("ticketIssueCty",b.ticketIssueCty),h.setParam("tripType",e),h.getHead().setAttr("auth",""),userInfo&&(userInfo.VipGrade&&h.setParam("ugrade",userInfo.VipGrade),userInfo.Auth&&h.getHead().setAttr("auth",userInfo.Auth)),h.setParam("ver",0),this.updatePage(function(){this.hideLoading()}),this.turning()},updatePage:function(a){this.getFlightDetail(),a.call(this)},backAction:function(){this.forward("#bookinginfo")},getFlightDetail:function(){h.excute(function(a){return this.hideLoading(),a?void this.appendList(a):void this.showMessage("抱歉，数据加载失败，请重试!")},function(a){var b=a.msg?a.msg:"啊哦,数据加载出错了!",c=this;this.showHeadWarning("航班详情",b,function(){c.backAction()}),this.hideLoading()},!1,this)},appendList:function(a){var b=i.get();a.cDate=m.Date,a.flightSearch=j.get().items[0];var c=k.get();a.selectedFlight=c,b=a;var d=this.infoboxtplfun(a);this.elsBox.infobox_box.html(d),this.hideLoading()}});return n});