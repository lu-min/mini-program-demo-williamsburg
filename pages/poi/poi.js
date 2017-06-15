// poi.js
var mapdata = require('../../data/mapdata.js')
var poi = {}
Page({

  /**
   * page data initialization
   */
  data: {
    title: "",
    imageUrl: ""
  },

  /**
   * lifecycle function - monitor the event of page loading
   */
  onLoad: function (options) {
    console.log(options)
    var poiId = options.id
    poi = mapdata.points[poiId]
    this.setData({
      title: poi.title,
      imageUrl: poi.imageUrl
    })
  },

  /**
   * lifecycle function - monitor the finish of the first rendering of the page
   */
  onReady: function () {
  
  },

  /**
   * lifecycle function - monitor the event when the page is shown
   */
  onShow: function () {
  
  },

  /**
   * lifecycle function - monitor the event when the page is hidden
   */
  onHide: function () {
  
  },

  /**
   * lifecycle function - monitor the event of unloading the page
   */
  onUnload: function () {
  
  },

  /**
   * handle the event of pulling down the page
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * handle the event of scrolled to the bottom of the page
   */
  onReachBottom: function () {
  
  },

  /**
   * handle the tap of right-top button
   */
  onShareAppMessage: function () {
  
  }
})