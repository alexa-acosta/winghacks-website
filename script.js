function toggleSidebar() {
    // Get the sidebar element
    let sidebar = document.getElementById("sidebar");

    // Check if the sidebar is off-screen (left: -250px)
    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0";  // Show sidebar by setting left to 0
    } else {
        sidebar.style.left = "-250px";  // Hide sidebar off-screen
    }
}
