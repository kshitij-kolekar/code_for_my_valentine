window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("small", window.scrollY > 50);

  let poemLines = document.querySelector(".poem");
  poemLines.classList.toggle("visible", window.scrollY > 50);

  let poemLines1 = document.querySelector(".heropoem");
  poemLines1.classList.toggle("visible", window.scrollY > 50);

  let poemLines2 = document.querySelector(".menupoem");
  poemLines2.classList.toggle("visible", window.scrollY > 650);

  let poemLines3 = document.querySelector(".ingpoem");
  poemLines3.classList.toggle("visible", window.scrollY > 1420);

  let poemLines4 = document.querySelector(".processpoem");
  poemLines4.classList.toggle("visible", window.scrollY > 2770);

  let poemLines5 = document.querySelector(".cafepoem");
  poemLines5.classList.toggle("visible", window.scrollY > 4475);

  let poemLines6 = document.querySelector(".orderpoem");
  poemLines6.classList.toggle("visible", window.scrollY > 4475)
});

document.addEventListener("DOMContentLoaded", function () {
  let questionButton = document.getElementById("questionbutton");
  let dialog = document.getElementById("valentine-dialog");
  let yesBtn = document.getElementById("yes-btn");
  let noBtn = document.getElementById("no-btn");
  let poemLines6 = document.querySelector(".orderpoem");

  let timesOpen = 1;
  let yes = 0;

  questionButton.addEventListener("click", function () {
    setTimeout(() => {
      dialog.style.display = "block";
    }, 500);

    if (timesOpen != 1) {
      if (yes) {
        setTimeout(() => {
          createConfetti();
        }, 500);
        setTimeout(() => {
          dialog.style.display = "none";
        }, 10000);
      } else {
        setTimeout(() => {
          dialog.style.display = "none";
        }, 10000);
      }
    }
    poemLines6.classList.add("enable");
  });

  yesBtn.addEventListener("click", function () {
    dialog.innerHTML = "<h2>Yay! ❤️ You made my day!</h2><p>Now, let’s grab that coffee together ☕</p>";
    createConfetti();
    setTimeout(() => {
      dialog.style.display = "none";
    }, 10000);

    timesOpen += 1;
    yes = 1;
  });

  noBtn.addEventListener("mouseover", function () {
    let newX = Math.random() * (500 - 0);
    let newY = Math.random() * (250 - 0);
    noBtn.style.position = "absolute";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  });

  noBtn.addEventListener("click", function () {
    dialog.innerHTML = "<h2>Are you sure? 🥺</h2><p>Maybe next year then? I'll be waiting... ☕💔</p>";
    setTimeout(() => {
      dialog.style.display = "none";
    }, 10000);

    timesOpen += 1;
  });

  function createConfetti() {
    let confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {
      let confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 10000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page has fully loaded!");
  document.querySelector(".ingpoem").style.display = "block";
});