//aboutme.js
//获取应用实例
var app =  getApp();
Page({
    data: {
      img: '../../images/logo.png',
      title: "圆梦云科技有限公司",
		intro: "近日，中国航天科技集团有限公司一院、中国航天基金会与WEY品牌正式签署战略合作协议，将在今年进行海上发射的验证火箭命名为CZ-11 WEY号。这是中国第一枚海上发射火箭，也是长征系列火箭首次与企业品牌联合命名。",
		contab: "联系方式",
		address: "北京市海淀区知春路",
		mobile: "13800138000",
		email: "asdfsad@123.com"
    },
    //事件处理
    bingViewTap: function() {
        wx.navigateTo({
            url: ''
            
        });
    },
    onLoad:function() {
        console.log('onLoad')
        var that = this
        // app.getUserInfo(function(userInfo){
        //     that.setData({
        //         userInfo:userInfo
        //     })
        // })
    }
})
