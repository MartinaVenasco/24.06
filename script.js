//button//
const button = document.createElement("button");
button.innerHTML = "Incrementa";
button.classList.add("mybutton");
document.body.append(button);

//BUTTON2//
const button2 = document.createElement("button");
button2.innerHTML = "Decrementa";
button2.classList.add("mybutton");
document.body.append(button2);
const $newEl = document.createElement("div");
$newEl.innerText = "0";

$newEl.setAttribute("id", "total-count");
document.body.append($newEl);

// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
let count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  if (totalCount.innerText < 10) {
    totalCount.innerText = count++;
  }
};

// Function to decrement count
const handleDecrement = () => {
  if (totalCount.innerText > 0) {
    totalCount.innerText = count--;
  }
};

// Add click event to buttons
button.addEventListener("click", handleIncrement);
button2.addEventListener("click", handleDecrement);
