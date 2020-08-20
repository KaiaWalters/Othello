cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
rows = [1, 2, 3, 4, 5, 6, 7, 8];

//hide all elements
function hide_elements(cols, rows){
    for(i=0; i < cols.length; i++){
      for(j=0; j < rows.length; j++){
        element_id = (cols[i].concat(rows[j].toString()));
        document.getElementById(element_id).style.display = "none";
      }
    }
}

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

function start_game(){
  hide_elements(cols, rows);
  begin();
}
