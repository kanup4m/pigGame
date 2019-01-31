var dice = Math.floor(Math.random()*6)+1;
// console.log(dice);
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
var roundScore = 0;
var activePlayer = 0;



document.querySelector('.dice').style.display = 'NONE';
document.querySelector('.btn-roll').addEventListener('click',function() {
var dice= Math.floor(Math.random()*6)+1;
var diceDOM = document.querySelector('.dice');
diceDOM.style.display  = 'block';
diceDOM.src = "dice-" +dice+ ".png"; 
if (dice !== 1) {
	roundScore = dice+roundScore;
	document.querySelector('#current-' +activePlayer).textContent = roundScore;
}
else {
	activePlayer === 0 ? activePlayer =1 : activePlayer =0 ;
	roundScore = 0;
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display  = 'none';


	}
});



