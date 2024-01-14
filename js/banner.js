(function ($) {
    "use strict";

    // First Slider
    var slider1 = new MasterSlider();
    slider1.control('arrows', { insertTo: '#masterslider-index' });
    slider1.control('bullets');
    slider1.setup('masterslider-index', {
        width: 1366,
        height: 768,
        space: 5,
        view: 'basic',
        layout: 'fullscreen',
        fullscreenMargin: 0,
        loop: true,
        speed: 70
    });

    // Second Slider
    var slider2 = new MasterSlider();
    slider2.control('arrows');
    slider2.control('timebar', { insertTo: '#masterslider' });
    slider2.control('bullets');
    slider2.setup('masterslider', {
        width: 1400,
        height: 768,
        space: 1,
        layout: 'fullscreen',
        loop: true,
        preload: 0,
        fullscreenMargin: 0,
        autoplay: true
    });

})(jQuery);
