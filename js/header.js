$(window).on('scroll', function(){
   $("nav").addClass('child');
})

const toggleMenu = () => {
       document.body.classList.toggle("open");
};