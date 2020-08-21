
let playerOneScore = 0
let playerTwoScore = 0 
let tokenToPlace 
//TODO add function to register players and switch off between rounds
let player = "playerTwo"

document.getElementsByClassName("othello_board").addEventListener('click', placePlayerToken())

function placePlayerToken(player) {
    document.querySelectorAll('.emptyCell').forEach(item => {
      item.addEventListener('click', event => {
        console.log("second")
        checkPlayer(player)
        item.classList.add(tokenToPlace)
        console.log(playerOneScore, playerTwoScore)
      })
    })
  }

  function checkPlayer(currentPlayer) {
    currentPlayer = player

    if(player === "playerOne"){
      tokenToPlace = "playerOneToken"
      playerOneScore += 1

    }else if(player == "playerTwo"){
      tokenToPlace = "playerTwoToken"
      playerTwoScore += 1 
    }

  } 






//user should be able to tap a cell and chage its color to their chosen color
//whne the user taps an cell if they are the first user it will turn black otherwise it will turn green 
//when the user taps a cell if they are black, this increases their count by one