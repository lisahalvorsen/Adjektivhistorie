// Model
let color = "";
let animal = "";
let verb1 = "";
let verb2 = "";
let food = "";

// View
function updateView() {
  document.getElementById("colorDiv").innerHTML = color;
  document.getElementById("animalDiv").innerHTML = animal;
  document.getElementById("verb1Div").innerHTML = verb1;
  document.getElementById("verb2Div").innerHTML = verb2;
  document.getElementById("foodDiv").innerHTML = food;
}

// Controller
function setColor(btn) {
  color = btn.innerHTML;
  updateView();
}

function setAnimal(btn) {
  animal = btn.innerHTML;
  updateView();
}

function setVerb1(btn) {
  verb1 = btn.innerHTML;
  updateView();
}

function setVerb2(btn) {
  verb2 = btn.innerHTML;
  updateView();
}

function setFood(btn) {
  food = btn.innerHTML;
  updateView();
}

updateView();
