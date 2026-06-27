$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    $("nav").toggleClass('child', scrollPosition > 0);
});
const toggleMenu = () => {
       document.body.classList.toggle("open");
};

