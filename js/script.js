/* var $items = $('.animated');
var $items = document.getElementsByClassName('animated'); */
var $window = $(window);
$window.on('scroll', on_focus_anim);

function on_focus_anim() {
    $('.animated').each(function () {
        var $element = $(this);
        console.log("scroll: " + ($window.scrollTop()+ $window.height()/6) + ' / elements: '+$element.offset().top);
        if (($window.scrollTop() + $window.height()/1.3) >= $element.offset().top){
            $element.removeClass('animated-hide');
        } else {
            $element.addClass('animated-hide');
        }
    });
}