/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

//@codekit-prepend "libs/jquery-1.7.1.min.js";



var   win             = $(window),
      doc             = $(document),
      body            = $('body'),
      self            = $(this),
      windowHeight    = win.height(),
      current         = 1,
      welcomeIterate;


function viewportScale(){
  if ( win.innerWidth() > 767 ) {
    $('.main').css('top', windowHeight);
  } else {
    $('.main').css('top',0);
  }
}

$(document).ready(function() {
  viewportScale();

  win.resize(function(){
    viewportScale();
  });

  welcomeIterate = setInterval(function () {
    current++;
    $("header").removeClass().delay(300).queue(function(next){
        $('header').addClass('step-' + current);
        next();
    });
    // $('header').removeClass().addClass('step-' + current);
    if (current === 4){
      clearInterval(welcomeIterate);
      $('.step-4 a').addClass('show');
    }
  }, 3000);
});


/*  Google Analytics  */
var googleAnalyticsID = 'UA-';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();