/*
 * Class Layer
 * @description :
		Layer 컨트롤
 * @author : freevega@naver.com
 */
define(['underscore','TweenMax','Swiper'], function(_, Motion, Swiper) {

    class SwiperTest {

        // constructor
        constructor() {
            this.opts = {};
        }

        // show
        // show(trigger, layer, layerStyle) {
        // 	let _class = this;

        // 	Motion.set(layer, { display : 'block', opacity : 0.1 });
        // 	Motion.to(layer, 0.3, {
        // 		opacity : 1
        // 		, ease : Power2.easeOut
        // 		, onComplete : function() {
        // 			_class.showOnComplete(trigger, layer, layerStyle);
        // 		}
        // 	});
        // }

        // initialize
        // init(opts = { trigger : null, motionTime : 0.3 }) {
        // }

        init() {

            $('.swiper-container').css({
                background : '#f00'
            });

            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                direction: 'vertical',
                loop: true,

                // If we need pagination
                pagination: '.swiper-pagination',

                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',

                // And if we need scrollbar
                scrollbar: '.swiper-scrollbar',
                onInit : function() {
                }
            });

        }

    }

    return SwiperTest;
});