$(document).ready(function () {

    // Change navbar to toggle to the right side when on mobile
    $('#menu').click(function () {
        // Change the bars icon to times icon
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Navbar on desktop
    $(window).on('scroll', function () {
        // Change the times icon to bars icon
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Navigate to each section
        $('section').each(function () {
            // Set positions
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            // Change the navbar color to the corresponding section
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

// Typing JS Effect Start
var typed = new Typed(".typing-text", {
    strings: ["Arya Wira Kristanto!"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 500,
});
// Typing JS Effect End 
