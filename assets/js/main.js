/**
 * Main customizable javascript component of freedom template
 *
 * Author: Stefano Gagliardi
 * License: MIT
 * Documentation and repository: https://github.com/Spolaa/freedom-template
 */

/**
 * Index
 * 1. Loader
 * 2. Cookie banner
 */

/* 1. Page preloader */
//TODO remove html block <div class="loader-wrapper"></div>
$(function(){
    setTimeout(function(){
       $('body').addClass('loaded');
    }, 3000);
});

/* 2. Cookie banner */

//Cookie params
var cookieDuration = 14,
    cookieName = 'TestCookieKey',
    cookieValue = 'TestCookieValue',
    cookieBanner = true;

//Check if cookie exist, if true hide banner else show
if(getCookie(cookieName)) {
    cookieBanner = false;
}


if( cookieBanner ) {

    /*
     * .always
     * TODO Add aniamtion when cookie set is resolve
     */
    if ($('#cookie').hasClass('always')) {
        setCookie(window.cookieName, window.cookieValue, window.cookieDuration); // Create the cookie
    }

    /*
     * .on-scroll
     */
    if ($('#cookie').hasClass('on-scroll')) {
        $(window).scroll(function () {
            if(setCookie(window.cookieName, window.cookieValue, window.cookieDuration)) { // Create the cookie
                $('#cookie').addClass('display-none');
            }
        });
    }

    /*
     * .accept
     */
    if ($('#cookie').hasClass('accept')) {
        $('#cookie-btn').click(function () {
            if(setCookie(window.cookieName, window.cookieValue, window.cookieDuration)) { // Create the cookie
                $('#cookie').addClass('display-none');
            }
        });
    }

} else { // /.if( cookieBanner )
    $('#cookie').addClass('display-none');
}
/*
 * @param string name - Name of cookie
 * @param string value - Value of cookie
 * @param int day - Time before expire
 * TODO si potrebbe applicare un value con i giorni. Per far evitare di usare il js ai meno esperti
 */
function setCookie(name, value, days) {

     if(name != '' || value != '') {
         if(days > 0) {
             var date = new Date();
             date.setTime(date.getTime()+(days*24*60*60*1000));
             var expires = "; expires="+date.toGMTString();
         } else {
             var expires = ""; //Expire not defined TODO set default value
         }
         document.cookie = name+"="+value+expires+"; path=/";
     } else {
         console.log('name or value not defined');
     }

}

/*
 * @param string name - Name of cookie
 * @return bool
 */
function getCookie(name) {

    var documentCookie = document.cookie,
        cookieParams = '',
        isCookie = false,
        cookieArray = documentCookie.split(';');

        for(i = 0; i < cookieArray.length; i++) {
            cookieParams = cookieArray[i].split('=');

            for(l = 0; l < cookieParams.length; l++) {
                if(cookieParams[l] == name) {
                    isCookie = true;
                    break;
                }
            }

        }
        return isCookie;
}

function eraseCookie(name, value) {

}
