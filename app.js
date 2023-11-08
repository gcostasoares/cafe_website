$(document).ready(function() {
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        var rateScroll = scroll * 0.8;
        var startScroll = -100;
        var firstAmount = startScroll + rateScroll;
        var secondAmount = startScroll * 2 + rateScroll;
        var thirdAmount = startScroll * 3 + rateScroll;
        var fourthAmount = startScroll * 4 + rateScroll;

        if (firstAmount < 10) {
            $('.line1-letter').css({ left: firstAmount + "px" });
        }
        if (secondAmount < 10) {
            $('.line2-letter').css({ left: secondAmount + "px" });
        }
        if (thirdAmount < 10) {
            $('.line3-letter').css({ left: thirdAmount + "px" });
        }
        if (fourthAmount < 10) {
            $('.line4-letter').css({ left: fourthAmount + "px" });
        }
    });

    var kaffeeImage = $("#kaffee");
    var scrollThreshold = 1195;
    var text1 = $(".text-1");
    var text2 = $(".text-2");
    var scrollThresholdforText1 = 1700;
    var scrollThresholdforText2 = 1900;
    var oCara = $("#o-cara");
    var capixabaPosition = $('.title-end').offset().top;
    var titleMessage = $('.title-message-h1');
    var titleMessageposition = titleMessage.offset().top;

    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition >= scrollThreshold) {
            var scaleValue = 1 + (scrollPosition - scrollThreshold) / 1300;

            if (scrollPosition > 1500 && scrollPosition < 2500) {
                kaffeeImage.css({
                    'opacity' : '1',
                });
            } else {
                kaffeeImage.css({
                    'opacity' : '0',
                });
            }
        }

        if (scrollPosition > scrollThresholdforText1 && scrollPosition < 2500) {
            text1.css({
                'position': 'fixed',
                'opacity': '1',
            });
        } else {
            text1.css({
                'opacity': '0',
            });
        }

        if (scrollPosition > scrollThresholdforText2 && scrollPosition < 2500) {
            text2.css({
                'position' : 'fixed',
                'opacity': '1',
            });
        } else {
            text2.css({
                'opacity': '0',
            });
        }
        if (scrollPosition > titleMessageposition - 200) {
            oCara.css({
                'opacity': '1',
            });
        } else {
            oCara.css({
                'opacity': '0',
            });
        }
    });
});

var stickySection = [...document.querySelectorAll('.sticky')];

// Function to activate or deactivate the scroll event listener
function handleScrollTransform() {
    if (window.innerWidth >= 800) {
        window.addEventListener('scroll', activateScrollTransform);
    } else {
        window.removeEventListener('scroll', activateScrollTransform);
    }
}
if (window.innerWidth > 800) {
  

// Function to activate the scroll transformation
function activateScrollTransform() {
    for (let i = 0; i < stickySection.length; i++) {
        transform(stickySection[i]);
    }
}

// Initial check and event listener setup
handleScrollTransform();

// Event listener for changes in screen width
window.addEventListener('resize', handleScrollTransform);




    function transform(section) {
        const historiaSection = document.getElementById('historia');
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll-section');
        var newscrollPosition = window.scrollY;
        
        var scrollPercentage = (newscrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

        let percentage = ((window.scrollY - offsetTop)) / window.innerHeight * 100;
    
        percentage = percentage < 68 ? 68 : percentage > 175 ? 175 : percentage;

        scrollSection.style.transform = `translate3d(${-(percentage - 80)}vw, 0, 0)`;
    }
}
