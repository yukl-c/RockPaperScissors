var comp_result;

var player_score = 0;
var computer_score = 0;

var rounds = 3;
var winRounds = 2;

var choices = document.getElementsByClassName('choices');
console.log(choices);

function disabledBtn() {
    // Access each choice element and disable it
    for (var i = 0; i < choices.length; i++) {
        choices[i].classList.add('disabled');
        choices[i].removeAttribute('onclick'); // Remove the onclick attribute
    }
}

function winningSituation() {
    if (player_score === winRounds) {
        document.getElementById('result').innerHTML = "Player贏了!";
        disabledBtn();
    } else if (computer_score === winRounds) {
        document.getElementById('result').innerHTML = "Computer贏了!";
        disabledBtn();
    }
}

window.onload = function() {
    document.getElementById('player-score').innerHTML = player_score;
    document.getElementById('comp-score').innerHTML = computer_score;
    document.getElementById('rounds').innerHTML = rounds;
    document.getElementById('winRounds').innerHTML = winRounds;
}

function random_comp_result () {
    var random_result = Math.floor(Math.random() * 3);
    switch (random_result) {
        case 0:
            comp_result = "paper";
            break;
        case 1:
            comp_result = "scissors";
            break;
        case 2:
            comp_result = "rock";
            break;
    }
    console.log(comp_result);
}

function add_score_to_player () {
    player_score += 1;
    document.getElementById('player-score').innerHTML = player_score;
    document.getElementById("currentResult").innerHTML = "Player加一分！";
    winningSituation();
}

function add_score_to_comp () {
    computer_score += 1;
    document.getElementById('comp-score').innerHTML = computer_score;
    document.getElementById("currentResult").innerHTML = "Computer加一分！";
    winningSituation();
}

function supper () {
    document.getElementById("currentResult").innerHTML = "Super！";
}

function handle_paper () {
    random_comp_result();
    switch (comp_result) {
        case "paper":
            supper();
            break;
        case "scissors":
            add_score_to_comp();
            break;
        case "rock":
            add_score_to_player();
            break;
    }
}

function handle_scissors () {
    random_comp_result();
    switch (comp_result) {
        case "paper":
            add_score_to_player();
            break;
        case "scissors":
            supper();
            break;
        case "rock":
            add_score_to_comp();
            break;
    }
}

function handle_rock () {
    random_comp_result();
    switch (comp_result) {
        case "paper":
            add_score_to_comp();
            break;
        case "scissors":
            add_score_to_player();
            break;
        case "rock":
            supper();
            break;
    }
}

function restart () {
    player_score = 0;
    computer_score = 0;
    document.getElementById('player-score').innerHTML = player_score;
    document.getElementById('comp-score').innerHTML = computer_score;
    document.getElementById("currentResult").innerHTML = "";
    document.getElementById('rounds').innerHTML = 3;
    document.getElementById('winRounds').innerHTML = 2;
    document.getElementById('result').innerHTML = '';
    for (var i = 0; i < choices.length; i++) {
        choices[i].classList.remove('disabled');
        choices[i].setAttribute('onclick', `handle_${choices[i].id}()`); // Remove the onclick attribute
    }
}

function winningRounds (event) {
    event.preventDefault();
    rounds = document.getElementById("inputRounds").value;
    console.log("Rounds: " + rounds.toString());
    winRounds = Math.ceil(rounds * 0.51);
    console.log("Win Rounds: " + winRounds.toString());
    document.getElementById('rounds').innerHTML = rounds;
    document.getElementById('winRounds').innerHTML = winRounds;
}

document.getElementById("roundsForm").addEventListener("submit", winningRounds);