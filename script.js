function recommendCar() {
    const usage = document.getElementById("usage")?.value || "";
    const frequency = document.getElementById("frequency")?.value || "";
    const commute = document.getElementById("commute")?.value || "";
    const budget = document.getElementById("budget")?.value || "";
    const purpose = document.getElementById("purpose")?.value || "";

    // Validation
    if (!usage || !frequency || !commute || !budget || !purpose) {
        alert("Please complete all selections.");
        return;
    }

    let recommendations = [];

    let scoreModifier = 0;

    // Adjust score based on user behavior
    if (frequency === "High") scoreModifier += 2;
    if (frequency === "Low") scoreModifier -= 1;

    if (commute === "Long") scoreModifier += 2;
    if (commute === "Short") scoreModifier -= 1;

    if (purpose === "Family") scoreModifier -= 1;
    if (purpose === "Performance") scoreModifier += 1;

    // Logic (simple but realistic)
    if (usage === "Daily commute" && budget === "Above $60k") {
        recommendations = [
            {name: "Tesla Model 3", score: 92 + scoreModifier, reason: "Excellent for daily commuting with high efficiency and advanced technology."},
            {name: "Tesla Model Y", score: 88 + scoreModifier, reason: "More space and comfort while still maintaining electric efficiency."},
            {name: "Hyundai Ioniq 5", score: 84 + scoreModifier, reason: "Modern design with strong performance for urban driving."}
        ];
    } 
    else if (usage === "Weekend use") {
        recommendations = [
            {name: "Toyota Prius", score: 90 + scoreModifier, reason: "Balanced hybrid option, great for occasional use."},
            {name: "Mazda 3", score: 85 + scoreModifier, reason: "Reliable and fun for light driving."},
            {name: "Toyota Camry Hybrid", score: 82 + scoreModifier, reason: "Comfortable and efficient for relaxed trips."}
        ];
    } 
    else {
        recommendations = [
            {name: "Mazda 3", score: 88 + scoreModifier, reason: "Reliable daily car with good balance of cost and performance."},
            {name: "Toyota RAV4 Hybrid", score: 85 + scoreModifier, reason: "Spacious and efficient for mixed use."},
            {name: "BMW M340i", score: 80 + scoreModifier, reason: "Sporty option for those who enjoy driving performance."}
        ];
    }

    // Save to localStorage
    localStorage.setItem("rec1", JSON.stringify(recommendations[0]));
    localStorage.setItem("rec2", JSON.stringify(recommendations[1]));
    localStorage.setItem("rec3", JSON.stringify(recommendations[2]));

    // Mark flow complete
    localStorage.setItem("filterDone", "true");

    // Redirect
    window.location.href = "select-result.html";
}

/* === Sidebar Toggle Logic (FIX LAYOUT BUG) === */
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const body = document.body;

    sidebar.classList.toggle("collapsed");
    body.classList.toggle("sidebar-collapsed");

    if (sidebar.classList.contains("collapsed")) {
        localStorage.setItem("sidebarState", "collapsed");
    } else {
        localStorage.setItem("sidebarState", "expanded");
    }
}

/* Restore sidebar state on page load */
window.addEventListener("load", function () {
    const sidebar = document.querySelector(".sidebar");
    const body = document.body;
    const savedState = localStorage.getItem("sidebarState");

    if (savedState === "collapsed") {
        sidebar.classList.add("collapsed");
        body.classList.add("sidebar-collapsed");
    }
});