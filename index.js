import dogs from "./data.js";
import Character from "./Character.js";

document.getElementById("like-btn").addEventListener("click", like);
document.getElementById("nope-btn").addEventListener("click", nope);
document.getElementById("logo-btn").addEventListener('click', refresh)

let dogArray = ["rex", "bella", "teddy"];
let isWaiting = false

function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Character(nextDogData) : {};
}

let currenttDog = getNewDog();

function like() {
  if (!isWaiting){
    currenttDog.hasBeenLiked = true
    render();
    isWaiting = true
    setTimeout(()=>{
      currenttDog = getNewDog();
      render();
      isWaiting = false
    },1500)}
  
}

function nope() {
  if (!isWaiting){
    currenttDog.hasBeenSwiped = true
    render();
    isWaiting = true
    setTimeout(()=>{
      currenttDog = getNewDog();
      render();
      isWaiting = false
    },1500)}
  
}

function refresh(){
    window.location.reload()
}

function render() {
  document.getElementById("generated").innerHTML = currenttDog.getDogHtml();
}

render();
