define(["libs","c",buildViewTemplatesPath("liping.html")],function(a,b,c){var d=b.view.extend({pageid:"",hasAd:!0,tpl:c,render:function(){this.viewdata.req=this.request,this.$el.html(this.tpl)},events:{"click #js_return":"backAction"},onCreate:function(){this.render()},onLoad:function(){this.turning()},onShow:function(){this.hideLoading()},onHide:function(){this.hideLoading()},backAction:function(){this.back()}});return d});