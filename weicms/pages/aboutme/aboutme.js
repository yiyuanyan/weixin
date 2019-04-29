//aboutme.js
//获取应用实例
var app =  getApp();
Page({
    data: {
        motto: "Hello World, weiCms",
        userInfo:{}
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
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            })
        })
    }
})
