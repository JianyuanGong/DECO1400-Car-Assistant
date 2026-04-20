# Review 1 Interview Preparation Script

## Q1: Why did you design this page or feature this way?
[cite_start]**Answer:** "I implemented a **persistent left-hand sidebar** to satisfy the heuristic of **'Visibility of System Status'** [cite: 1592-1594]. It allows users to navigate between 'Select' and 'Maintenance' modules instantly, maintaining **'User Control and Freedom'**. [cite_start]Additionally, I used familiar terms like 'Budget' instead of technical jargon to ensure a **'Match between system and the real world'** [cite: 1596-1598]."

## Q2: What did you learn from your lo-fi prototype, and how did it affect your design?
[cite_start]**Answer:** "In the low-fidelity stage, I found that stacking all car specifications led to high **'Cognitive Load'**[cite: 1618]. [cite_start]Consequently, in the hi-fi version, I adopted a **'Minimalist Design'** [cite: 1603] by using color-coded cards and white space to create a clear **Visual Hierarchy**, focusing the user’s attention on the 'Match Score'."

## Q3: How do you plan to implement the HTML and CSS structure?
[cite_start]**Answer:** "I am following the **Week 7 guidelines**[cite: 6]. [cite_start]I use **CSS Grid** for the macro-layout (`grid-template-columns: 250px 1fr;`) to separate the sidebar from the main content[cite: 1246, 1247]. [cite_start]Inside components, I use **Flexbox** for precise alignment[cite: 1260]. [cite_start]All HTML is written using **semantic tags** like `<nav>` and `<main>` to ensure a logical document structure[cite: 1700]."

## Q4: Identify one usability issue and your plan to improve it.
**Answer:** "I noticed that static cost comparisons in the 'Maintenance' section aren't intuitive enough. [cite_start]My plan is to use **JavaScript DOM manipulation** to create a dynamic calculator[cite: 1344, 1614]. Users will input their yearly mileage, and the script will instantly update the 'Fuel vs. Electricity' cost display, providing better **system feedback**."

## Q5: What is the most valuable thing you've learned so far?
**Answer:** "The most valuable lesson is that design must be **justifiable**. [cite_start]Learning **Heuristic Evaluation** [cite: 1626] taught me that every UI element—like a hover effect or a sidebar—should serve a functional purpose, such as providing feedback or reducing memory load, rather than just being 'pretty'."

# Review 1 面试脚本 (中英对照)

## Q1: 设计初衷 (Design Justification)
- **EN:** "I implemented a persistent sidebar for **Visibility of System Status**."
- **CN:** “我实现了一个持久的侧边栏，以满足**系统状态可见性**。”
- **Key:** Visibility of System Status, Persistent sidebar.

## Q2: 原型演变 (Prototype Iteration)
- **EN:** "Lo-fi showed too much **Cognitive Load**. Hi-fi uses **Minimalist Design** for better **Visual Hierarchy**."
- **CN:** “低保真原型显示**认知负荷**过重。高保真采用**极简设计**来建立更好的**视觉层级**。”
- **Key:** Cognitive Load, Visual Hierarchy, Minimalist Design.

## Q3: 技术实现 (Technical Plan)
- **EN:** "Using **CSS Grid** for layout and **Flexbox** for alignment, with **semantic HTML tags**."
- **CN:** “使用 **CSS Grid** 进行布局，**Flexbox** 进行对齐，并使用**语义化 HTML 标签**。”
- **Key:** CSS Grid, Flexbox, Semantic tags.

## Q4: 改进方案 (Future Improvements)
- **EN:** "Plan to use **JavaScript** to turn static data into a dynamic calculator for better **System Feedback**."
- **CN:** “计划使用 **JavaScript** 将静态数据转为动态计算器，以获得更好的**系统反馈**。”
- **Key:** JavaScript DOM, Dynamic calculator, System feedback.

## Q5: 核心收获 (Most Valuable Learning)
- **EN:** "Every UI element must be **justifiable** and serve a functional purpose."
- **CN:** “每一个 UI 元素都必须是**有理有据的**，并且服务于功能性目的。”
- **Key:** Justifiable, Heuristic Evaluation, Functional purpose.

- # DECO1400 Review 1: Quick Presentation Script

## 1. Nielsen's Heuristics (尼尔森原则)
[cite_start]For the design principles, I focused on the **Visibility of System Status** by using a fixed sidebar so users never get lost[cite: 217, 218]. [cite_start]I also used simple terms like 'Budget' instead of complex car jargon to ensure a **Match between the system and the real world**[cite: 221, 222].

## 2. Low-Fidelity to High-Fidelity (低保真到高保真)
[cite_start]Moving from the low-fidelity to the high-fidelity prototype, my main goal was **Minimalist Design**[cite: 227, 228]. The early sketches had too much information. So, I removed the useless clutter and used color blocks to reduce the user's **Cognitive Load** (认知负荷) and create a clear visual hierarchy.

## 3. Code Implementation Plan (代码计划)
[cite_start]For my code plan, I will use **semantic HTML5 tags** for the basic structure[cite: 413]. [cite_start]For the layout, I will use **CSS Grid** for the main page and **Flexbox** to align the sidebar[cite: 413]. [cite_start]Finally, I will use **JavaScript** to build the interactive "Match Score" calculator[cite: 268, 413].

## 1. 尼尔森原则

[cite_start]在设计原则方面，我着重强调**系统状态的可见性**，通过使用固定侧边栏，确保用户不会迷失方向[cite: 217, 218]。[cite_start]我还使用了“预算”等简单术语，而非复杂的汽车专业术语，以确保**系统与现实世界的契合度**[cite: 221, 222]。

## 2. 从低保真到高保真

[cite_start]从低保真原型到高保真原型，我的主要目标是**极简设计**[cite: 227, 228]。早期的草图信息过多，因此我移除了无用的元素，并使用色块来降低用户的**认知负荷**，并创建清晰的视觉层级。

## 3. 代码实现计划

[cite_start]我的代码计划将使用**语义化的HTML5标签**来构建基本结构[cite: 413]。[cite_start]在布局方面，我将使用**CSS Grid**来构建主页，并使用**Flexbox**来对齐侧边栏[cite: 413]。[cite_start]最后，我将使用**JavaScript**来构建交互式的“比赛得分”计算器[cite: 268, 413]。
