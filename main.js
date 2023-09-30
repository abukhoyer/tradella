 // Get references to the menu toggle button and navigation menu
 const menuToggle = document.getElementById("menu-toggle");
 const navigationMenu = document.querySelector(".header-middle ul");
 
 // Toggle the navigation menu when the menu toggle button is clicked
 menuToggle.addEventListener("click", function () {
     navigationMenu.classList.toggle("active");
 });