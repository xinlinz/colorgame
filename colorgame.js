var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    // remove for both, hard code
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    // add to the one we selected
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
  });
}

function reset() {
  // change button content
  resetButton.textContent = "New Colors";
  // change message display
  messageDisplay.textContent = "";
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new color from array
  pickedColor = pickColor();
  // change picked color at header
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  // change header background color
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  // add initial color
  squares[i].style.backgroundColor = colors[i];
  // attached click listener to each square
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeToWinColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again :(";
    }
  });
}

function changeToWinColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

function generateRandomColors(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr[i] = randomColor();
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
