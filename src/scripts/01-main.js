var scrollTo = function (id) {
    var container = $('body'),
        scrollTo = $(id);
        console.log(scrollTo)
    // Or you can animate the scrolling:
    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    });
}




