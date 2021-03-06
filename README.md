# mini-program-demo-williamsburg

* [Purpose](#purpose)
* [Functions (Objectives of the coding session)](#functions-objectives-of-the-coding-session)
* [How to install the developer's tool of WeChat Mini Program](#how-to-install-the-developers-tool-of-wechat-mini-program)
  * [Download the installation file](#download-the-installation-file)
  * [Installation on macOS](#installation-on-macos)
  * [Installation on Windows](#installation-on-windows)
* [How to become a developer of Mini Program and get an AppID](#how-to-become-a-developer-of-mini-program-and-get-an-appid)
* [How to open this demo in the developer's tool](#how-to-open-this-demo-in-the-developers-tool)
* [How to test the demo in a smartphone](#how-to-test-the-demo-in-a-smartphone)
* [Why the map is not correctly displayed in the simulator](#why-the-map-is-not-correctly-displayed-in-the-simulator)
* [How to partly import the resources or code files into an existing project](#how-to-partly-import-the-resources-or-code-files-into-an-existing-project)

## Purpose
This demo is built for the coding presentation entitled "Coding for Map Applications on the Platform of WeChat Mini Programs" in the pre-conference workshop of ICC2017 in Williamsburg, VA, on June 30, 2017.

## Functions (Objectives of the coding session)
1. Display the map around Williamsburg VA.
2. Setup a map control to center the user's current location.
3. Display some POIs with different icons on the map.
4. Tap the POI to show its information and a photo. (Optional)
5. Record and show the user's moving trajectory. (Optional)

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/miniprogram-functions.jpg)


## How to install the developer's tool of WeChat Mini Program
### Download the installation file
1. Visit the [download page on their official website (in Chinese) ](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
2. Click [windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64), [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32), or [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin) to download the installation program according to your system (you can also click the links here to download them)

### Installation on macOS
1. Open the downloaded .dmg file.
2. Drag the app to the application folder.
3. Find the icon in the application folder or Launchpad.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_install.jpg)

### Installation on Windows
1. Open the downloaded .exe file. If your system language is not Chinese, you may see messy characters, but the installation can still be completed.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_install_win01.jpg)

2. Click the following button to process.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_install_win02.jpg)

3. Modify the install folder from some messy characters to English, and then click the button to install.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_install_win03.jpg)

4. Finish the installation and launch the developer's tool, or find the following icon on your desktop. ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/miniprogram-icon-win.png)

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_install_win04.jpg)


## How to become a developer of Mini Program and get an AppID

**UNFORTUNATELY**, Mini Program registration is not open to foreigners yet. However, as one Mini Program developer's account can bind multiple developers, we can still experience programming Mini Programs by binding your WeChat IDs to our prepared developer's accounts.
1. Submit your WeChat ID and Email address to us using this [Google Form](https://goo.gl/forms/ozCPPoez2gVE3qrY2). (See [How to setup a WeChat ID?](/docs/WeChat%20Q%26A.md#how-to-setup-a-wechat-id) if you do not know your id yet.)
2. We will bind your WeChat ID to a developer's account, and a request of confirmation (in Chinese) will be automatically sent to your WeChat. Please confirm the request as the following figures, and the binding will be completed.
3. We will send the AppID to your Email address after completing the binding.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/miniprogram-binding.png)

## How to open this demo in the developer's tool

1. Download or clone this demo to a local folder (extract the archive file if needed).
2. Launch the developer's tool and login by scanning the QR code using your WeChat app (your WeChat account need to be bound as a developer to a Mini Program developer's account).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_qr_success.jpg)

3. Select "Local Mini Program projects" (the upper one).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_type.jpg)

4. Click "+" to create a new project.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_new.jpg)

5. Input AppID if you have got one. If you select "No AppID", the program cannot be previewed on a mobile device (but still, there is a preview in the developer's tool).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj.jpg)
   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_new_noid.jpg)

6. Input a name of the project, and choose the demo's folder (which contains the file "app.js") as the project directory. 

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_demofolder.jpg)

7. If you want to start from an empty project, then select an empty folder, and check "create a quick start project in the folder" if needed.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_newfolder.jpg)

## How to test the demo in a smartphone

1. Choose the "Project" label, and click the "Preview" button.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_preview01.jpg)

2. Scan the QR code using the WeChat app: "Discover" -> "Scan QR Code", and the mini program will launch in your WeChat. (The WeChat account need to be bound as a developer to a Mini Program developer's account.)

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_preview02.jpg)

3. If you want to access the preview version in WeChat again later, it can be found in "Discover" -> "Mini Programs".

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/wechat-miniprogram-preview.jpg)

## Why the map is not correctly displayed in the simulator

The map API of WeChat uses ***Tencent Maps*** by default, which only provides detailed data in China. In WeChat app, it will automatically switch to ***Bing Maps***, if the user is out of China. However, in the preview of the developer's tool, only Tencent Maps is available.

If the demo is previewed in a smartphone, the map should be correctly displayed as follows.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/wechat-miniprogram-preview-map-s.jpg)

## How to partly import the resources or code files into an existing project
There is no explict button or menu item to import files. Instead, you can **directly copy the files or folders** in to the project folder in the hard disk. The files or folders will be displayed in the file tree of the developer's tool.

If you manually imported (copied) files of a page, do not forget to include the path of the page in "app.json" as the following example:
``` json
"pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/map/map",
    "pages/poi/poi"
  ],
```
