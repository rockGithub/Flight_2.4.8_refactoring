define(["libs","c","CommonStore","CPageModel","CPageStore","cBasePageView",buildViewTemplatesPath("addpostprovince.html")],function(a,b,c,d,e,f,g){var h=c.UserStore.getInstance(),i=e.PostCityStore.getInstance(),j=d.PostCityModel.getInstance(),k=e.SelectAddrStore.getInstance(),l=f.extend({render:function(){this.$el.html(g),this.els={addr_list:this.$el.find("#p_add_wrap"),addr_list_tpl:this.$el.find("#p_add_tpl")},this.elHTML=_.template(this.els.addr_list_tpl.html())},updatePage:function(a){var b=this,c=i.get();c?a.call(this):(this.showLoading(),j.excute(function(c){i.set(c),a.call(b)},function(){this.showMessage("网络连接失败,请稍候重试"),this.hideLoading()},!0,this))},forwardAction:function(a){var b=$(a.currentTarget).find(".city-group-title"),c=k.getAttr("prvnId",this.uid),d=b.attr("data-prvnid"),e=b.attr("data-prvnname");0!=c&&c!=d&&(k.rollback(["prvnId","prvnName","prvn","ctyId","ctyName","cty","dstrId","dstrName","dstr"]),k.setAttr("ctyId","",this.uid),k.setAttr("ctyName","",this.uid),k.setAttr("cty","",this.uid),k.setAttr("dstrId","",this.uid),k.setAttr("dstrName","",this.uid),k.setAttr("dstr","",this.uid)),k.setAttr("prvnId",d,this.uid),k.setAttr("prvnName",e,this.uid),k.setAttr("prvn",e,this.uid),this.forward("addpostcity")},onBack:function(){this.data={};k.getAttr("from",this.uid);k.setAttr("from","",this.uid),k.rollback(["prvnId","prvnName","prvn","ctyId","ctyName","cty","dstrId","dstrName","dstr"]),this.back("bookinginfo")},loadUser:function(){if(!this.uid)if(h.isLogin()){var a=h.getUser();this.uid=a.UserID}else this.uid=b.utility.getGuid()},events:{"click li.cityli":"forwardAction","click #js_province_return":"onBack"},onCreate:function(){this.render()},onLoad:function(){this.loadUser(),this.updatePage(function(){var a=i.get(),b={cityData:a,curPrvnName:k.getAttr("prvnName",this.uid)||0};this.hideLoading(),this.els.addr_list.html(this.elHTML(b)),this.changePvnFlag=!1,this.turning()})},onShow:function(){},onHide:function(){this.hideLoading()}});return l});