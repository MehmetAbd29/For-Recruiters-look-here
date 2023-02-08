// selecting our elements
const container = document.querySelector(".container");
const text = document.getElementById("text");

// the animation time (rotation of the pointer)
// Let's take 7.5 sec, breathing: 3sec + hold: 1.5sec + release: 3sec
// At least this is how I inhale and exhale XD

// variables
const cycleTime = 7500; // in milsec
const inhaleTime = (cycleTime / 5) * 2;
const holdTime = cycleTime / 5;

// functions: (you can use arrows or normal decl.)
function inhaleCycle() {
  text.innerHTML = "Breath In";
  container.classList.remove("shrink");
  container.classList.add("grow");
}

function ExhaleCycle() {
  text.innerHTML = "Breath Out";
  container.classList.remove("grow");
  container.classList.add("shrink");
}

function breathAnimation() {
  inhaleCycle();
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      ExhaleCycle();
    }, holdTime);
  }, inhaleTime);
}
breathAnimation();
setInterval(breathAnimation, cycleTime);
