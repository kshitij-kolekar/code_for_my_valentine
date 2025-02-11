window.addEventListener("scroll", function () {
  // Trigger For Change In Header After Scroll
  let header = document.querySelector("header");
  header.classList.toggle("small", window.scrollY > 50);

  // Trigger For Change In Poem In Header Section
  let poemLines = document.querySelector(".poem");
  poemLines.classList.toggle("visible", window.scrollY > 50);

  // Trigger For Change In Poem In Welcome Section
  let poemLines1 = document.querySelector(".heropoem");
  poemLines1.classList.toggle("visible", window.scrollY > 50);

  // Trigger For Change In Poem In Menu Section
  let poemLines2 = document.querySelector(".menupoem");
  poemLines2.classList.toggle("visible", window.scrollY > 650);

  // Trigger For Change In Poem In Ingredient Section
  let poemLines3 = document.querySelector(".ingpoem");
  poemLines3.classList.toggle("visible", window.scrollY > 1420);

  // Trigger For Change In Poem In Timeline Section
  let poemLines4 = document.querySelector(".processpoem");
  poemLines4.classList.toggle("visible", window.scrollY > 2770);

  // Trigger For Change In Poem In Table For Two Section
  let poemLines5 = document.querySelector(".cafepoem");
  poemLines5.classList.toggle("visible", window.scrollY > 4475);

  // Checkpoint For Question Dialogue Box Section
  let poemLines6 = document.querySelector(".orderpoem");
  poemLines6.classList.toggle("visible", window.scrollY > 4475)
});

document.addEventListener("DOMContentLoaded", function () {
  let questionButton = document.getElementById("questionbutton");
  let dialog = document.getElementById("valentine-dialog");
  let yesBtn = document.getElementById("yes-btn");
  let noBtn = document.getElementById("no-btn");
  let poemLines6 = document.querySelector(".orderpoem");

  let timesOpen = 1;// Number Of Times Question Dialogue Box
  let yes = 0;// Booleen For Answer

  // Trigger For Question Dialogue Box
  questionButton.addEventListener("click", function () {
    setTimeout(() => {
      dialog.style.display = "block";
    }, 500);

    // Condition For Checking If The Page Is Opened For First Time
    if (timesOpen != 1) {
      // Condition For Checking What The Answer Was
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

    // Trigger For Change In Poem In Question Dialogue Box Section
    poemLines6.classList.add("enable");
  });

  // Yes Button Function
  yesBtn.addEventListener("click", function () {

    // Change Of Text In Question Dialogue Box
    dialog.innerHTML = "<h2>Yay! ❤️ You made my day!</h2><p>Now, let’s grab that coffee together ☕</p>";

    createConfetti();// Trigger For Confetti Animation

    // Timer For Closing Question Dialogue Box
    setTimeout(() => {
      dialog.style.display = "none";
    }, 10000);

    timesOpen += 1;// Incriment The Number Of Times Dialogue Box Is Opened
    yes = 1;// Answer Is Stored
  });

  // Function For Moving No Button Away From Curser
  noBtn.addEventListener("mouseover", function () {
    let newX = Math.random() * (500 - 0);
    let newY = Math.random() * (250 - 0);
    noBtn.style.position = "absolute";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  });

  // No Button Function
  noBtn.addEventListener("click", function () {

    // Change Of Text In Question Dialogue Box
    dialog.innerHTML = "<h2>Are you sure? 🥺</h2><p>Maybe next year then? I'll be waiting... ☕💔</p>";
    
    // Timer For Closing Question Dialogue Box
    setTimeout(() => {
      dialog.style.display = "none";
    }, 10000);

    timesOpen += 1;// Incriment The Number Of Times Dialogue Box Is Opened
  });

  // Confetti Animation Function
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

// This Fixes Some Issue With Poem In Ingredient Section So Leave It Alone
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page has fully loaded!");
  document.querySelector(".ingpoem").style.display = "block";
});