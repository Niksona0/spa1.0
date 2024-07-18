"use strict";

// open modal by id
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block'; // Set display to block immediately
    setTimeout(() => {
        modal.classList.add('open'); // Add the 'open' class after a short delay
    }, 10); // Delay to allow CSS to apply display change before transitioning
    document.body.classList.add('jw-modal-open');
}

function closeModal() {
    const openModal = document.querySelector('.jw-modal.open');
    if (openModal) {
        openModal.classList.remove('open');
        setTimeout(() => {
            openModal.style.display = 'none'; // Hide the modal after transition
            
            // Pause and reset all videos in the modal
            const videos = openModal.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0; // Reset video to the beginning
            });
        }, 800); // Delay must match the CSS transition duration
        
        document.body.classList.remove('jw-modal-open');
    }
}

window.addEventListener('load', function() {
    // Close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

(function ($) {
    // Your jQuery logic here if needed
})(jQuery);


(function ($) {

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 3,
        time: 1000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);
