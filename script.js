var dice = Math.floor(Math.random()*6)+1;
// console.log(dice);
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
score =[0,0];
var roundScore = 0;
var activePlayer = 0;
var lastDice ;



document.querySelector('.dice').style.display = 'NONE';
document.querySelector('.btn-roll').addEventListener('click',function() {
var dice= Math.floor(Math.random()*6)+1;
var diceDOM = document.querySelector('.dice');
diceDOM.style.display  = 'block';
diceDOM.src = "dice-" +dice+ ".png"; 
if (dice ==6 && lastDice ==6) {

}
else if (dice !== 1) {
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
	lastDice = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	score[activePlayer] += roundScore;
	document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
	if(score[activePlayer] >=20) {
		document.querySelector('#name-' +activePlayer).textContent = 'Winner';
		document.querySelector('.dice').style.display  = 'none';

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
})
document.querySelector('.btn-new').addEventListener('click', function() {
	

score =[0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



})



