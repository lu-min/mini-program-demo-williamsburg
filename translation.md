# Translation and simple manual of the developer's tool for WeChat Mini Program

* [0. Introduction](#0-introduction)  
* [1. Login](#1-login)  
* [2. Create/open a project](#2-createopen-a-project)  

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
After creating a new project by clicking **"Add project"** in the previous view, the main interface of the developer's tool will show. At first, the **Project** tab, which contains the information and settings of the project will appear.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_new.jpg)
![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_bottom.jpg)

An important function in the **Project** tab is to preview the mini program on a mobile device using your WeChat. (Your WeChat account need to be bound as a developer to a Mini Program developer's account.)

Click the **"Preview"** button, and it will show a QR code. Scan the QR code using your WeChat app: **"Discover" -> "Scan QR Code"** (see [here](https://github.com/lu-min/mini-program-demo-williamsburg/blob/master/WeChat%20Q%26A.md#how-to-scan-a-qr-code-using-wechat) if you do not know how), and the mini program will launch in your WeChat.

![image](http://portland.csis.u-tokyo.ac.jp/images/miniprogram/ide_project_preview.jpg)

## 4. Edit tab

## 5. Debug tab

## 6. Menu items
