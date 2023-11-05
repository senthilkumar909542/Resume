let light_mode = document.querySelector(".light");
let dark_mode = document.querySelector(".dark");

dark_mode.addEventListener('click', () => {
  light_mode.style.visibility = "visible";
  dark_mode.style.visibility = "hidden";
});
light_mode.addEventListener('click', () => {
  dark_mode.style.visibility = "visible";
  light_mode.style.visibility = "hidden";
});

let container = document.querySelectorAll(".section");


// To check the scroll position on page load
window.addEventListener("scroll",
  function () {
    var reveals = document.querySelectorAll(".section");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      // let id = reveals[i].getAttribute("id");

      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");

        // Progress Height Line
        if (i === 2) document.getElementById('progress').style.height = "96%";

      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


);





