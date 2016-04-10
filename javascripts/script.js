var mainDiv = document.getElementById("mainDiv");
var textInput = document.getElementById("textInput");
var send = document.getElementById("send");
var menu = document.getElementById("menu");
var scrollMenu = document.getElementById("scrollMenu");
var exitMenu = document.getElementById("quit");
var links = document.querySelectorAll(".menuCont");

var allQuestions = $(".question");
var allAnswers = $(".answer");
var allWaiting = $(".waiting");
var q = 0;
var a = 0;

var responseTime = 1500;

$(document).ready(function() {
	textInput.focus();
});

$(document).keypress(function(e) {
	if (e.which == 13) {
	sendInput();
	}
});

send.addEventListener("click", function() {
	sendInput();
});

menu.addEventListener("click", function(){
	scrollMenu.style.left = "0";
});

scrollMenu.addEventListener("click", function(){
	setTimeout(function() {scrollMenu.style.left = "-100vw";},500);
});

exitMenu.addEventListener("click", function(){
	setTimeout(function() {scrollMenu.style.left = "-100vw";},500);
});


links[0].addEventListener("click",function(){
		setTimeout(function(){
			location.href = 'index.html';	
		},1300);
});

links[1].addEventListener("click",function(){
		setTimeout(function(){
			location.href = 'story2.html';	
		},1300);
});

links[2].addEventListener("click",function(){
		setTimeout(function(){
			location.href = 'story3.html';	
		},1300);
});

links[3].addEventListener("click",function(){
		setTimeout(function(){
			location.href = 'story4.html';	
		},1300);
});

// links[4].addEventListener("click",function(){
// 		setTimeout(function(){
// 			location.href = 'story5.html';	
// 		},1300);
// });


function sendResponse() {	
	
	setTimeout(function(){

		allWaiting[q-1].className = "displayWait";
		checkScrollW();

	
	},500);
	
	setTimeout(function() {
	
		allWaiting[q-1].className = "waiting";
		$(allAnswers[q-1]).fadeTo(500, 1);
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
	$(allQuestions[q]).fadeTo(500, 1);
	allQuestions[q].className = " question displayQuestion";
	textInput.value = "";
	sendResponse();
	checkScrollQ();
	q++;
}







