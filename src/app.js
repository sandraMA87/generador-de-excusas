/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Crear una funcion
window.onload = function() {};

//Definir la excusa
let generateExcuse = () => {
  let who = ["Sandra", "Mi madre", "Ivan", "Sofía"];
  let what = ["se enamoró", "comió", "disfrutó", "se cayó"];
  let when = [
    "encima de un italiano",
    "en una pizzería de Roma",
    "en los canales venecianos",
    "en el Coliseo",
    "mientras rezaba "
  ];
  let emoji = ["&#9996", "&#128165", "&#x1F60F", "&#x1F91D"];

  //Hacer que esa excusa muestre de forma aleatoria cada elemento del who, what, when

  let excuseWho = who[Math.floor(Math.random() * who.length)];
  let excuseWhat = what[Math.floor(Math.random() * what.length)];
  let excuseWhen = when[Math.floor(Math.random() * when.length)];
  let excuseEmoji = emoji[Math.floor(Math.random() * emoji.length)];

  return (
    excuseWho + " " + excuseWhat + " " + excuseWhen + " " + excuseEmoji + "."
  );
};

document.querySelector("#excuse").innerHTML = generateExcuse();
