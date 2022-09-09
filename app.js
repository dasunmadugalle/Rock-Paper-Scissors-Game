var playerone = prompt('Plyer 1 Name:');
var playertwo = prompt('Player 2 Name ');



let options = ['👊','🖐','✌']
let x;
let y;
let values = []
let playerOne_points = 0
let playerTwo_points = 0
let matchPoint = 5
let remain = matchPoint

let match_results = []
let result = ''

// importing from the html file
var playerOne = document.getElementById('player-one-choice')
var playerTow = document.getElementById('player-two-choice')
var reRoll = document.getElementById('roll');
let player_one_score_html = document.getElementById('player-one-score')
let player_two_score_html = document.getElementById('player-two-score')
let reload = document.getElementById('reload')
let remain_html = document.getElementById('remain')
let winner_html = document.getElementById('winner-box')
let winner_text_html = document.getElementById('winner-text')
let playerOneName = document.getElementById('player_name_one')
let playerTwoName = document.getElementById('player_name_two')
let historyUl = document.getElementById('history')
let auto_btn = document.getElementById('autoMode')



player_one_score_html.innerHTML = playerOne_points;
player_two_score_html.innerHTML = playerTwo_points;
remain_html.innerHTML = remain;


playerOneName.innerHTML = playerone;
playerTwoName.innerHTML = playertwo;

function rollDise(){
    x = Math.floor(Math.random()*3)
    y = Math.floor(Math.random()*3)
    playerOne.innerHTML = options[x]
    playerTow.innerHTML = options[y]

    result = options[x] + ' ' + options[y]
    match_results.push(result)
    console.log(match_results)



    //changing of the total of the players

    if (x == 0 && y == 1){
        playerTwo_points++
        remain--
    }else if(x == 0 && y == 2){
        playerOne_points++
        remain--
    }else if(x == 1 && y == 0){
        playerOne_points++
        remain--
    }else if(x == 1 && y == 2){
        playerTwo_points++
        remain--
    }else if (x == 2 && y == 0){
        playerTwo_points++
        remain--
    }else if (x == 2 && y == 1){
        playerOne_points++
        remain--
    }
    //display them in html file
    player_one_score_html.innerHTML = playerOne_points;
    player_two_score_html.innerHTML = playerTwo_points;
    remain_html.innerHTML = remain;

}






let winner = ''
function findWinner(){
    if (playerOne_points > playerTwo_points){
        winner = 'Winner is ' + playerone
    }else if(playerTwo_points > playerOne_points){
        winner = 'Winner is ' + playertwo
    }else{
        winner = 'Match were drawn'
    }
    winner_text_html.innerHTML = winner;
}



reRoll.addEventListener("click", function() {
    if (remain > 0){
        rollDise();
    }

    if (remain === 0){
        winner_html.style.visibility = 'visible';
        findWinner();
    }
});

reload.addEventListener("click",function(){
    remain = matchPoint
    playerOne_points = 0
    playerTwo_points = 0


    playerOne.innerHTML = ''
    playerTow.innerHTML = ''


    player_one_score_html.innerHTML = playerOne_points;
    player_two_score_html.innerHTML = playerTwo_points;
    remain_html.innerHTML = remain;
    winner_html.style.visibility = 'hidden';
})



//auto modde button

auto_btn.addEventListener('click',function(){
    while (remain > 0){
        rollDise()
    }
    winner_html.style.visibility = 'visible';
    findWinner();
})