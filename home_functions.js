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
});
