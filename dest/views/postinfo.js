define(["libs","c","CommonStore","FlightModel","FlightStore","CPageModel","CPageStore",buildViewTemplatesPath("postinfo.html")],function(a,b,c,d,e,f,g,h){var i=2,j=b.view.extend({tpl:h,pageid:"214033",uid:"",userStore:c.UserStore.getInstance(),addrStore:g.CustomerAddrStore.getInstance(),addressStore:g.AddressStore.getInstance(),flightPickTicketSelectStore:e.FlightPickTicketSelectStore.getInstance(),render:function(){this.viewdata.req=this.request,this.$el.html(this.tpl),this.els={post_info:this.$el.find(".cont_pd_wrap"),post_info_tpl:this.$el.find("#post_info_tpl")},this.elHTML=_.template(this.els.post_info_tpl.html())},events:{"click #confirm":"confirmInfo","click #js_return":"backAction","click .js_arr_r":"getAddrList"},onCreate:function(){if(!this.uid)if(this.userStore.isLogin()){var a=this.userStore.getUser();this.uid=a.UserID}else this.uid=b.utility.getGuid();this.render()},onLoad:function(){var a=this.addrStore.get(this.uid);a.clazz=0==a.inforId?"m_colorb":"",this.els.post_info.html(this.elHTML(a)),this.turning()},onShow:function(){this.setTitle("邮寄报销凭证")},onHide:function(){},confirmInfo:function(){var a=this.addrStore.get(this.uid);return 0==a.inforId?void this.showMessage("请填写收件人信息"):a.prvnName&&a.ctyName&&a.dstrName&&a.zip?(this.flightPickTicketSelectStore.setAttr("type",i),void this.back("#bookinginfo")):void this.showMessage("请完善收件人信息")},getAddrList:function(){this.showLoading(),this.addressStore.setCurrent(this.uid,{success:"/webapp/flight/#postinfo",defeated:"/webapp/flight/#postinfo"},"CustomerAddrStore:setAddr","CustomerAddrStore:get"),this.jump("/webapp/cpage/index.html#addresslist")},backAction:function(){this.back("#zqinpickticketselect")}});return j});