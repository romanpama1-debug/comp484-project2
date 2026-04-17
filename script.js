$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton);

});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
  name: "Hound",
  weight: 10,
  happiness: 5
};

function showMessage(msg) {
  $("#pet-message")
    .stop(true, true)
    .text(msg)
    .fadeIn(100)
    .delay(500)
    .fadeOut(200);
}

// Treat
function clickedTreatButton() {
  pet_info.happiness += 1;
  pet_info.weight += 1;

  document.getElementById("pet-sound").play();

  showMessage("That treat was amazing!");

  checkAndUpdatePetInfoInHtml();
}

// Play
function clickedPlayButton() {
  pet_info.happiness += 2;
  pet_info.weight -= 1;

  showMessage("Playing is fun!");

  checkAndUpdatePetInfoInHtml();
}

// Exercise
function clickedExerciseButton() {
  pet_info.happiness -= 1;
  pet_info.weight -= 2;

  showMessage("I'm tired...");

  checkAndUpdatePetInfoInHtml();
}

// Sleep
function clickedSleepButton() {
  pet_info.happiness += 1;
  pet_info.weight += 0;

  showMessage("Zzz... I feel better now.");

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
}