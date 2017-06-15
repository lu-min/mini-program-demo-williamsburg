var windowHeight = 0  //height of the display area of the mini program (px)
var windowWidth = 0   //width of the display area of the mini program (px)
var mapdata = require('../../data/mapdata.js')  //import the map data

//array of the controls of the map module
//controls will be displayed on top of the map module
//with fix positions
var controls = [{
  //this control will center the user's current location
  id: 1,  //id of the control,
  iconPath: '/resources/location.png',  //icon for the control
  position: {                           //left-top coordinate and size of the icon (px)
    left: 0,
    top: 0,
    width: 40,
    height: 40
  },
  clickable: true   //is the control clickable
}]

var trajectories = []   //array of trajectories for displaying polylines in the map module
var trajectoryRecordEnabled = false //flag of enable/disable trajectory recording
var timer   //for the loop of recording locations

//function to record the current location every ten seconds
function recordEveryTenSeconds(that) {
  //return if the trajectory recording is disabled
  if (!trajectoryRecordEnabled) {
    return;
  }

  //callback the recordLocation function defined in Page
  that.recordLocation();

  //callback this function every 10s (10000ms) until disabled
  timer = setTimeout(function () {
    recordEveryTenSeconds(that);
  }, 10000)
}

//register the page
Page({
  //initialize page data
  data: {
    mapHeight: 600,   //height of the map module (px)
    mapWidth: 375,    //width of the map module (px)
    bottomHeight: 64, //height of the bottom part (px)
    bottomWidth: 375, //width of the bottom part (px)
    markers: mapdata.points,  //markers (POIs) on the map (array)
    controls: controls,       //controls displayed on the map (array)
    polyline: trajectories    //polylines on the map (array)
  },

  //handles the events of tapping the map controls, "e" is the parameters of the event
  controltap: function (e) {
    //get which control is clicked by its id
    if (e.controlId == 1) { //this control should center the user's current location

      //get the map context through the map module's id defined in wxml
      //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html#wxcreatemapcontextmapid"
      var mapContext = wx.createMapContext("map")

      //callback the function to center current location
      mapContext.moveToLocation()
    }
  },

  //handles the events of tapping the POI popout, "e" is the parameters of the event
  calloutTap: function (e) {
    //navigate to page "poi" with parameter "id" (id of the marker is obtained from the event)
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject"
    wx.navigateTo({
      url: '../poi/poi?id=' + e.markerId,
    })
  },

  //lifecycle function - monitor the event of page loading
  onLoad: function () {
    //get the size of the display area from the system information
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync"
    var sysinfo = wx.getSystemInfoSync()
    windowHeight = sysinfo.windowHeight
    windowWidth = sysinfo.windowWidth

    //define the size of the map module
    var mapWidth = windowWidth
    var mapHeight = windowHeight * 0.9

    //define the sizes and positions of the map controls
    controls[0].position = {
      left: mapWidth - 60,
      top: mapHeight - 60,
      width: 48,
      height: 48
    }

    //get stored data of trajectories from the local storage
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstoragesynckey"
    trajectories = wx.getStorageSync('trajectories')

    //if the trajectories is not defined, initialize it
    if (!trajectories) {
      trajectories = []
    }

    //update the data bound to the page, the page components will be refreshed with new sizes and positions
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight,
      bottomWidth: mapWidth,
      bottomHeight: windowHeight - mapHeight,
      controls: controls,
      polyline: trajectories
    })
  },

  //function that handles the event of tapping the "Clear" button
  clearTap: function (event) {
    var that = this

    //call a WeChat API to show a popup view for the user to confirm the removal of trajectory data
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject"
    wx.showModal({
      title: 'Clear All trajectories',    //title of the view
      content: 'Do you really want to remove all the recorded trajectories?', //message on the view
      showCancel: true,     //the view will include a cancel button
      cancelText: 'NO',     //text of the cancel button (less than 4 characters)
      confirmText: 'YES',   //text of the confirm button (less than 4 characters)

      //callback succeeded
      success: function(res) {
        //get the result of the user's action
        //res.confirm = true means the user tapped the confirm button
        //res.cancel = true means the user tapped the cancel button
        if (res.confirm) {
          //if the user confirms the removal of all trajectory data
          //initialize the array "trajectories"
          trajectories = []

          //reset the local storage with the empty array "trajectories"
          //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstorageobject"
          wx.setStorage({
            key: 'trajectories',
            data: trajectories,
          })

          //update the page data "polyline", refresh the display on the map
          that.setData({
            polyline:trajectories
          })
        }
      },

      //callback failed
      fail: function(res) {},
      //callback completed
      complete: function(res) {},
    })
  },

  //function that handles the event of changing the switch 
  //turning on/off trajectory recording
  switchChange: function (event) {
    //get the current status of the switch from "event.detail.value" (true/false)
    trajectoryRecordEnabled = event.detail.value
    
    //if the trajectory recording is enabled
    if (trajectoryRecordEnabled) {
      //initialize a new trajectory (empty)
      var trajectory = {
        points: [],           //coordinates of the recorded locations in {longitude, latitude}
        color: "#115740DD",   //the official color of William & Mary
        width: 3,             //line width
        dottedLine: true      //dotted line (true) or solid line (false)
      }

      //add the trajectory to the array "trajectories"
      trajectories.push(trajectory)

      //start recording the current location every ten seconds
      recordEveryTenSeconds(this)
    } else {
      //if the trajectory recording is disabled, stop the loop
      clearTimeout(timer)
    }    
  },

  //get current location using API, display on the map and record in the local storage
  recordLocation: function () {
    var that = this

    //callback the WeChat API to get current location
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject"
    wx.getLocation({
      success: function(res) {
        //get coordinates from the result "res"
        var point = {
          latitude: res.latitude,
          longitude: res.longitude,
        }

        //add the point to the last trajectory in the array "trajectories" 
        var lastIdx = trajectories.length - 1
        trajectories[lastIdx].points.push(point)

        //update the page data to refresh the map
        that.setData({
          polyline:trajectories
        })
        
        //update the local storage
        wx.setStorage({
          key: 'trajectories',
          data: trajectories,
        })
      },
    })
  }
})
