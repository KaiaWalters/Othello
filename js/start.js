//set starting four - two white [d4, e5] and two black [d5, e4]

function begin(){
  var startingvalues = {};
  startingvalues["d4"] = "#FFFFFF";
  startingvalues["e5"] = "#FFFFFF";
  startingvalues["d5"] = "#000000";
  startingvalues["e4"] = "#000000";
  for(var element in startingvalues) {
    var color = startingvalues[element];
    document.getElementById(element).style.backgroundColor = color;
    document.getElementById(element).style.color = color;
    document.getElementById(element).style.display = "block";
  }
}

function disableinputboxes(){
  var player1 = document.getElementById("first_player_input").value;
  var player2 = document.getElementById("second_player_input").value;
  if( player1 == "" || player2 == ""){
    return [];
  }else{
    return [player1, player2];
  }
}

function log_data(text){
  current_logs = document.getElementById("logs").innerHTML;
  new_logs = text.concat(current_logs);
  document.getElementById("logs").innerHTML = new_logs;
}

function start_game(){
  begin();
  var players = disableinputboxes();
  if(players.length < 2){
    //log tell them to add players names
    log_data("<div> > Player names cant be null</div>");
  }else{
    //disable textboxes
    log_data("<div> > Start Game </div>");
    document.getElementById("first_player_input").disabled = true;
    log_data("<div> > Player 1 : " + players[0] + "</div>");
    document.getElementById("second_player_input").disabled = true;
    log_data("<div> > Player 2 : " + players[1] + "</div>");
    document.getElementById("main_btn").disabled = true;
    document.getElementById("main_btn").style.backgroundColor = "transparent";
    document.getElementById("main_btn").style.color = "#000000";
    document.getElementById("main_btn").innerHTML = players[0] + " <span id='player1_score'>0</span>  -- <span id='player2_score'>0</span> " + players[1];
  }
}
