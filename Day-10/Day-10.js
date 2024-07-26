// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.

function changeText() {
  let para = document.getElementById("para");
  para.innerHTML = "Hello Sachin";
}

let btn1 = document.getElementById("change");
btn1.addEventListener("click", changeText);

// • Task 2: Add a double-click event listener to an image that toggles its visibility.

let img = document.getElementsByTagName("img")[0];
let btn2 = document.getElementById("visibility");
btn2.addEventListener("click", function () {
  if (img.style.display == "block") {
    img.style.display = "none";
    btn2.innerHTML = "show";
  } else {
    img.style.display = "block";
    btn2.innerHTML = "hide";
  }
});

// • Task 3: Add a mouseover event listener to an element that changes its background color.

let bg = document.getElementsByClassName("bg");
bg[0].addEventListener("mouseover", function () {
  bg[0].style.backgroundColor = "red";
});

// • Task 4: Add a mouseout event listener to an element that resets its background color.

bg[1].addEventListener("mouseout", function () {
  bg[1].style.backgroundColor = "aqua";
});

// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keydown", function (event) {
  console.log(event.key);
});

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

input.addEventListener("keyup", function (event) {
  let para = document.getElementById("input-text");
  para.innerHTML = event.target.value;
});

// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements.item(0).value);
});

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let select = document.getElementsByTagName("select")[0];
select.addEventListener("change", function (event) {
  let para = document.getElementById("select-text");
  para.innerHTML = event.target.value;
});

// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let list = document.getElementsByTagName("ul")[0];
list.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");

parent.addEventListener(
  "click",
  (event) => {
    if (event.target.parentNode === parent) {
      console.log("Child element clicked!");
    }
  },
  true
);
const child = document.createElement("div");
child.textContent = "Click me!";
parent.appendChild(child);

// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.
