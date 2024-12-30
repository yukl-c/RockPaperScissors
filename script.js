var comp_result;

var result = document.getElementById("result");

var player_score = 0;
var computer_score = 0;

window.onload = function() {
    document.getElementById('player-score').innerHTML = player_score;
    document.getElementById('comp-score').innerHTML = computer_score;
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
    document.getElementById("result").innerHTML = "你贏咗！";
}

function add_score_to_comp () {
    computer_score += 1;
    document.getElementById('comp-score').innerHTML = computer_score;
    document.getElementById("result").innerHTML = "你輸咗！";
}

function supper () {
    document.getElementById("result").innerHTML = "Super！";
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
    document.getElementById("result").innerHTML = "";
}