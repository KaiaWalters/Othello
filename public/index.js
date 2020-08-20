
document.querySelectorAll('section').forEach(item => {
    item.addEventListener('click', event => {
      console.log("will turn green")
    })
  })

  document.querySelector('.outside').addEventListener('click', event => {
    console.log("HELLO")
  })



//user should be able to tap a cell and chage its color to their chosen color
//whne the user taps an cell if they are the first user it will turn black otherwise it will turn green 
//when the user taps a cell if they are black, this increases their count by one