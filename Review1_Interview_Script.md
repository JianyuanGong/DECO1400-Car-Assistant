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
