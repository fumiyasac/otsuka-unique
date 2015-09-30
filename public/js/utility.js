/*
    tabview.js	
	
	Fumiya Sakai(just1factory.net)
	
	管理画面サイド用の共通関数	
*/
$(document).ready(function(){
	
	//Parameters
	var PANELS = ".adminSidePanel header";
	var TO_TOP = ".toTop a";
	
	//Panel hover
	$(PANELS).hover(function(){
		$('h5',this).css("color","black");
	},function(){
		$('h5',this).css("color","blue");
	});

	//Panel action
	$(PANELS).click(function () {
		$(this).next().slideToggle("fast");
	}).next().hide();	

	//To Top Scroll
	$(TO_TOP).click(function(){
    $('html,body').animate({ 
    	scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
    	return false;
    });

});