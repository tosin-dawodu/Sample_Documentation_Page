const colors = [
  "#060ba7",
  "green",
  "black",
  "yellow",
  "blue",
  "hsl(251,64%,50%)",
];
const header = document.getElementById("head");
//the variable can be called anything. also call the variable name in the eventlistener
header.addEventListener("mouseover", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  //header below is as a result of the variable name
  header.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
