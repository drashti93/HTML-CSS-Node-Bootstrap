var colorCount = 6;
var colors = generateRandomColors(colorCount);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonPlay = document.querySelector("#buttonPlay");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.background = clickedColor;
			changeColors(clickedColor);
			buttonPlay.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again"
			
		}
	})

};

buttonPlay.addEventListener("click", function(){
	colorCount = 6;
	if(easy.classList == "selected"){
		colorCount = 3;
	}
	if(buttonPlay.textContent === "Play Again?"){
		reset();
		buttonPlay.textContent = "New Colors"
		message.textContent = "";
	}
	else {
		reset();
	}
})

easy.addEventListener("click", function(){
	colorCount = 3;
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors = generateRandomColors(3); 
	reset();
	for(var i = 3; i<squares.length; i++){
		squares[i].style.display = "none";
	}
})

hard.addEventListener("click", function(){
	colorCount = 6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors = generateRandomColors(6);
	reset();
		for(var i = 3; i<squares.length; i++){
		squares[i].style.display = "";
	}
})

function reset(){
	colors = generateRandomColors(colorCount);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<colors.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}

function changeColors(color){
	for(var i=0; i< squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i =0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
	
}