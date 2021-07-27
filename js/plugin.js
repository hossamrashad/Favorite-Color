$(document).ready(function() {
    // code
    //   mixitup
    var mixer = mixitup(".portfolio-item", {
        animation: {
            duration: 300,
            effectsOut: "fade translateX(-100%)",
        },
    });
    // ul li
    $(".controls .btnColor").each(function() {
        // code
        if ($(this).is(".btnColor")) {
            $(this).css({ background: $(this).attr("id") });
            // $(this).text($(this).attr("id"));
        }
    });
    // background single-item
    $(".portfolio-item .single-item").each(function() {
        if ($(this).is(".single-item")) {
            $(this).css({ background: $(this).data("color") });
        }
    });
    // get name of color
    $(".portfolio-item .single-item .copyColor").each(function() {
        if ($(this).is(".copyColor")) {
            $(this).text($(this).parent().data("color"));
        }
    });
    // copy name of color
    $("body").on("click", ".single-item", function() {
        // Code
        $(".copyColor").select();
        document.execCommand("copy");
    });
});

//
//#3498db
//
//
// #f00
//
//
//
// 
//
//