/*
 * Front-end Javascript Apps
 * @author : freevega@naver.com
 */

/*
 * Test
 * @description : Test
 */
(function() {
	var app = function() {
		return requirejs(['front-app/SwiperTest'], function (SwiperTest) {

            FES.loadCSS("/resources/css/swiper.css");

			var fn = new SwiperTest();

			fn.init();
		});
	}

	FES.swiperTest = app;
})();