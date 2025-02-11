window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("small", window.scrollY > 50);

  const poemLines = document.querySelectorAll(".poem");

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 50);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines.forEach(line => observer.observe(line));

  const poemLines1 = document.querySelectorAll(".heropoem");

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 50);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines1.forEach(line => observer1.observe(line));

  const poemLines2 = document.querySelectorAll(".menupoem");

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 650);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines2.forEach(line => observer2.observe(line));

  const poemLines3 = document.querySelectorAll(".ingpoem");

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 1420);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines3.forEach(line => observer3.observe(line));

  const poemLines4 = document.querySelectorAll(".processpoem");

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 2770);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines4.forEach(line => observer4.observe(line));

  const poemLines5 = document.querySelectorAll(".cafepoem");

  const observer5 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 4475);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines5.forEach(line => observer5.observe(line));

  const poemLines6 = document.querySelectorAll(".orderpoem");

  const observer6 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 4475);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines6.forEach(line => observer6.observe(line));
});


document.addEventListener("DOMContentLoaded", function () {
  let questionButton = document.getElementById("questionbutton");
  let dialog = document.getElementById("valentine-dialog");
  let yesBtn = document.getElementById("yes-btn");
  let noBtn = document.getElementById("no-btn");

  questionButton.addEventListener("click", function () {
    setTimeout(() => {
        dialog.style.display = "block";
    }, 2000);
});

  yesBtn.addEventListener("click", function () {
    dialog.innerHTML = "<h2>Yay! ❤️ You made my day!</h2><p>Now, let’s grab that coffee together ☕</p>";
    createConfetti();
    setTimeout(() => {
      dialog.style.display = "none";
    }, 10000);
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