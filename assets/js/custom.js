// Put custom JavaScript code in this file
$(window).scroll(function () {
    $('.navigation').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (topOfWindow > 40) {
            $(this).addClass("sticky");
        } else {
            $(this).removeClass("sticky");
        }
    });
});