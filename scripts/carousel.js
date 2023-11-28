// When document is loaded
$(document).ready(function() {
    // Hide figure 2 and figure 3, show figure 1
    $("#carousel-figure2").addClass("hidden");
    $("#carousel-figure3").addClass("hidden");
    $("#carousel-figure1").removeClass("hidden");
});


// When #carousel-left-button clicked
$("#carousel-button-left").click(function() {
    // if #carousel-figure1 is not hidden
    if (!$("#carousel-figure1").hasClass("hidden")) {
        // add hidden class to #carousel-figure1 and remove hidden class from #carousel-figure3
        $("#carousel-figure1").addClass("hidden");
        $("#carousel-figure3").removeClass("hidden");
    }
    // else if #carousel-figure2 is not hidden
    else if (!$("#carousel-figure2").hasClass("hidden")) {
        // add hidden class to #carousel-figure2 and remove hidden class from #carousel-figure1
        $("#carousel-figure2").addClass("hidden");
        $("#carousel-figure1").removeClass("hidden");
    }
    // else if #carousel-figure3 is not hidden
    else if (!$("#carousel-figure3").hasClass("hidden")) {
        // add hidden class to #carousel-figure3 and remove hidden class from #carousel-figure2
        $("#carousel-figure3").addClass("hidden");
        $("#carousel-figure2").removeClass("hidden");
    }
});

// When #carousel-right-button clicked
$("#carousel-button-right").click(function() {
    // if #carousel-figure1 is not hidden
    if (!$("#carousel-figure1").hasClass("hidden")) {
        // add hidden class to #carousel-figure1 and remove hidden class from #carousel-figure2
        $("#carousel-figure1").addClass("hidden");
        $("#carousel-figure2").removeClass("hidden");
    }
    // else if #carousel-figure2 is not hidden
    else if (!$("#carousel-figure2").hasClass("hidden")) {
        // add hidden class to #carousel-figure2 and remove hidden class from #carousel-figure3
        $("#carousel-figure2").addClass("hidden");
        $("#carousel-figure3").removeClass("hidden");
    }
    // else if #carousel-figure3 is not hidden
    else if (!$("#carousel-figure3").hasClass("hidden")) {
        // add hidden class to #carousel-figure3 and remove hidden class from #carousel-figure1
        $("#carousel-figure3").addClass("hidden");
        $("#carousel-figure1").removeClass("hidden");
    }
});
