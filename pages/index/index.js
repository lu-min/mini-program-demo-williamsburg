//index.js

//get the instance of the app
var app = getApp()

//register the page
Page({
  //page data initialization
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  //function handling the event of tapping the avatar
  bindViewTap: function() {
    //navigate to page "logs"
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject"
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //function handling the event of tapping the button
  bindMapButtonTap: function() {
    //navigate to page "map"
    wx.navigateTo({
      url: '../map/map'
    })
  },

  //function handling the event of loading the page
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //callback the fucntion of the app instance to get global data
    app.getUserInfo(function(userInfo){
      //update the page data
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
