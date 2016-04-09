var mainDiv = document.getElementById("mainDiv");
var textInput = document.getElementById("textInput");
var send = document.getElementById("send");

var allQuestions = $(".question");
var allAnswers = $(".answer");
var allWaiting = $(".waiting");
var q = 0;
var a = 0;

var responseTime = 3000;

$(document).keypress(function(e) {
	if (e.which == 13) {
	sendInput();
	}
});

send.addEventListener("click", function() {
	sendInput();
});








function sendResponse() {	
	
	setTimeout(function(){

		allWaiting[q-1].className = "displayWait";
		checkScrollW();

	
	},1500);
	
	setTimeout(function() {
	
		allWaiting[q-1].className = "waiting";
		$(allAnswers[q-1]).fadeTo(1000, 1);
		allAnswers[q-1].className = " question displayAnswer";
		checkScrollA();
	
	},responseTime);	
}


function checkScrollQ() {
	$("#mainDiv").animate({scrollTop:$(allQuestions[q]).offset().top}, "slow");
}

function checkScrollA() {
	$("#mainDiv").animate({scrollTop:$(allAnswers[q-1]).offset().top}, "slow");
}

function checkScrollW() {
	$("#mainDiv").animate({scrollTop:$(allWaiting[q-1]).offset().top}, "slow");
}

function sendInput() {
	allQuestions[q].textContent = textInput.value;
	$(allQuestions[q]).fadeTo(1000, 1);
	allQuestions[q].className = " question displayQuestion";
	textInput.value = "";
	sendResponse();
	checkScrollQ();
	q++;
}





