$(window).scroll(function() {
    var $percentageComplete = (($(window).scrollTop() + window.innerHeight - $(".item-wrapper").offset().top) / $(".item-wrapper").outerHeight()) * 100;
    var window_bottom = ($(window).scrollTop() + window.innerHeight);
    $(".item-wrapper").each(function() {
        var svg_bottom = $(this).offset().top + $(this).find("svg").outerHeight();
        if (window_bottom > svg_bottom) {
            $(this).find("path").addClass("line-drawing");
        }
    });
});

$('.carousel').carousel({
  interval: false
});
