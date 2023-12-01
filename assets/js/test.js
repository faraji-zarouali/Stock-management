$(document).ready(function () {
    let sidebar = $(".sidebar");
let closeBtn = $("#btn");
let searchBtn = $(".bx-search");

closeBtn.on("click", () => {
  sidebar.toggleClass("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.on("click", () => { // Sidebar open when you click on the search icon
  sidebar.toggleClass("open");
  menuBtnChange(); //calling the function(optional)
});

    // Define your menuBtnChange function here (if needed)
    function menuBtnChange() {
      // Your logic for menu button change
    }

  });