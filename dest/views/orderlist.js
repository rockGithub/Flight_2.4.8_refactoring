define(["libs","c","CommonStore","FlightStore","FlightModel",buildViewTemplatesPath("orderlist.html")],function(a,b,c,d,e,f){var g=e.FlightOrderListModel.getInstance(),h=d.FlightOrderListStore.getInstance(),i=d.FlightOrderDetailStore.getInstance(),j=d.FlightOrderParamStore.getInstance(),k=c.UserStore.getInstance(),l=d.OrderDetailReturnPage.getInstance(),m=b.base,n=b.view.extend({tpl:f,pageid:"212054",_onWidnowScroll:null,totalPages:null,isComplete:!1,isLoading:!1,pageSize:25,render:function(){this.$el.html(this.tpl),this.elsBox={lstboxtpl_tpl:this.$el.find("#listboxtpl"),lstbox:this.$el.find("#lstbox"),noorder_tpl:this.$el.find("#emptylisttpl")},this.lstboxtplfun=_.template(this.elsBox.lstboxtpl_tpl.html())},events:{"click #js_return":"backAction","click .jsdetail":"detailAction"},onShow:function(){this.setTitle("携程旅行网手机触屏版-机票订单")},onCreate:function(){userInfo=k?k.getUser():null,userInfo&&userInfo.Auth?(this._onWidnowScroll=$.proxy(this.onWindowsScroll,this),this.render()):(h&&h.remove(),i&&i.remove(),j.remove(),this.jump("/webapp/myctrip/#account/login?from="+encodeURIComponent(this.getRoot()+"#orderlist")))},onLoad:function(){return userInfo=k?k.getUser():null,this.elsBox.lstbox.empty(),userInfo&&userInfo.Auth?(g.getHead().setAttr("auth",userInfo.Auth),g.setParam("status",0),g.setParam("pageIdx",1),this.turning(),void this.getOrderListData()):(h&&h.remove(),i&&i.remove(),j.remove(),void this.jump("/webapp/myctrip/#account/login?from="+encodeURIComponent(this.getRoot()+"#orderlist")))},onHide:function(){$(window).unbind("scroll",this._onWidnowScroll),g&&g.setParam("pageIdx",1)},onWindowsScroll:function(){var a=b.ui.Tools.getPageScrollPos(),c=g.getParam(),d=isNaN(c.pageIdx)?0:c.pageIdx;if(c.pageIdx<this.totalPages&&this.totalPages>1&&(this.isComplete=!1),this.totalPages&&a.pageHeight-(a.top+a.height)<500&&!this.isComplete&&!this.isLoading){if(this.isLoading=!0,c.pageIdx>this.totalPages)return this.showToast("没有您更多的订单了",3),void(this.isComplete=!0);g.setParam({pageIdx:++d}),this.getOrderListData()}},appendList:function(a){for(var b,c=0;c<a.orders.length;c++)a.orders[c].cDate=m.Date,b=this.lstboxtplfun(a.orders[c]),this.elsBox.lstbox.append(b);this.hideLoading(),$(".tips_tel").show()},getOrderListData:function(){this.showLoading(),g.excute(function(a){if(this.isLoading=!1,this.hideLoading(),!a){var b=this;return this.showHeadWarning("订单列表","啊哦,数据加载出错了!",function(){b.backAction(),this.hide()}),void $(window).unbind("scroll",this._onWidnowScroll)}if(!a.orders||!a.orders.length){var c=_.template(this.elsBox.noorder_tpl.html());return this.elsBox.lstbox.html(c),void $(window).unbind("scroll",this._onWidnowScroll)}this.totalPages=Math.ceil(a.count/this.pageSize),this.totalPages>1&&$(window).bind("scroll",this._onWidnowScroll),this.appendList(a)},function(a){this.hideLoading(),this.isLoading=!1;var b=this,c=a.msg?a.msg:"啊哦,数据加载出错了!";this.showHeadWarning("订单列表",c,function(){b.backAction(1),this.hide()}),$(window).unbind("scroll",this._onWidnowScroll)},!0,this)},backAction:function(){h&&h.remove(),i&&i.remove(),j.remove(),this.showLoading(),window.location.href="/webapp/myctrip/"},detailAction:function(a){userInfo=k?k.getUser():null;var b=$(a.currentTarget).attr("data-id");if(b&&userInfo&&userInfo.Auth){this.showLoading();var c={Id:b};j.set(c);var d={Id:1};l.set(d),this.forward("orderdetail")}}});return n});