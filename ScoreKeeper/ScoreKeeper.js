var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b1Score = 0;
var b2Score = 0;
var score1 = document.querySelector("#b1Span");
var score2 = document.querySelector("#b2Span");
var playTo = document.querySelector("#playTo");
var gameOver = false;
var reset = document.querySelector("b3");
var inputNum = document.querySelector("input[type = number]");

b1.addEventListener("click", function(){
	if(!gameOver){
	b1Score++;
	if(b1Score == playTo.textContent){
		score1.classList.add("winner");
		gameOver = true;
	}
	score1.textContent = b1Score;
	}
})

b2.addEventListener("click", function(){
	if(!gameOver){
	b2Score++;
	if(b2Score == playTo.textContent){
		score2.classList.add("winner");
		gameOver = true;
	}
		score2.textContent = b2Score;
}
});

b3.addEventListener("click", function(){
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	b1Score = 0;
	b2Score = 0;
	score1.textContent = b1Score;
	score2.textContent = b2Score;
	gameOver = false;
});



inputNum.addEventListener("change", function(){
	playTo.textContent = inputNum.value;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	b1Score = 0;
	b2Score = 0;
	score1.textContent = b1Score;
	score2.textContent = b2Score;
	gameOver = false;
})