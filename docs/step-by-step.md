# mini-program-demo-williamsburg-step-by-step

* [1. Create a quick start project](#1-create-a-quick-start-project)
* [2. Add a button](#2-add-a-button)
* [3. Add a new page to show a map](#3-add-a-new-page-to-show-a-map)
* [4. Add an event of tapping the button, and navigate to the page *map*](#4-add-an-event-of-tapping-the-button-and-navigate-to-the-page-map)
* [5. Add a map component to the page *map*](#5-add-a-map-component-to-the-page-map)
* [6. Add image resouces of icons to the project](#6-add-image-resouces-of-icons-to-the-project)
* [7. Add a control to the map for centering the current location](#7-add-a-control-to-the-map-for-centering-the-current-location)
* [8. Add map data to the project](#8-add-map-data-to-the-project)
* [9. Add POIs to the map](#9-add-pois-to-the-map)
* [10. Add an event handler for showing the page *poi* when tapping the callout of a POI on the map](#10-add-an-event-handler-for-showing-the-page-poi-when-tapping-the-callout-of-a-poi-on-the-map)
* [11. Add a new page to show information of a POI](#11-add-a-new-page-to-show-information-of-a-poi)
* [12. Add a switch for turning on/off trajectory recording in the page *map* with a text label](#12-add-a-switch-for-turning-onoff-trajectory-recording-in-the-page-map-with-a-text-label)
* [13. Add functions to record the current location every ten seconds](#13-add-functions-to-record-the-current-location-every-ten-seconds)
* [14. Add polylines to the map to display the trajectoies](#14-add-polylines-to-the-map-to-display-the-trajectoies)
* [15. Add a button and the function to clear all trajectories](#15-add-a-button-and-the-function-to-clear-all-trajectories)
* [16. Store, retieve and remove the trajectory data in local storage](#16-store-retieve-and-remove-the-trajectory-data-in-local-storage)

## 1. Create a quick start project

See [2. Create/open a project](/docs/translation.md/#2-createopen-a-project) in [translation.md](/docs/translation.md).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_newfolder.jpg)

The quick start project contains two initial pages `index` and `log`.  
In the page `index`, you can see the developer's WeChat avatar and "Hello World". Clicking the avator will navigate to the page `log`, which contains a list of launching time.

## 2. Add a button

Modify `index.wxml`, change the `<text>` component of "Hello World" to a button with a title "Show Map" in the page `index`.

   Comment out or delete the following line
```xml
<text class="user-motto">{{motto}}</text>
```

   Add a `<button>` component with a title `Show Map`.
   
   ```xml
   <button type="primary">Show Map</button>
   ```
   Here `type="primary"` defines the appearance of the button. See [button](http??) in the offcial documentation for more details.
   
## 3. Add a new page to show a map

Right click the folder `page` in the **File Tree**, select **新建(New)** -> **Page**, enter the page's name as `map`, and then it will automatically create a new folder named `map` under the folder `page`, and add for files `map.js map.json map.wxml map.wxss` in the folder.  
It will also modify `app.json` automatically to register the new page.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_contextmenu_folder_page.jpg)

## 4. Add an event of tapping the button, and navigate to the page *map*

1. Add the event handler of tapping the button as `bindtap="bindMapButtonTap"` in the "Show Map" button of `index.wxml`.
```xml
<button type="primary" bindtap="bindMapButtonTap">Show Map</button>
```
2. Add the declaration of the function `bindMapButtonTap` insided `Page({})` of `map.js`.
```js
Page({
  ...
  //function handling the event of tapping the button
  bindMapButtonTap: function() {
    //navigate to page "map"
    wx.navigateTo({
      url: '../map/map'
    })
  },
  ...
})
```
Here `wx.navigateTo` is a WeChat API for navigating to a page of the given parameter `url`. which should be the path of a page in this project. See [wx.navigateTo]() the official documentation.
   
## 5. Add a map component to the page *map*
1. Add a component `<map>` in `map.js` with its initial location in Williamsburg VA `longitude="-76.7086887360" latitude="37.2765457035"`. The setting `show-location="true"` enables the display of the current location.
```xml
<view style="height: {{mapHeight}}px; width: {{mapWidth}}px">
  <map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" show-location="true" style="height: 100%; width: 100%"></map>
</view>
```
2. The view containing the `<map>` component has the style set as `"height: {{mapHeight}}px; width: {{mapWidth}}px"`, in which `mapHeight` and `mapWdith` are bound to the page data defined in `map.js`.
```js
Page({
  //initialize page data
  data: {
    mapHeight: 600,   //height of the map component (px)
    mapWidth: 375,    //width of the map component (px)
    ...
  },
  ...
  ...
}
```
3. As the initial map size is fixed, which cannot fit different devices, proper size should be calculated according to the system information when loading the page. Use WeChat API `wx.getSystemInfoSync` to get the size of display area, calculate and set page data `mapHeight` and `mapWidth` in the lifecycle function `onLoad`. See [wx.getSystemInfoSync](https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync) in the official documentation for more details.
```js
var windowHeight = 0  //height of the display area of the mini program (px)
var windowWidth = 0   //width of the display area of the mini program (px)

Page({
  ...
  ...
    //lifecycle function - monitor the event of page loading
    onLoad: function () {
    //get the size of the display area from the system information
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync"
    var sysinfo = wx.getSystemInfoSync()
    windowHeight = sysinfo.windowHeight
    windowWidth = sysinfo.windowWidth

    //define the size of the map component
    var mapWidth = windowWidth
    var mapHeight = windowHeight * 0.9

    ...
    
    //update the data bound to the page, the page components will be refreshed with new sizes and positions
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight,
      ...
    })
  },
  ...
  ...
})
```
4. The map may not be displayed in the simulator, but will be displayed correctly in the preview on WeChat. See [How to test the demo in a smartphone](/README.md/#how-to-test-the-demo-in-a-smartphone) and [Why the map is not correctly displayed in the simulator](/README.md/#why-the-map-is-not-correctly-displayed-in-the-simulator) in [README.md](/README.md).

## 6. Add image resouces of icons to the project
Directly copy the folder `resources` of the repository into the root folder of this project on your hard disk.

## 7. Add a control to the map for centering the current location
1. Add an attribute  `controls` to `<map>` in `map.wxml` and bind to page data `{{controls}}`. Bind the event handler of tapping the controls as `bindcontroltap="controltap"`.
```xml
<view class="map-container" style="height: {{mapHeight}}px; width: {{mapWidth}}px">
  <map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" controls="{{controls}}" bindcontroltap="controltap" show-location="true" style="height: 100%; width: 100%"></map>
</view>
```
2. Define the data of `controls` as the follows, at the beginning part of `map.js`.
```js
//array of the controls of the map component
//controls will be displayed on top of the map component
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
```
3. Add the definition of `controls` in page data of `map.js`, and calculate its position with the size of `<map>`.
```js
Page({
  //initialize page data
  data: {
    mapHeight: 600,   //height of the map component (px)
    mapWidth: 375,    //width of the map component (px)
    ...
    controls: controls,       //controls displayed on the map (array)
    ...
  },
  onLoad: function () {
    //get the size of the display area from the system information
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync"
    var sysinfo = wx.getSystemInfoSync()
    windowHeight = sysinfo.windowHeight
    windowWidth = sysinfo.windowWidth

    //define the size of the map component
    var mapWidth = windowWidth
    var mapHeight = windowHeight * 0.9

    //define the sizes and positions of the map controls
    controls[0].position = {
      left: mapWidth - 60,
      top: mapHeight - 60,
      width: 48,
      height: 48
    }
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight,
      controls: controls,
      ...
    })
  },
...
})
```
4. Add the function `controltap` in `map.js`. Center the current location if the `id` of tapped control is `1`. Use the WeChat API [wx.createMapContext](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html#wxcreatemapcontextmapid) to move the map to the current location.
```js
Page({
   ...
   
  //handles the events of tapping the map controls, "e" is the parameters of the event
  controltap: function (e) {
    //get which control is clicked by its id
    if (e.controlId == 1) { //this control should center the user's current location

      //get the map context through the map component's id defined in wxml
      //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-map.html#wxcreatemapcontextmapid"
      var mapContext = wx.createMapContext("map")

      //callback the function to center current location
      mapContext.moveToLocation()
    }
  },
  
  ...
})
```

## 8. Add map data to the project
1. Directly copy the folder `data` of the repository into the root folder of this project on your hard disk.
2. Import the data of POIs from `data/mapdata.js` to `map.js` as follows. Then, the data of the POIs can be referred as `mapdata.points.`
```js
var mapdata = require('../../data/mapdata.js')  //import the map data
```

## 9. Add POIs to the map

1. Add an attribute `markers={{points}}` to `<map>` in `map.wxml`.
```xml
<map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" show-location="true" style="height: 100%; width: 100%"></map>
```
2. Define the page data `markers: mapdata.points` in `map.js`.
```js
Page({
  //initialize page data
  data: {
    ...
    controls: controls,       //controls displayed on the map (array)
    markers: mapdata.points,  //markers (POIs) on the map (array)
    ...
  },
...
})
```

## 10. Add an event handler for showing the page *poi* when tapping the callout of a POI on the map
1. Add an event handler `bindcallouttap="calloutTap"` in `<map>` of `map.wxml`.
```xml
<map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" bindcallouttap="calloutTap" show-location="true" style="height: 100%; width: 100%"></map>
```
2. Define the funtion `calloutTap` inside `Page({})` of `map.js` as follows to show a page of the tapped POI.
```js
Page({
...
  calloutTap: function (e) {
    //navigate to page "poi" with parameter "id" (id of the marker is obtained from the event)
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject"
    wx.navigateTo({
      url: '../poi/poi?id=' + e.markerId,
    })
  },
...
})
```
3. The `url` is set to a new page `poi` to be created, and a parameter `id` is sent to the page.

## 11. Add a new page to show information of a POI

1. Right click the folder `page` in the **File Tree**, select **新建(New)** -> **Page**, enter the page's name as `poi`
2. In `poi.wxml` add a `<text>` for the title of the POI and a `<image>` for its image.
```xml
<view class="poi-container">
  <text>{{title}}</text>
  <image mode="aspectFit" style="padding-top: 60px; width:100%;" src="{{imageUrl}}"></image>
</view>
```
3. Define the style of `poi-container` as follows in `poi.wxss`.
```css
.poi-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} 
```
4. In `poi.js`, define the page data `title` and `imageUrl`, get the `id` of the POI passed from the page `map` in the function `onLoad` by the parameter `option.id`. Get the title and imageUrl defined in `mapdata.js` and update the page data.
```js
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
})
```

## 12. Add a switch for turning on/off trajectory recording in the page *map* with a text label
1. Add a component `<switch>` and a `<text>` in a container view, which captures the rest 10% of the page `map.wxml` at the bottom.
```
<view class="bottom-container" style="height: {{bottomHeight}}px; width: {{bottomWidth}}px">
  <view class="switch-container" style="height: 100%; width: 60%; float: left">
    <text style="float:left; padding-top:15px; padding-left: 10%">Trajectory</text>
    <switch bindchange="switchChange" type="switch" style="float: right; padding:8px" />
  </view>
</view>
```
The `{{bottomHeight}}` and `{{bottomWidth}}` are defined in the page data, and calculated with the size of the `<map>` in `map.js`.
```js
  onLoad: function () {
    ...
    this.setData({
      mapWidth: mapWidth,
      mapHeight: mapHeight,
      bottomWidth: mapWidth,
      bottomHeight: windowHeight - mapHeight,
      ...
    })
    ...
  },
...
})
```
2. The event handler `bindChange="switchChange"` is added to the `switch`. Define the function `switchChange` in the page as follows in `map.js`. It will change a boolean value `trajectoryRecordEnabled` according to the status of the switch
```js
var trajectoryRecordEnabled = false //flag of enable/disable trajectory recording

Page({
  ...
  switchChange: function (event) {
    //get the current status of the switch from "event.detail.value" (true/false)
    trajectoryRecordEnabled = event.detail.value
  },
...
})
```
See [switch](https://mp.weixin.qq.com/debug/wxadoc/dev/component/switch.html) in the official documentation for more details.

## 13. Add functions to record the current location every ten seconds
1. Add a function `recordLocation` in the page of `map.js`. It will callback the WeChat API `wx.getLocation` to get the current location.
```js
Page({
  ...
  recordLocation: function () {

    //callback the WeChat API to get current location
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject"
    wx.getLocation({
      success: function(res) {
        //get coordinates from the result "res"
        var point = {
          latitude: res.latitude,
          longitude: res.longitude,
        }
      },
    })
  }
})
```
See [wx.getLocation](https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject) in the official documentation for more details.

2. Add a function (out of the `Page({})`) to loop to call itself every 10 seconds, by using `setTimeout`.
```js
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
```

3. Call the function `recordEveryTenSeconds` in `switchChange` when the switch is turned on, and stop the loop when it is turned off.
```js
  //function that handles the event of changing the switch 
  //turning on/off trajectory recording
  switchChange: function (event) {
    //get the current status of the switch from "event.detail.value" (true/false)
    trajectoryRecordEnabled = event.detail.value
    
    //if the trajectory recording is enabled
    if (trajectoryRecordEnabled) {
      //start recording the current location every ten seconds
      recordEveryTenSeconds(this)
    } else {
      //if the trajectory recording is disabled, stop the loop
      clearTimeout(timer)
    }    
  },
```
## 14. Add polylines to the map to display the trajectoies
1. Add an attribute `polyline="{{polyline}}"` in `<map>` of `map.wxml`.
```xml
<map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" polyline="{{polyline}}"  bindcallouttap="calloutTap" show-location="true" style="height: 100%; width: 100%"></map>
```
2. Define the page data `polyline`, which should be an array containing objects of polylines (it is actually a multi-polyline).  
   Add a new polyline into the array each time the switch is turned on.  
   Add a point of the current location to the last (newest) polyline and update the page data every 10 seconds.  
   See the `polyline` part of [map](https://mp.weixin.qq.com/debug/wxadoc/dev/component/map.html) in the official documentation.
```js
var trajectories = []   //array of trajectories for displaying polylines in the map component
//register the page
Page({
  //initialize page data
  data: {
    ...
    polyline: trajectories    //polylines on the map (array)
  },
    ...
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
      },
    })
  }
})
```

## 15. Add a button and the function to clear all trajectories
1. Add a `<button>` component below the map, besides the `<switch>`, in `map.wxml`. An event handler `bindtap="clearTap"` is defined.
```xml
<view class="bottom-container" style="height: {{bottomHeight}}px; width: {{bottomWidth}}px">
  <button bindtap="clearTap" type="warn" size="mini" style="width: 30%; float: right; margin: 10px 5%">Clear</button>
  <view class="switch-container" style="height: 100%; width: 60%; float: left">
    <text style="float:left; padding-top:15px; padding-left: 10%">Trajectory</text>
    <switch bindchange="switchChange" type="switch" style="float: right; padding:8px" />
  </view>
</view>
```
2. Realize the function `clearTap`. When the user tapped "Clear", at first an alert will be shown using the WeChat API [wx.showModal](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject). After the user's confirmation, the `trajectories` will be set to an empty array. If the recording is turned on, a polyline for starting a new trajectory will be added to the array. Finally the page data should be updated.
```js
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
          
          //if trajectory recording is enabled
          //add a new empty trajectory immediately
          if (trajectoryRecordEnabled) {
            //initialize a new trajectory (empty)
            var trajectory = {
              points: [],           //coordinates of the recorded locations in {longitude, latitude}
              color: "#115740DD",   //the official color of William & Mary
              width: 3,             //line width
              dottedLine: true      //dotted line (true) or solid line (false)
            }
            trajectories.push(trajectory)
          }
          
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
```

## 16. Store, retieve and remove the trajectory data in local storage
If we want to keep the trajectory data in the local storage of the mini program when it is turned off, and retrieve the data the next time it is launched, we can try the WeChat APIs like [wx.setStorage](https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstorageobject), [wx.setStorageSync](https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstoragesynckeydata), [wx.getStorage](https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageobject), [wx.getStorageSync](https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstoragesynckey), and so on.  
See https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html for more information.

1. Save the trajectories when updated in 10 seconds in `map.js`.
```js
  //get current location using API, display on the map and record in the local storage
  recordLocation: function () {
    var that = this

    //callback the WeChat API to get current location
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject"
    wx.getLocation({
      success: function(res) {
        ...
        
        //update the local storage
        wx.setStorage({
          key: 'trajectories',
          data: trajectories,
        })
      },
    })
  }
```

2. Load the saved trajectories when loading the page (`onLoad` in `map.js`).
```js
  //lifecycle function - monitor the event of page loading
  onLoad: function () {
    ...

    //get stored data of trajectories from the local storage
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstoragesynckey"
    trajectories = wx.getStorageSync('trajectories')

    //if the trajectories is not defined, initialize it
    if (!trajectories) {
      trajectories = []
    }

    //update the data bound to the page, the page components will be refreshed with new sizes and positions
    this.setData({
      ...
      polyline: trajectories
    })
  },

```

3. Update the storage when `trajectories` is cleared.
```js
  //function that handles the event of tapping the "Clear" button
  clearTap: function (event) {
    var that = this

    //call a WeChat API to show a popup view for the user to confirm the removal of trajectory data
    //see "https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject"
    wx.showModal({
      ...

      //callback succeeded
      success: function(res) {
        //get the result of the user's action
        //res.confirm = true means the user tapped the confirm button
        //res.cancel = true means the user tapped the cancel button
        if (res.confirm) {
          ...
          
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
      ...
    })
  },

```
