/*
    comment_setting.js	
	
	Fumiya Sakai(just1factory.net)
	
	カタログコンテンツのコメントAjax化用の共通関数
*/
//
$(document).ready(function(){
    //Common Settings
    var catalog_id;
	var username;
	var text;
    
    var shortTime  = 200;
    var mediumTime = 1000;
    
    var errorMessage = "エラー：入力内容が正しくありません";
    var commentComplete = "コメントが投稿されました。投稿した内容がコメントポリシーに反しない場合、投稿が表示されます。";
    
	var targetaddComment   = $("#addComment");
    var targetCatalogId    = $("#commentCatalogId");
    var targetUsername     = $("#commentUsername");
    var targetText 		   = $("#commentText");
    var targetSubmitButton = $("#commentSubmitButton");
    
    var targetLeaveResult  = $("#commentResultArea");
    
    //Click targetSubmitButton
    targetSubmitButton.click(function(e){
		
		//Default off
		e.preventDefault();
		
		//validation
    	var errorStatement = $(".error");
		
		catalog_id = targetCatalogId.val();
		username = targetUsername.val();
		text = targetText.val();
				
		if(catalog_id.length == 0 || username.length == 0 || text.length == 0 || text.length > 1000) {
			
			if(errorStatement.length == 0) {
				targetLeaveResult.append('<p class="padb5 error">' + errorMessage + '</p>');
			}
			return false;

		}else{
			
			$.post(
				'/catalogs_comments/complete',{
				'catalog_id' : catalog_id,
				'username' 	 : username,
				'text' 		 : text
			},
			function(res) {
				errorStatement.fadeOut(shortTime);
				targetaddComment.fadeOut(mediumTime, function(){
					targetLeaveResult.append('<p>内容：</p><p>' + res + '</p><br><p>'+ commentComplete +'</p>');		
				});
			});
			return false;
		}
    });
});