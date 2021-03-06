window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(depoiments);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  //verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector("nav");

  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #depoiments,
    #depoiments header,
    #about,
    #about header,
    #about .content
`);

/* DEPOIMENTS */

var balls = document.querySelector(".balls");
var quant = document.querySelectorAll(".cards .card");
var atual = 0;
var card = document.getElementById("card-atual");
var next = document.getElementById("next");
var back = document.getElementById("back");
var rolar = true;

var ava = quant.length - 6;

for (let i = 0; i < ava; i++) {
  var div = document.createElement("div");
  div.id = i;
  balls.appendChild(div);
}

document.getElementById("0").classList.add("depoAtual");

var pos = document.querySelectorAll(".balls div");

pos.forEach(po => {
  po.addEventListener("click", () => {
    atual = po.id;
    rolar = false;
    slide();
  });
});

back.addEventListener("click", () => {
  atual--;
  rolar = false;
  slide();
});
next.addEventListener("click", () => {
  atual++;
  rolar = false;
  slide();
});

function slide() {
  if (atual >= ava) {
    atual = 0;
  } else if (atual < 0) {
    atual = ava - 1;
  }
  document.querySelector(".depoAtual").classList.remove("depoAtual");
  card.style.marginLeft = -85 * atual + "rem";
  document.getElementById(atual).classList.add("depoAtual");
}
setInterval(() => {
  if ((!rolar == true)) {
    rolar = true;
  } else {
    atual++;
    slide();
  }
}, 4000);