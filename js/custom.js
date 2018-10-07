var player1 = 1;
var player2 = 1;
var turn = 1;
var scores = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

var message = document.querySelector('#message');
var board = document.querySelector('#board');
var request = document.querySelector('#request');
var instructions = document.querySelector('#instructions');

var boxes = document.querySelectorAll('.box');

document.querySelector('#submit').addEventListener('click', startClicked);

function startClicked(){	
	player1 = document.querySelector("#entry1").value;
	player2 = document.querySelector("#entry2").value;
	
	if(player1 !="" && player2 !=""){
		message.classList.add("hidden");
		request.classList.add("hidden");
		board.classList.remove("hidden");
		instructions.innerHTML = "Ready Player 1... " + player1 + " it is your turn!";
		for(var i = 0; i < boxes.length; i++){
			boxes[i].addEventListener("click",
			function(e){boxClicked(e);},false);
	}
	}else{
		message.innerHTML = "Please enter both player's names";
		message.className = "alert alert-warning";
	}
}
 function boxClicked(e){
	var focusBox = document.querySelector('#' + e.target.id);
	if(focusBox.innerHTML !="x" && focusBox.innerHTML !="o" && turn !="fin"){
		var boxRow = focusBox.dataset.row;
		var boxCol = focusBox.dataset.col;
		var character, playerName;
		if(turn == 1){
			character = "x"
			instructions.innerHTML = player2 + " it is your turn";
			playerName = player1;
			turn = 0;
		}else{
			character = "o";
			instructions.innerHTML = player1 + " it is your turn";
			playerName = player2;
			turn = 1;
	}
	focusBox.innerHTML = character;
	scores[boxRow][boxCol] = character;
	checkWin(boxRow, boxCol, character, playerName);
	}
} 

function checkWin(boxRow, boxCol, character, playerName){
	if(scores[boxRow][0] == character && scores[boxRow][1] == character && scores[boxRow][2] == character){
		rowWin(boxRow);
		playerWin(playerName);
	}
	if(scores[0][boxCol] == character && scores[1][boxCol] == character && scores[2][boxCol] == character){
		colWin(boxCol);
		playerWin(playerName);
	}
	if(scores[0][0] == character && scores[1][1] == character && scores[2][2] == character){
		diagonalWin("down");
		playerWin(playerName);
	}
	if(scores[2][0] == character && scores[1][1] == character && scores[0][2] == character){		
		diagonalWin("up");
		playerWin(playerName);
	}
}
function rowWin(row){
	var rowLetter
	if(row == 0){
		rowLetter = "a";
	}else if(row == 1){
		rowLetter = "b";
	}else{
		rowLetter = "c";
	}
	document.querySelector('#' + rowLetter + '1').classList.add("winningBox");
	document.querySelector('#' + rowLetter + '2').classList.add("winningBox");
	document.querySelector('#' + rowLetter + '3').classList.add("winningBox");
}

function colWin(col){
	col++;
	document.querySelector('#a' + col).classList.add("winningBox");
	document.querySelector('#b' + col).classList.add("winningBox");
	document.querySelector('#c' + col).classList.add("winningBox");
}

function diagonalWin(down){
	if(down){
		document.querySelector('#a1').classList.add("winningBox");
			document.querySelector('#c3').classList.add("winningBox");
	}else{	
	document.querySelector('#c1').classList.add("winningBox");
		document.querySelector('#a3').classList.add("winningBox");
	}
	document.querySelector('#b2').classList.add("winningBox");
}
function playerWin(playerName){
	message.classList.remove("hidden");
	message.innerHTML = "Congratulations " + playerName + " you have won! - Click to play again";
	message.className = "alert alert-success";
	instructions.innerHTML = "A strange game. The only winning move is not to play.";
	turn = "fin";
	document.querySelector(".game").classList.remove("active");
	document.querySelector('#message').addEventListener('click', resetBoard);
}
function resetBoard(){
	turn = Math.floor((Math.random() * 2) + 1);;
	scores = [
	[0,0,0],
	[0,0,0],
	[0,0,0]];
	for(var i = 0; i < boxes.length; i++){
			boxes[i].innerHTML = "";
			boxes[i].classList.remove("winningBox");
	}
	document.querySelector(".game").classList.add("active");
	message.classList.add("hidden");
	if(turn == 1){
			character = "x"
			instructions.innerHTML = player2 + " it is your turn";
			playerName = player1;
			turn = 0;
		}else{
			character = "o";
			instructions.innerHTML = player1 + " it is your turn";
			playerName = player2;
			turn = 1;
	}
}	