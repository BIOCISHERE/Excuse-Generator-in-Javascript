/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = [
    "The Cat",
    "The Cyclist ",
    "The Racoon",
    "The Driver",
    "A Clown",
    "A Pincone"
  ];
  let action = ["Took my", "Threw my", "Yelled at my", "Stole my", "Bit my"];
  let what = ["Homework", "Toe", "Car", "Shoe"];
  let when = ["On the street", "In my house", "In my driveway"];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actnIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return `${who[whoIndx]} ${action[actnIndx]} ${what[whatIndx]} ${when[whenIndx]}`;
};
