window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("small", window.scrollY > 50);
  });
  