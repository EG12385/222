

function rollDice(player) {
  let users = {
    Playerl: 0,
    Player2: 0,
    Player3: 0,
    Player4: 0,
    Player5: 0,
    Player6: 0
  }

  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);

    // var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    // var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomNumber1 = document.getElementById('die-1').getAttribute('data-roll');
    var randomNumber2 = document.getElementById('die-2').getAttribute('data-roll');

    users[player] = +randomNumber1 + +randomNumber2;
    document.getElementById(player).innerHTML = (player + " = " + users[player]);
 });

}


function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function btnClick()  {
  e.preventDefault();
  rollDice();
  toggleClasses();
  getRandomNumbe();
}

// function rollMyDice(player){
  // playSound();
  // $('#'+player).click(function (){ rollDice(player); });
// }

// function playSound () {
//   document.getElementById('play').play();
// }

$('#Player1').click(function (){ rollDice('Player1'); });
$('#Player2').click(function (){ rollDice('Player2'); });
$('#Player3').click(function (){ rollDice('Player3'); });
$('#Player4').click(function (){ rollDice('Player4'); });
$('#Player5').click(function (){ rollDice('Player5'); });
$('#Player6').click(function (){ rollDice('Player6'); });

  // document.getElementById("roll-button").addEventListener("click", rollDice);
  // document.getElementById("roll-button2").addEventListener("click", rollDice);
  // document.getElementById("roll-button3").addEventListener("click", rollDice);
  // document.getElementById("roll-button4").addEventListener("click", rollDice);
  // document.getElementById("roll-button5").addEventListener("click", rollDice);
  // document.getElementById("roll-button6").addEventListener("click", rollDice);
