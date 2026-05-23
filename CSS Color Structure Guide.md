# 🎨 CSS Color Structure Guide

This file (`style.css`) controls the visual appearance of the website.  
Below is a breakdown of which sections control which colors.

---

## 🔵 Buttons

- **Primary buttons (main actions)**

```css
.primary-btn {
    background-color: #3498db;
}
```

### Primary button hover
.primary-btn:hover {
    background-color: #2980b9;
}

### All buttons (default)
button {
    background-color: #27ae60;
}

### All buttons hover
button:hover {
    background-color: #2ecc71;
}

---

## 🟫 Sidebar (Navigation)

### Sidebar background
.sidebar {
    background-color: #2c3e50;
}

### Sidebar item hover
.sidebar ul li a:hover {
    background-color: #34495e;
}

### Sidebar text color
.sidebar ul li a {
    color: #ecf0f1;
}

---

## ⚪ Page Background & Cards

### Main page background
.main-content {
    background-color: #f4f7f6;
}

### Content cards (sections)
.intro-section,
.cta-section,
.car-card {
    background: white;
}

---

## ⚫ Text Colors

### Main test
body {
    color: #222;
}

### Paragraph text
p {
    color: #555;
}

### Headings
header h1 {
    color: #2c3e50;
}

---

## 🔵 Floating / Next Button
.next-page-btn {
    background-color: #3498db;
}

.next-page-btn:hover {
    background-color: #2980b9;
}

---

## 🖼️ Image Styling
.cover-image {
    filter: brightness(0.7);
}

---

## 💡 Notes
* Colors can be changed by editing background-color
* You can replace hex values (e.g. #3498db) with simple names like:
    * red
    * blue
    * green
* More specific selectors (e.g. .primary-btn) override general ones (e.g. button)
