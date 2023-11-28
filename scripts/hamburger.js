$(document).ready(function() {
    if ($(document).width() >= 680) {
        // add hidden class to #hamburger-button and remove hidden class from #nav-menu
        $("#hamburger-button").addClass("hidden");
        $("#nav-menu").removeClass("hidden");
    // if window width is less than 663px:
    } else {
        // remove hidden class from #hamburger-button and add hidden class to #nav-menu
        $("#hamburger-button").removeClass("hidden");
        $("#nav-menu").addClass("hidden");
    }
});

// when #hamburger-button is clicked:
$("#hamburger-button").click(function() {
    // if #nav-menu is hidden:
    if ($("#nav-menu").hasClass("hidden")) {
        // remove hidden class from #nav-menu
      $("#nav-menu").removeClass("hidden");
    // if #nav-menu is not hidden:
    } else {
        // add hidden class to #nav-menu
      $("#nav-menu").addClass("hidden");
    }
});

// when window is resized:
$(window).resize(function() {
    // if window width is greater than 663px:
    if ($(document).width() >= 663) {
        // add hidden class to #hamburger-button and remove hidden class from #nav-menu
        $("#hamburger-button").addClass("hidden");
        $("#nav-menu").removeClass("hidden");
    // if window width is less than 663px:
    } else {
        // remove hidden class from #hamburger-button and add hidden class to #nav-menu
        $("#hamburger-button").removeClass("hidden");
        $("#nav-menu").addClass("hidden");
    }
});
