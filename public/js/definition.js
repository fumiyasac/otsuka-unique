/*
    definition.js	
	
	Fumiya Sakai(just1factory.net)
	
	大塚珍しいもんStoreの共通定義
*/
$(document).ready(function(){
	
	//Configure
	var INPUT_KEYWORD = "キーワードを入力して下さい";
	
	//Parameters
	var ARTICLE_THUMBNAILS = ".articleThumb";
	var TEXTAREA_CLASS = ".autoClear";
	var MAIN_NAV = "#globalHeader .mainNav nav ul li a";
	var SHOP_BUTTON = ".showcaseButton a img";
	var CATALOG_LINK_BUTTON = ".catalogLinkButton a img";
	var MAIN_SLIDER = "#scroller";
	var SHOP_SLIDER = "#shopSlider";
	var TO_TOP = ".toTop a";
	
	//Lazyload
	$(ARTICLE_THUMBNAILS).lazyload({
		effect:"fadeIn"
	});
													 
	//Rollover Action
	$(MAIN_NAV).opOver(1.0,0.3,400,400);
	$(SHOP_BUTTON).opOver(1.0,0.3,400,400);
	$(CATALOG_LINK_BUTTON).opOver(1.0,0.3,400,400);
		
	//Simply Scroll Slides
	$(MAIN_SLIDER).simplyScroll({
		speed:1,
		pauseOnHover:false
	});
	
	//Textbox Focus and Blur
	$(TEXTAREA_CLASS).val(INPUT_KEYWORD).css("color","#cccccc");	
	$(TEXTAREA_CLASS).focus(function(){
		if(this.value == INPUT_KEYWORD){
			$(this).val("").css("color","#333333");
		}
	});
	$(TEXTAREA_CLASS).blur(function(){
		if(this.value == ""){
			$(this).val(INPUT_KEYWORD).css("color","#cccccc");			
		}
	});
	
	//Shop Slider
	$(SHOP_SLIDER).easySlider({
		auto: false,
		continuous: true,
		speed: 800,
		prevText:'前の商品を見る',
		nextText:'次の商品を見る',
		pause: 6000
	});
	
	//To Top Scroll
	$(TO_TOP).click(function(){
    $('html,body').animate({ 
    	scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
    	return false;
    });
	
	
});
