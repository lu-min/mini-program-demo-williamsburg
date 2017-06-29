# mini-program-demo-williamsburg-step-by-step

## 1. Create a quick start project

See [2. Create/open a project](/translation.md/#2-createopen-a-project) in [translation.md](/translation.md).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_newfolder.jpg)

The quick start project contains two initial pages `index` and `log`.  
In the page `index`, you can see the developer's WeChat avatar and "Hello World". Clicking the avator will navigate to the page `log`, which contains a list of launching time.

## 2. Add a button

Modify `index.wxml`, change the `<text>` module of "Hello World" to a button with a title "Show Map" in the page `index`.

   Comment out or delete the following line
```xml
<text class="user-motto">{{motto}}</text>
```

   Add a `<button>` module with a title `Show Map`.
   
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
   
## 4. Add a map module to the page *map*
1. Add a module `<map>` in `map.js` with its initial location in Williamsburg VA `longitude="-76.7086887360" latitude="37.2765457035"`. The setting `show-location="true"` enables the display of the current location.
```xml
<view style="height: {{mapHeight}}px; width: {{mapWidth}}px">
  <map id="map" longitude="-76.7086887360" latitude="37.2765457035" scale="15" show-location="true" style="height: 100%; width: 100%"></map>
</view>
```
2. The view containing the `<map>` module has the style set as `"height: {{mapHeight}}px; width: {{mapWidth}}px"`, in which `mapHeight` and `mapWdith` are bound to the page data defined in `map.js`.
```js
Page({
  //initialize page data
  data: {
    mapHeight: 600,   //height of the map module (px)
    mapWidth: 375,    //width of the map module (px)
    ...
  },
  ...
  ...
}
```
3. As the initial map size is fixed, which cannot fit different devices, proper size should be calculated according to the system information when loading the page. Use WeChat API `wx.getSystemInfoSync` to get the size of display area, calculate and set page data `mapHeight` and `mapWidth` in the lifecycle function `onLoad`. See [wx.getSystemInfoSync](https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfosync) in the official documentation for more details.
```js
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

    //define the size of the map module
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
4. The map may not be displayed in the simulator, but will be displayed correctly in the preview on WeChat. See [How to test the demo in a smartphone](/README.md/#how-to-test-the-demo-in-a-smartphone) and [Why the map is not correctly displayed in the simulator](/README.md/#why-the-map-is-not-correctly-displayed-in-the-simulator) in README.md.

## 5. Add a control to the map for centering the current location
1. Add a member `controls` to `<map>` in `map.wxml` and bind to page data `{{controls}}`
2. Define the data of `controls` as the follows, at the beginning part of `map.js`
3. Add the definition of `controls` in page data of `map.js`.

## 6. Add map data and image resouces of icons to the project
1. Directly copy the folders `data` and `resources` of the repository into the root folder of this project on your hard disk.
2. Import the data of POIs from `data/mapdata.js` to `map.js` as follows.
3. 

## 7. Add POIs to the map

1. Add a member `points={{points}}` to `<map>` in `map.wxml`
2. Define the page data `points`

## 8. Add an event handler for showing the page *poi* when tapping the callout of a POI on the map
1. Add an event handler `calloutTap=` in `<map>` of `map.wxml`.
2. Define the funtion `f` inside `Page({})` of `map.js` as follows.
3. The `url` is set to a new page `poi` to be created, and a parameter `id` is sent to the page.

## 9. Add a new page to show information of a POI

1. Right click the folder `page` in the **File Tree**, select **新建(New)** -> **Page**, enter the page's name as `poi`
2. In `poi.wxml` add a `<text>` for the title of the POI and a `<image>` for its image.
3. In `poi.js`, get the id of the POI in the function `onLoad` by the parameter `option.`

## 10. Add a switch for turning on/off trajectory recording in the page *map*
1. Add a module `<switch>` in

## 11. Add functions to record the current location every ten seconds

## 12. Add polylines to the map to display the trajectoies

## 13. Add a button and the function to clear all trajectories.

## 14. Store, retieve and remove the trajectory data in local storage
