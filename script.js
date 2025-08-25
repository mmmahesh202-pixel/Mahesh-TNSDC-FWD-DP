// Typing Effect

const text = "Hi, I'm Mahesh 👋";

let index = 0;

function typeEffect() {

  if (index < text.length) {

    document.getElementById("typing-text").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  }

}

typeEffect();