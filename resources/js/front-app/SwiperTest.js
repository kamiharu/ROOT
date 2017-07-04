'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Class Layer
 * @description :
		Layer 컨트롤
 * @author : freevega@naver.com
 */
define(['underscore', 'TweenMax', 'Swiper'], function (_, Motion, Swiper) {
        var SwiperTest = function () {

                // constructor
                function SwiperTest() {
                        _classCallCheck(this, SwiperTest);

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

                _createClass(SwiperTest, [{
                        key: 'init',
                        value: function init() {

                                $('.swiper-container').css({
                                        background: '#f00'
                                });

                                var mySwiper = new Swiper('.swiper-container', {
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
                                        onInit: function onInit() {}
                                });
                        }
                }]);

                return SwiperTest;
        }();

        return SwiperTest;
});