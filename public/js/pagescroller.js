/*
    pagescroller.js	
	
	Fumiya Sakai(just1factory.net)
	
	トップへのスクロール関数
	
*/
$(function(){
  
    var selector = "a[href=\"#pageTop\"]";
    var durationParam = 600;
    var easingParam = "easeInOutExpo";    
    var $pageTopLink = $(selector);
    
    $pageTopLink.bind("click", onClick);
    
    function onClick(e) {
      e.preventDefault();
      
      $("html, body").animate({
        scrollTop: 0
      }, {
        duration: durationParam,
        easing: easingParam
      });
    }
  
});