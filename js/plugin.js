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
    $("body").on("click", ".single-item .copyColor", function() {
        // Code
        $(this).select();
        document.execCommand("copy");
        //
        $(".popup").fadeIn(500).delay(600).fadeOut(500);
        $(".popup").css({ background: $(this).text() });
        $(".popup .textColor").text($(this).text());
        $(".audio").prop({ autoplay: true });
        var audio = new Audio("../audio/1.mp3");
        audio.play();
    });
    // input choose color 
    $("input[name='inputColor']").on("change", function() {
        // code
        console.log($(this).val());
        var inputVal = $("input[name='inputColor']").val();
        var ElementOutput = document.getElementById("result"),
            myAttr = document.createAttribute("data-color");
        myAttr.value = inputVal;
        ElementOutput.setAttributeNode(myAttr);

        // get name of color
        $(".result .copyColor").each(function() {
            if ($(this).is(".copyColor")) {
                $(this).text(inputVal);
            }
        });
        // background single-item
        $(".result").each(function() {
            if ($(this).is(".result")) {
                $(this).css({ background: inputVal });
                // $(this).text(inputVal);
            }
        });
    });

    // copy name of color
    $("body").on("click", ".result .copyColor", function() {
        // Code
        $(this).select();
        document.execCommand("copy");
        //
        $(".popup").fadeIn(500).delay(600).fadeOut(500);
        $(".popup").css({ background: $(this).text() });
        $(".popup .textColor").text($(this).text());
        $(".audio").prop({ autoplay: true });
        var audio = new Audio("../audio/1.mp3");
        audio.play();
    });
    // $("body").on("hover", ".parentInputChooseColor", function() {
    //     // code
    //     $("input[name='inputColor']").css("z-index", "1");
    // });
});