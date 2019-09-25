$(document).ready(function() {
    $(".slider > div:gt(0)").hide();
    setInterval(function() {
        $('.slider > div:first')
        .fadeOut(100).next().fadeIn(900).end().appendTo('.slider');
    }, 3000);
});