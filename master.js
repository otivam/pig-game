var player, scoreGlobal, scoreCurrent, isGameOn;

init();

//Roll button
document.querySelector('.roll-dice').addEventListener('click', function() {
  if (isGameOn) {
    //Generating a random number and changing the dice
    var dice = Math.floor(Math.random() * 6)+1;
    document.querySelector('.dice-image').src='dice-' + dice + '.png';

    //Adding the Current score and switching the player if dice === 1
    if (dice !== 1) {
      scoreCurrent += dice;
      document.querySelector('.current' + player).innerHTML='<span style="color:black;">Current</span><br/>' + scoreCurrent;
    }else
      nextPlayer();
  }
});


//Hold button
document.querySelector('.hold-dice').addEventListener('click', function() {
  if (isGameOn) {
    //Adding the current score to the GLOBAL score holder
    scoreGlobal[player-1] = scoreGlobal[player-1] + scoreCurrent;
    document.querySelector('.score' + player).textContent = scoreGlobal[player-1];

    if (scoreGlobal[player-1] >= 100) {
      document.querySelector('.player' + player).innerHTML = 'WINNER!';
      isGameOn = false;
    } else {
      nextPlayer();
    }
  }
});


//New game button
document.querySelector('.new-game').addEventListener('click', init);


//Next player in separate func
function nextPlayer() {
  player === 1 ? player = 2 : player = 1;
  scoreCurrent = 0;

  document.querySelector('.current1').innerHTML='<span style="color:black;">Current</span><br/>' + 0;
  document.querySelector('.current2').innerHTML='<span style="color:black;">Current</span><br/>' + scoreCurrent;

  document.getElementById('p1').classList.toggle('active');
  document.getElementById('p1-score').classList.toggle('active');
  document.getElementById('p2').classList.toggle('active');
  document.getElementById('p2-score').classList.toggle('active');
}


//New game
function init() {
  player = 1;
  scoreGlobal = [0,0];
  scoreCurrent = 0;
  isGameOn = true;

  document.querySelector('.score1').textContent = 0;
  document.querySelector('.current1').innerHTML='<span style="color:black;">Current</span><br/>' + 0;
  document.querySelector('.score2').textContent = 0;
  document.querySelector('.current2').innerHTML='<span style="color:black;">Current</span><br/>' + 0;
  document.querySelector('.player1').textContent = 'PLAYER 1';
  document.querySelector('.player2').textContent = 'PLAYER 2';
  document.getElementById('p1').classList.remove('active');
  document.getElementById('p1-score').classList.remove('active');
  document.getElementById('p2').classList.remove('active');
  document.getElementById('p2-score').classList.remove('active');
  document.getElementById('p1').classList.add('active');
  document.getElementById('p1-score').classList.add('active');
}
