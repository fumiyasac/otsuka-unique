/*
    showcase.js	
	
	Fumiya Sakai(just1factory.net)
	
	大塚珍しいもんStoreの共通定義
*/

//拡大画像総数
var maxValue = 3;

//jQuery function	
$(document).ready(function(){
	
	displayImage(0, maxValue);
	
	//クリックしたとき画像変更する
	$(".thumItem").click(function(){
		targetVal = $(".thumItem").index(this);
		$(".thumItem a").removeClass("zoomThumbActive");
		$(".thumItem:eq("+ targetVal +") a").addClass("zoomThumbActive");
		displayImage(targetVal, maxValue);		
    });
});

//表示するイメージを決める
function displayImage(value, maxValue){
	for(var i = 0; i <= maxValue; i++){
		if(i == value){
			$(".displayTarget" + i).css("visibility","visible");
		}else{
			$(".displayTarget" + i).css("visibility","hidden");			
		}
		$(".displayTarget" + i).css("position","absolute");
		$(".displayTarget" + i).css("top",0);
	}
}