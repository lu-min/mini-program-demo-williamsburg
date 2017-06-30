# Translation of WeChat Developer's Tool for Mini Programs

* [0. Introduction](#0-introduction)  
* [1. Login](#1-login)  
* [2. Create/open a project](#2-createopen-a-project)  
* [3. Project tab](#3-project-tab)  
  * [3.1 Project information and configuration](#31-project-information-and-configuration)  
  * [3.2 Preview in mobile device](#32-preview-in-mobile-device)
* [4. Edit tab](#4-edit-tab)  
  * [4.1 Edit views](#41-edit-views)
  * [4.2 Context menus](#42-context-menus)
* [5. Debug tab](#5-debug-tab)  
* [6. Settings](#6-settings)  
* [7. Menu items](#7-menu-items)
* [8. Log out](#8-log-out)

## 0. Introduction

So far, the WeChat Developer's Tool only have Chinese interfaces, and do not have multi-language supports. This document will translate the main interfaces and menu items of the developer's tool in English.

The [official documentation](https://mp.weixin.qq.com/debug/wxadoc/dev/) for the developers of Mini Programs is also in only Chinese, so far. If needed, you can use the web page translation functions of Chome (Simplified Chinese to English), to browse the documentation, including the instructions of the framework, modules, APIs, etc.

## 1. Login

Launch the developer's tool and login by scanning the QR code using your WeChat app (your WeChat account need to be bound as a developer to a Mini Program developer's account).

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_login.jpg)


## 2. Create/open a project

1. After login, you need to choose the type of the project you want to develop. Choose the uppper one for Mini Programs.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_type.jpg)

2. The next view shows existing projects. You can open one project by clicking its icon, or delete the project by clicking the bottom part of its icon. Clicking "+" will create a new project.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_projs.jpg)

3. Create a new project by inputting the AppID and the project's name, and then choose a project folder.
   1. If you choose **"No AppID"**, you can still create a project, but the functions will be limited. For example, the mini program cannot be previewed on a mobile device (but still, there is a simulator in the developer's tool for preview).
   
   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_new_noid.jpg)

   2. If you choose a folder which is not empty, all the files in the folder will be added to the project. Thus, if you have files of an exsiting mini project (e.g. [this demo](https://github.com/lu-min/mini-program-demo-williamsburg)), you can import the project by choosing the folder as the directory of the new project.
   
   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_demofolder.jpg)

   3. If you choose an empty folder, check **"create a quick start project in the folder"** if needed.

   ![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_newproj_newfolder.jpg)

## 3. Project tab

### 3.1 Project information and configuration
After creating a new project by clicking **"Add project"** in the previous view, the main interface of the developer's tool will show. At first, the **Project** tab, which contains the information and settings of the project will appear.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_new.jpg)  
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_bottom.jpg)

An important function in the **Project** tab is to preview the mini program on a mobile device using your WeChat. (Your WeChat account need to be bound as a developer to a Mini Program developer's account.)

### 3.2 Preview in mobile device
Click the **"Preview"** button, and it will show a QR code. Scan the QR code using your WeChat app: **"Discover" -> "Scan QR Code"** (see [here](/docs/WeChat%20Q%26A.md#how-to-scan-a-qr-code-using-wechat) if you do not know how), and the mini program will launch in your WeChat.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_preview.jpg)

## 4. Edit tab
### 4.1 Edit views

Initially, you will see the following three views in the **Edit** tab: **Simulator**, **File Tree** and **Coding Area**.
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_start.jpg)  
You can toggle show or hide the **Simulator** and **File Tree** by clicking the small button on the top left of the views.

The type of simulated device and network can be changed in the    dropdown lists on top of the **Simulator**.

When a file of the **File Tree** is selected, its content will be shown in the **Coding Area**.
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_views.jpg)

### 4.2 Context Menus

#### File Tree menu (Right top of the File Tree)
It will show by clicking the right top button of the **File Tree**, or right clicking the title part of the **File Tree**.

Click **新建 (New)** will show the types of new file or folder.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_contextmenu_root.jpg)

#### Folder context menu
It will show by clicking the right button of the folder item, or right clicking the folder item.

Click **新建 (New)** will show the types of new file or folder.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_contextmenu_folder.jpg)

#### File context menu
It will show by clicking the right button of the file item, or right clicking the file item.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_contextmenu_file.jpg)

#### Code Area context menu
It will show by right clicking in the **Coding Area**.  

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_contextmenu_code.jpg)

#### After choosing *New* -> *Page*
You will be required to input a name of the page. After entering the title, four page files (`.js`, `.json`, `.wxml`, and `.wxss`) will be automatically created in the selected folder, and `app.json` will be automatically modified to register the new page.

#### After choosing *Delete*
A dialog box will show for confirmation.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_dialog_delete.jpg)

#### After choosing *Find*
A dialog box with options will show.  

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_dialog_find.jpg)

## 5. Debug tab

In the **调试 (Debug)** tab, most things are in English.

## 6. Settings

* #### In macOS version  
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu01.jpg)

* #### In Windows version  
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu_settings_win.jpg)


Click **微信web开发者工具 (WeChat web developer's tool)** -> **设置 (settings)** in the main menu of macOS version, or directly click **设置 (settings)** in the main menu of the Windows version, and it will show the settings with three tabs: **编辑器 (Editor)**, **代理 (Proxy)** and **通知 (Notification)**, from up to bottom.  
Usually, we do not need to change the settings of **Proxy** and **Notification**. The **Editor** tab is translated as the following images.  

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_settings.jpg)

## 7. Menu items

* #### In macOS version  
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu.jpg)

* #### In Windows version  
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu_win.jpg)

### 7.1 WeChat web developer's tool

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu01.jpg)

### 7.2 File

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu02.jpg)

### 7.3 Edit

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu03.jpg)

### 7.4 Find

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu04.jpg)

### 7.5 Interface

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu05.jpg)

### 7.6 Navigate

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu06.jpg)

### 7.7 Tools

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu07.jpg)

### 7.8 Help

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_menu08.jpg)

## 8. Log out
Click the avatar icon on the left top of the main interface of the developer's tool, and then click **Log out** in the popout box. It will return to the login view with a QR code.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_edit_logout.jpg)
