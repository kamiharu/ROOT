/*
 * Front-end Javascript App Execution
 * @author : freevega@naver.com
 *
 */
(function($) {

	FES.polyFill(function() {
        $(window).on({
            load : function(e) {
                _loadApp();
            }
        });
    });

	// window load
	function _loadApp() {

        // Swiper Test
        if ( $('.swiper-container').length ) FES.swiperTest();
	}

})(jQuery);