define(["libs","c","FlightStore",buildViewTemplatesPath("insuranceinfo.html")],function(a,b,c,d){var e=c.FlightDetailsStore.getInstance(),f=b.view.extend({pageid:214280,tpl:d,render:function(){this.viewdata.req=this.request,this.$el.html(this.tpl),this.els={insure_info:this.$el.find(".flight"),insure_info_tpl:this.$el.find("#insure_info_tpl")},this.elHTML=_.template(this.els.insure_info_tpl.html())},events:{"click #js_return":"backToOrder"},onCreate:function(){var a=e.get();return!a||!a.insurances||a.insurances.length<=0?void this.backToOrder():(this.render(),void(this.wantBuyInsure=!0))},onLoad:function(){this.hideLoading();var a=e.get();return this.els.insure_info.empty(),!a||!a.insurances||a.insurances.length<=0?void this.backToOrder():(this.render(),this.updatePage(),void this.turning())},onShow:function(){var a=e.get();return a&&a.insurances&&a.insurances.length>0?(this.render(),void this.updatePage()):void this.backToOrder()},updatePage:function(){var a=e.get();this.els.insure_info.html(this.elHTML(a.insurances[0]));var b=+a.insurances[0].price;30==b?$("#insure1").hide():$("#insure2").hide()},onHide:function(){},backToOrder:function(){this.forward("bookinginfo")}});return f});