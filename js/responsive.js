// Responsive hamburger menu
// When the user clicks burger menu, change class
function burgerMenu() {
  var x = document.getElementById("main-nav");
  if (x.className === "nav-bar" || x.className === "nav-bar-icon") {
    x.className += " responsive"; // Add responsive to the class if it is the main nav bar
  } else {
    x.className = "nav-bar";
  }
}
