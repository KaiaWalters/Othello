cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
rows = [1, 2, 3, 4, 5, 6, 7, 8];
//set starting four - two white [d4, e5] and two black [d5, e4]

//create file for static variables
var turnCount = 0
var playerTurn;
var playerOneScore = 0;
var playerTwoScore = 0;
var players=[];
var playerOneTokenColor = "black"
var playerTwoTokenColor = "white"


//S
function begin(){
  var startingvalues = {};
  startingvalues["d4"] = playerTwoTokenColor;
  startingvalues["e5"] = playerTwoTokenColor;
  startingvalues["d5"] = playerOneTokenColor;
  startingvalues["e4"] = playerOneTokenColor;
  for(var element in startingvalues) {
    var color = startingvalues[element];
    document.getElementById(element).style.backgroundColor = color;
    document.getElementById(element).style.color = color;
    document.getElementById(element).style.display = "block";
  }
}

function disableinputboxes(playerOne, playerTwo){
  if( playerOne == "" || playerTwo == ""){
    return [];
  }else{
    return [playerOne, playerTwo];
  }
}

function log_data(text){
  current_logs = document.getElementById("logs").innerHTML;
  new_logs = text.concat(current_logs);
  document.getElementById("logs").innerHTML = new_logs;
}

function coordinates(event){
  max = 500;
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  if(x > (max/10) && x < (max)-(max/10) && y > (max/10) && y < (max)-(max/10)){
    var point_min = 50;
    var point_max = 450;
    //get x coordinates
    x_coord = Math.floor(cols.length - ((point_max - x) / point_min));
    //get y coordinates
    y_coord = Math.floor(cols.length - ((point_max - y) / point_min));
    log_data("<div> > " + cols[x_coord] + rows[y_coord].toString() + "</div>")
  }
}

function start_game(){
  begin();
  var player1 = document.getElementById("first_player_input").value;
  var player2 = document.getElementById("second_player_input").value;
  players = disableinputboxes(player1, player2);
  if(players.length < 2){
    log_data("<div> > Player names cant be null</div>");
  }else{
    log_data("<div> > Start Game </div>");
    document.getElementById("first_player_input").disabled = true;
    log_data("<div> > Player 1 : " + players[0] + "</div>");
    document.getElementById("second_player_input").disabled = true;
    log_data("<div> > Player 2 : " + players[1] + "</div>");
    document.getElementById("main_btn").disabled = true;
    document.getElementById("main_btn").style.backgroundColor = "transparent";
    document.getElementById("main_btn").style.color = "#000000";
    document.getElementById("main_btn").innerHTML = players[0] + " <span id='player1_score'>0</span>  -- <span id='player2_score'>0</span> " + players[1];
    placePlayerToken()
  }
}

function placePlayerToken() {
  document.querySelectorAll('.inside').forEach(item => {
    item.addEventListener('click', event => {
      var tokenToPlace
      if(item.children[0].style.display === "block"){
        alert("You can not place a new token in an occupied cell.")
        return
      }
      turnCount += 1
      determinePlayerTurn(turnCount)
      console.log("FIRST","Turn Count:", turnCount, "Player Turn:", playerTurn,"Scores: ", playerOneScore, playerTwoScore)

      if(playerTurn == players[1]){
        buildPlayerToken(playerTwoTokenColor, item.children[0])
        playerTwoScore += 1
      }else if(playerTurn == players[0]) {
        buildPlayerToken(playerOneTokenColor, item.children[0])
        playerOneScore += 1
      }
      updateScoreBoard()
      console.log("Current Score",playerOneScore, playerTwoScore)
    })
  })
}

function updateScoreBoard() {
  document.getElementById("player1_score").innerHTML = `${playerOneScore}`
  document.getElementById("player2_score").innerHTML = `${playerTwoScore}`
};

function determinePlayerTurn(turnCount) {
  if(turnCount % 2 == 0) {
    playerTurn = players[1]
  }else{
    playerTurn = players[0]
  }
  console.log("THIRD", "Player Turn", playerTurn)
}

function buildPlayerToken(color, element) {
  element.style.backgroundColor = color;
  element.style.color = color;
  element.style.display = "block";
}

function flipPlayer(element){
  current_color = document.getElementById(element).style.color;
  if(current_color == "white"){
    document.getElementById(element).style.color = "black";
    document.getElementById(element).style.backgroundColor = "black";
  }
  else{
    document.getElementById(element).style.color = "white";
    document.getElementById(element).style.backgroundColor = "white";
  }
}

function horizantal_check(element){
  min_value = 1;
  max_value = 8;
  element_color = document.getElementById(element).style.color;
  y_value = parseInt(element[1]);
  try{
    for(x=(y_value+1); x<(max_value); x++){
      checking_element = element[0].concat(x.toString());
      if(document.getElementById(checking_element).style.color == element_color){
        capture_between(0, element, checking_element, element_color);
        break;
      }
    }
    for(y=(y_value-1); y>(min_value); y--){
      checking_element = element[0].concat(y.toString());
      if(document.getElementById(checking_element).style.color == element_color){
        capture_between(0, checking_element, element, element_color);
        break;
      }
    }
  }
  catch(err){
    console.log(err);
  }
}

function vertical_check(){
  //x values down
    //find next location of similar color
      //if any inbetween flip
  //x values up
    //find next location of similar color
      //if any inbetween flip
}

function diagonal_check(){
  //
}

function capture_between(type, starting_element, ending_element, element_color){
  //0 - horizantal
  //1 - vertical
  //2 - diagonal
  if(type == 0){
    y_val = parseInt(starting_element[1]);
    for(x=y_val; x<ending_element[1]; x++){
      next_element = starting_element[0].concat(x.toString());
      if(document.getElementById(next_element).style.color != "" && document.getElementById(next_element).style.color != element_color){
        flipPlayer(next_element);
      }
    }
  }
}
