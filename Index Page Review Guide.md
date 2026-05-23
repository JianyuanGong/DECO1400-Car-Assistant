# 🧠 Index Page Review Guide

This page serves as the entry point of the system. It introduces the platform and guides users to start the car recommendation process. \
（该页面是系统的入口，用于介绍平台并引导用户开始汽车推荐流程。）

---

## 🧩 Structure Overview（页面结构）

The page is divided into several main sections: \
（页面被划分为多个主要模块：）

- Navigation Sidebar (`<nav class="sidebar">`)（侧边导航栏）  
- Main Content (`<main>`)（主内容区域）  
- Hero Section（标题介绍区）  
- CTA Section（引导操作区）  
- Preview Section（推荐预览区）  
- Cover Section（图片展示区）  
- Footer（页脚）  

---

## 🔗 Navigation（导航）

```html
<a href="select-input.html">
```

* Used for page routing \
    （用于页面跳转）
* Allows users to move between different pages \
    （允许用户在不同页面之间切换）

How to explain：
I use anchor links to navigate between pages. \
（我使用超链接在页面之间进行跳转。）

---

## 🔘 CTA Button（关键按钮）

```html
<button class="primary-btn" onclick="window.location.href='select-input.html'">
```

* Starts the user journey \
    （开始用户流程）
* Redirects to input page \
    （跳转到输入页面）

How to explain：
This button redirects the user to the input page using JavaScript. \
（该按钮通过JavaScript将用户跳转到输入页面。）

---

## 🎯 Sections Purpose（各部分作用）

### Hero Section（标题区）

* Introduces the system
    （介绍系统功能）

### CTA Section（引导区）

* Encourages users to start
    （引导用户开始使用）

### Preview Section（预览区）

* Shows example recommendations
    （展示示例推荐）

### Cover Section（图片区）

* Enhances visual experience
    （提升视觉体验）

---

## ⚙️ JavaScript (Sidebar)（侧边栏逻辑）

```js
function toggleSidebar()
```

* Toggles sidebar open/close
    （控制侧边栏展开与收起）
* Uses localStorage to remember state
    （使用本地存储保存状态）

```js
localStorage.setItem("sidebarState", "collapsed");
```

How to explain：
It stores the sidebar state so it persists after reload.
（它会保存侧边栏状态，使刷新后仍然保持。）

---

## 🧪 Quick Modifications（现场修改）

You can demonstrate: \
（你可以演示以下操作：）

### 1. Change text（改文字）
```html
<h1>Find Your Perfect Car</h1>
```

### 2. Add button（加按钮）
```html
<button>Test Button</button>
```

### 3. Add interaction（加交互）
```js
alert("Button clicked");
```

### 4. Change navigation（改跳转）
```js
window.location.href = "about.html";
```

---

## ✅ Key Idea（核心理解）

* HTML → structure（结构）
* CSS → styling（样式）
* JS → interaction（交互）
