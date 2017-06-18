# mini-program-demo-williamsburg
## Purpose
This demo is built for the coding presentation entitled "Coding for Map Applications on the Platform of WeChat Mini Programs" in the pre-conference workshop of ICC2017 in Williamsburg, VA, on June 30, 2017.

## How to install the developer's tool of WeChat Mini Program
### Download the installation file
1. Visit the [download page on their official website (in Chinese) ](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
2. Click [windows 64](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64), [windows 32](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32), or [mac](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin) to download the installation program according to your system (you can also click the links here to download them)

### Installation on macOS

### Installation on Windows
Modify the folder to install from some messy characters to English

## How to open this demo in the developer's tool

1. Download or clone this demo to a local folder (extract the archive file if needed).
2. Launch the developer's tool and login by scanning the QR code using your WeChat app (your WeChat account need to be bound as a developer to a Mini Program developer's account).
3. Select "Local Mini Program projects" (the upper one).
4. Click "+" to create a new project.
5. Input AppID if you have got one. If you select "No AppID", the program cannot be previewed on a mobile device (but still, there is a preview in the developer's tool).
6. Input a name of the project.
7. Choose folder of the demo (which contains the file "app.js") as the project folder. If you want to start from an empty project, select an empty folder, and check "create a quick start project in the folder" if needed.

## How to test the demo in a smartphone

1. Choose the "Project" label, and click the "Preview" button.
2. Scan the QR code using the WeChat app (the WeChat account need to be bound as a developer to a Mini Program developer's account).
3. Tap the "Confirm" button in WeChat and it will launch the mini program

## Why the map is not correctly displayed in the preview

The map API of WeChat uses Tencent Maps by default, which only provides detailed data in China. In WeChat app, it will automatically switch to Bing Maps, if the user is out of China. However, in the preview of the developer's tool, only Tencent Maps is available.

If the demo is previewed in a smartphone, the map should be correctly displayed.

## How to partly import the resources or code files into an existing project
There is no explict button or menu item to import files. Instead, you can directly copy the files or folders in to the project folder in the hard disk. The files or folders will be displayed in the file tree of the developer's tool.

If you manually imported (copied) files of a page, do not forget to include the path of the page in "app.json" as follows:
``` json
"pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/map/map",
    "pages/poi/poi"
  ],
```
