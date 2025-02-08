function toggleSidebar() {
    // Get the sidebar element
    let sidebar = document.getElementById("sidebar");

    // Check the current display status and toggle
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex";  // Show sidebar
    } else {
        sidebar.style.display = "none";  // Hide sidebar
    }
}
