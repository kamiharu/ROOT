/*
 * Front-end Configuration
 * @author : freevega@naver.com
 */

// requirejs Configuration
requirejs.config({
	baseUrl: '/resources/js/'
	, paths: {
		underscore : 'front-lib/underscore.min'
		, Hammer : 'front-lib/Hammer'
        , TweenMax : 'front-lib/TweenMax.min'
        , Swiper : 'front-lib/swiper.min'
	}
	, shim: {
    	underscore: { exports: '_' }
        , TweenMax : { exports : 'Motion' }
        , Swiper : { exports : 'Swiper' }
	}
});

// FES definition
FES = {
    // modern browser detect
	isMordern : function() {
		var flag = true;
		if ( document.all && !document.addEventListener ) flag = false;
		return flag;
	}

	// script load
	// url 기준점 : html head에서 추가됨
	, loadScript : function(url, callback) {
		var script = document.createElement("script");
		script.type = "text/javascript";

		if (script.readyState){  //IE
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" ||
						script.readyState == "complete"){
					script.onreadystatechange = null;
					if ( callback != undefined && typeof callback == 'function' ) callback();
				}
			};
		} else {  //Others
			script.onload = function(){
				if ( callback !=undefined && typeof callback == 'function' ) callback();
			};
		}

		script.src = url;
		document.querySelector("head").appendChild(script);
	}

    // css load
    , loadCSS : function(url) {

        var link = document.createElement('link');
        link.href = url;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.media = 'screen,print';

        document.getElementsByTagName('head')[0].appendChild( link );
		document.querySelector('head').appendChild(link);

    }

	// old Browser Polyfill
	, polyFill : function(callback) {
		FES.loadScript('/resources/js/front-lib/babel-polyfill.js', function() {
			if ( callback != undefined && typeof callback == 'function' ) callback();
		});

	}

};

