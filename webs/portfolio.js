$(function() {
    $(".section1-img-box").eq(0).css("animation-name","dropDown").css("opacity","1");
    setTimeout(() => {
        $(".section1-img-box").eq(1).css("animation-name","dropDown").css("opacity","1");
        setTimeout(() => {
            $(".section1-img-box").eq(2).css("animation-name","dropDown").css("opacity","1");

            setTimeout(() => {
                $(".explain-box").css("animation-name","dropDown").css("opacity","1")
                setTimeout(() => {
                    $(".view-more").css("animation-name","dropDown").css("opacity","1")
                }, 1000);
            }, 1000);
        }, 200);
    }, 600);
})
