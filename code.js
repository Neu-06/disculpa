const h1 = document.getElementById("h1");
const textos = [
  "solo quiero decirte que lo siento y que me perdones",
  "se que esto no es suficiente para que me perdones",
  "pero la verdad nose que mas hacer, me siento impotente",
  "talvez sea el hombre mas estupido, tonto del mundo",
  "talvez suene egoista pero en verdad es que te quiero para mi",
  "no te dire la frase cliche de 'es que yo no soy asi'",
  "no es que trate de que lo olvides y ya",
  "siento que puedo ser mejor que lo que soy ahora",
  "no es que no aproveche la oportunidad que me estas dando",
  "intento aprovechar, pero creo que solo lo arruino todo",
  "no quiero perder esto que se empezo a formar entre nosotros",
  "es que contigo aprendi a soñar, ilucionarme, ",
  "hacer planes a futuro, contigo senti cosas,",
  "cosas que nunca antes habia sentido, cosas tan complejas",
  "que hay veces que no nose como reaccionar",
  " y al final solo termino equivocandome,",
  "haciendote daño, y enserio que no te quiero hacer daño,",
  "pero creo que eso es lo unico que estoy logrando",
  "talvez deberia dejarte ir con alguien que no te lastime",
  "per me aferro a ti con todo mi ser y no te quiero dejar ir",
  "es que te has vuelto alguien muy importante para mi",
  "y quiero construir un futuro contigo",
  "no te quiero perder",
  "perdon si te hago daño, perdon si solo te lastimo",
  "pero quiero ese futuro en el que somos felices",
  "e intento cambiar para ser digno de ese futuro contigo",
  "TE AMO",
];

let indice = 0;
let reproduciendo = false;

function mensaje() {
  var audio1 = new Audio("Speakers.mp3"); 
  
  if (!repr){
    audio1.play();
    repr=true;
  } 
  
  if (indice < textos.length) {
    h1.textContent = textos[indice];
    indice++;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  alert("Para Luci 💕");
  alert("(dale click a la pantalla para avanzar)");
});

document.addEventListener("click", mensaje);
