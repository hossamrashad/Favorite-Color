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
        $(".popup").css({ background: $(this).text(), zIndex: "20" });
        $(".popup .textColor").text($(this).text());
        $(".audio").prop({ autoplay: true });
        var audio = new Audio("audio/1.mp3");
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
        var audio = new Audio("audio/1.mp3");
        audio.play();
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
        var audio = new Audio("audio/1.mp3");
        audio.play();
    });

    // cursor disc what you need to do in box color
    $(".single-item, .result").on("mousemove", function(event) {
        // code
        $(".parentCursor").fadeIn(1000).offset({
            left: event.pageX - 80,
            top: event.pageY + 70,
        }).delay(15000).fadeOut(1000);
    });

    // cursor disc what you need to do in input
    $("#inputColor").on("mousemove", function(event) {
        // code
        $(".parentCursorInput")
            .fadeIn(1000)
            .offset({
                left: event.pageX - 80,
                top: event.pageY + 30,
            })
            .delay(15000)
            .fadeOut(1000);
    });
});