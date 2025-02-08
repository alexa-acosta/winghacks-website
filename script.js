function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex"; // Show sidebar
    } else {
        sidebar.style.display = "none"; // Hide sidebar
    }
}