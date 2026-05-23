# 🎨 CSS Color Structure Guide

This file (`style.css`) controls the visual appearance of the website.  
Below is a breakdown of which sections control which colors.

---

## 🔵 Buttons （按钮）

### Primary buttons (main actions) （主要按钮）
```css
.primary-btn {
    background-color: #3498db;
}
```

### Primary button hover （主按钮悬停）
```css
.primary-btn:hover {
    background-color: #2980b9;
}
```

### All buttons (default) （所有按钮）
```css
button {
    background-color: #27ae60;
}
```

### All buttons hover （所有按钮悬停）
```css
button:hover {
    background-color: #2ecc71;
}
```

---

## 🟫 Sidebar (Navigation) （侧边栏）

### Sidebar background （侧边栏背景）
```css
.sidebar {
    background-color: #2c3e50;
}
```

### Sidebar item hover （侧边栏项目悬停）
```css
.sidebar ul li a:hover {
    background-color: #34495e;
}
```

### Sidebar text color （侧边栏文字颜色）
```css
.sidebar ul li a {
    color: #ecf0f1;
}
```

---

## ⚪ Page Background & Cards （页面背景和卡片）

### Main page background （主页背景）
```css
.main-content {
    background-color: #f4f7f6;
}
```

### Content cards (sections) （内容卡）
```css
.intro-section,
.cta-section,
.car-card {
    background: white;
}
```

---

## ⚫ Text Colors （文本颜色）

### Main test （主测试）
```css
body {
    color: #222;
}
```

### Paragraph text （段落文本）
```css
p {
    color: #555;
}
```

### Headings (标题）
```css
header h1 {
    color: #2c3e50;
}
```

---

## 🔵 Floating / Next Button (浮动/下一步按钮)
```css
.next-page-btn {
    background-color: #3498db;
}

.next-page-btn:hover {
    background-color: #2980b9;
}
```

---

## 🖼️ Image Styling
```css
.cover-image {
    filter: brightness(0.7);
}
```

---

## 💡 Notes
* Colors can be changed by editing background-color
* You can replace hex values (e.g. #3498db) with simple names like:
    * red
    * blue
    * green
* More specific selectors (e.g. .primary-btn) override general ones (e.g. button)
