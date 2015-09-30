/*
    tabview.js	
	
	Fumiya Sakai(just1factory.net)
	
	アンケート項目Ajax化用の共通関数	
*/

//チェックボックス・ラジオボタン選択時の変数
var selectFlagValue;
var cssBgElements = "background-color";
var defaultColor  = "#eeeeee";
var changedColor  = "#ffffff";

//内容変更時の変数
var post_id;
var post_question_id;
var post_answer_id;
var type;
var required;
var question;
var answer;

var errorMessageQuestion = "エラー：質問内容を入力して下さい";
var errorMessageAnswer   = "エラー：回答リストを入力して下さい";

var postQuestionFlag;
var postAnswerFlag;

//デフォルト用設定
$(".postAnswerText").attr('readonly',true).css(cssBgElements,defaultColor);

//内容変更時の処理
function onChangeSelectFormType(num){
	var targetTypeElements = "#enqueteArea" + num + " div .postQuestionType";
	var targetTextBox      = "#enqueteArea" + num + " div .postAnswerText";
	selectFlagValue = $(targetTypeElements).val();
	if(selectFlagValue > 2){
		$(targetTextBox).attr('readonly',false).css(cssBgElements,changedColor);
	}else{
		$(targetTextBox).attr('readonly',true).css(cssBgElements,defaultColor);
	}
	
}

//登録前のバリデーションを設定する
function beforeEditForm(num){
	//フォーム項目を取得
	type     = $("#enqueteArea" + num + " div .postQuestionType").val();
	question = $("#enqueteArea" + num + " div .postQuestionText").val();
	required = $("#enqueteArea" + num + " div input[name='postQuestionRequired']:checked").val();
	answer   = $("#enqueteArea" + num + " div .postAnswerText").val();
	//hidden項目を取得
	post_id          = $("#enqueteArea" + num + " .postId").val();
    post_question_id = $("#enqueteArea" + num + " .postQuestionId").val();
    post_answer_id   = $("#enqueteArea" + num + " .postAnswerId").val();
    //エラー項目を取得
    var targetErrorPostQuestionText = $("#enqueteArea" + num + " div div.errorPostQuestionText");
    var targetErrorPostAnswerText   = $("#enqueteArea" + num + " div div.errorPostAnswerText");
	//エラーメッセージ表示判定用
	var targetErrorPostQuestionTextStat = $("#enqueteArea" + num + " div div.errorPostQuestionText .error");
    var targetErrorPostAnswerTextStat   = $("#enqueteArea" + num + " div div.errorPostAnswerText .error");
    
    //質問内容のバリデーション
	if(question.length > 0){
		postQuestionFlag = 0;
	}else{
		if(targetErrorPostQuestionTextStat.length == 0){	
			targetErrorPostQuestionText.append('<p class="error">' + errorMessageQuestion + '</p>');
		}
		postQuestionFlag = 1;
	}
	
	//ラジオボタン・チェックボックスのバリデーション
	if(type > 2){
		if(answer.length){
			postAnswerFlag = 0;
		}else{
			if(targetErrorPostAnswerTextStat.length == 0){	
				targetErrorPostAnswerText.append('<p class="error">' + errorMessageAnswer + '</p>');
			}
			postAnswerFlag = 1;
		}
	}else{
		postAnswerFlag = 0;
	}
    
    //バリデーション結果の判定
    if(postQuestionFlag == 0 && postAnswerFlag == 0){
	    
	    alert('質問項目' + num + 'の設定が完了しました！');
		
	    //Ajaxでの登録処理を記述
    	$.post(
			'/control/posts/form_change',{
			'post_id'          : post_id,
			'post_question_id' : post_question_id,
			'post_answer_id'   : post_answer_id,
			'type'             : type,
			'question'         : question,
			'required'         : required,
			'answer'           : answer
		},
		function(res) {
			location.href = "/control/posts/form_edit/" + post_id;
		});	    
	    
    }else{
	    return false;
    }
    
}

//初期表示時
$(document).ready(function(){

	for(i = 1; i <= 5; i++){
		var initTypeElements = "#enqueteArea" + i + " div .postQuestionType";
		var initTextBox      = "#enqueteArea" + i + " div .postAnswerText";
		initFlagValue = $(initTypeElements).val();
		if(initFlagValue > 2){
			$(initTextBox).attr('readonly',false).css('background-color','#ffffff');
		}else{
			$(initTextBox).attr('readonly',true).css('background-color','#eeeeee');
		}
	}

});