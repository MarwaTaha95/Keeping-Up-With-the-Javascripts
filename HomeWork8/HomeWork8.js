// Count of number of filled boxes, used to find whose turn is it.
var count = 0;

// Status of the game after it's over, 0 for winning and 1 for tie.
var status = 2;

// Possible choices to fill the boxes
var choices = ['X', 'O'];

// The value of the winner, X or O.
var winner = '';

// Find the main elements in the project
const boxes = document.querySelectorAll('.box');
const container = document.getElementById('container');
const result = document.getElementById('result');
const button = document.querySelector('button');


/**
 * Initialize the game.
 *
 * This function initializes the game with needed event
 * listeners to run the TicTacToe game properly
 *
 */
function initialize(){
	for(var i = 0; i< boxes.length; i++){
	  boxes[i].addEventListener('click', fillBox);
	}
		
	container.addEventListener('click', checkForWin);

	button.addEventListener('click', function(){
		for(var i = 0; i< boxes.length; i++){
			boxes[i].addEventListener('click', fillBox);
			boxes[i].innerHTML = '';
			boxes[i].classList.remove('win','lose');
			count = 0;
			result.innerHTML = '';
		}
	});	
}
	
/**
 * Write X or O in a certain box when clicked.
 *
 * This function fills the value of a clicked box with either X or O 
 * depending on who's turn is it.
 * The first box clicked will have X, then X and O switch until the end of
 * the game.
 *
 * @param {object} e 'The event that was fired, i.e. clicking on a box
 *
 */
function fillBox(e) {
    var choice = choices[ count % 2];
	count ++;
	this.innerHTML = choice;
	this.classList.add("innerText");
	this.removeEventListener('click', fillBox);
}

/**
 * Check if someone has won.
 *
 * This function search through the game board looking for a winning 
 * scenario. If it finds one, the game stops and the winner is announced 
 * When there is a winner, the board is disabled, until the user restarts
 * the game.
 *
 */
function checkForWin() {
	for(var i=0; i<3; i++){
		if(boxes[i*3].innerText === boxes[i*3+1].innerText && boxes[i*3].innerText === boxes[i*3+2].innerText && (boxes[i*3].innerText === 'X' || boxes[i*3].innerText === 'O')){
			boxes[i*3].classList.add("win");
			boxes[i*3+1].classList.add("win");
			boxes[i*3+2].classList.add("win");
			disableBoard();
			status =  0;
			winner = boxes[i*3].innerText;
			finalize();
		}
			
		if(boxes[i].innerText === boxes[i+3].innerText && boxes[i].innerText === boxes[i+6].innerText && (boxes[i].innerText === 'X'|| boxes[i].innerText === 'O')){
			boxes[i].classList.add("win");
			boxes[i+3].classList.add("win");
			boxes[i+6].classList.add("win");
			disableBoard();
			status =  0;
			winner = boxes[i].innerText;
			finalize();
		}
			
		if(boxes[i].innerText === boxes[4].innerText && boxes[i].innerText === boxes[8-i].innerText && (boxes[i].innerText === 'X' || boxes[i] === 'O')){
			boxes[i].classList.add("win");
			boxes[4].classList.add("win");
			boxes[8-i].classList.add("win");
			disableBoard();
			status =  0;
			winner = boxes[i].innerText;
			finalize();
		}

		if(count === 9){
			for(var i = 0; i< boxes.length; i++){
				boxes[i].classList.add('win');
				status = 1;
			}
			finalize();
		}
	}   
}
	
/**
 * Disable the game board.
 *
 * This function disables all boxes, so that the game is stopped
 * and the values of the boxes are no longer changable.
 *
 */
function disableBoard() {
	for(var i = 0; i< boxes.length; i++){
		boxes[i].removeEventListener('click', fillBox);
	}
}
	
/**
 * Finalize The game status after it's over.
 *
 * This function displays the result of the game after it's over.
 *
 */
function finalize(){
	if(status == 0){
		result.innerHTML = 'The Winner is ' + winner;
	}
	if(status == 1){
		result.innerHTML = 'Cats Game! no winner';
	}
}

// Start the game.
initialize();