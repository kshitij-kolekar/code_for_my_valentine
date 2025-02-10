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

  const poemLines5 = document.querySelectorAll(".tablepoem");

  const observer5 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.toggle("visible", window.scrollY > 2770);
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
          entry.target.classList.toggle("visible", window.scrollY > 2770);
        }, index * 400);
      }
    });
  }, { threshold: 0.3 });

  poemLines6.forEach(line => observer6.observe(line));
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("Page has fully loaded!");
  document.querySelector(".ingpoem").style.display = "block";
});