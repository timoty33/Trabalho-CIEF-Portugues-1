document.querySelectorAll(".nav-option").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("link clicado: " + link);
    const targetId = link.dataset.target;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll para baixo - esconde o header
    header.classList.add("hidden");
  } else {
    // Scroll para cima - mostra o header
    header.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const frases = [
  "Você confia numa\n máquina que toma\n decisões?",
  "Máquinas que pensam.\n E aprendem.",
  "Como funciona uma\n mente artificial?",
  "Por que a IA está \nem tudo — mesmo que você\n não perceba?",
];

const tituloChamativo = document.getElementById("title");
let fraseIndex = 0;
let letraIndex = 0;
let aguardandoApagar = false;

function digitar() {
  const frase = frases[fraseIndex];

  if (!aguardandoApagar) {
    tituloChamativo.innerHTML = frase
      .slice(0, letraIndex++)
      .replace(/\n/g, "<br>");

    if (letraIndex > frase.length) {
      aguardandoApagar = true;

      setTimeout(() => {
        tituloChamativo.innerHTML = ""; // Apaga tudo de uma vez
        letraIndex = 0;
        // Espera 1.5s antes de começar a próxima frase
        setTimeout(() => {
          fraseIndex = (fraseIndex + 1) % frases.length;
          aguardandoApagar = false;
          digitar();
        }, 500);
      }, 2000);

      return;
    }

    setTimeout(digitar, 150);
  }
}

digitar();
