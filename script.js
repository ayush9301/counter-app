const card = document.getElementById("card");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let counter = 0;

plus.addEventListener("click",   () => {
  counter++;
  card.textContent = counter;

  updateCounter();
});


plus.addEventListener("keydown",   () => {
    counter++;
    card.textContent = counter;
  
    updateCounter();
  });


minus.addEventListener("click",   () => {
  if (counter > 0) {
    counter = counter - 1;
    card.textContent = counter;

    updateCounter();
  }
});

minus.addEventListener("keydown",   () => {
    if (counter > 0) {
      counter = counter - 1;
      card.textContent = counter;
  
      updateCounter();
    }
  });


reset.addEventListener("click",  () => {
  counter = 0;

  updateCounter();
});


  

function updateCounter() {
  card.textContent = counter;
}
