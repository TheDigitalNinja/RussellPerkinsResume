function sticky() {
    var windowTop = $(window).scrollTop();
    var divTop = $('#sticky-anchor').offset().top;
    if (windowTop > divTop) {
        $('#navbar').addClass('navbar-fixed-top');
    } else {
        $('#navbar').removeClass('navbar-fixed-top');
    }
}

$(function () {
    $(window).scroll(sticky);
    sticky();
});