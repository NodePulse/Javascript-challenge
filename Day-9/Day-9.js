// • Task 1: Select an HTML element by its ID and change its text content.

let element = document.getElementById("box");
element.innerHTML = "Hello Sachin";

// • Task 2: Select an HTML element by its class and change its background color.

let background = document.getElementsByClassName("bg");
background[0].style.background = "blue";

// • Task 3: Create a new div element with some text content and append it to the body.

p = document.createElement('p')
child1 = element.appendChild(p)
child1.innerHTML = "Hello Shammmmmmyyyy"

// • Task 4: Create a new li element and add it to an existing ul list.

ul = document.createElement('ul')
li1 = document.createElement('li')
li2 = document.createElement('li')
li3 = document.createElement('li')
li4 = document.createElement('li')
li1.innerHTML = "Hello"
li2.innerHTML = "Good"
li3.innerHTML = "Bad"
li4.innerHTML = "Down"
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
document.body.appendChild(ul)

// • Task 5: Select an HTML element and remove it from the DOM.

let element1 = document.getElementsByTagName("p");
element1[0].remove();

// • Task 6: Remove the last child of a specific HTML element.

let element2 = document.getElementsByTagName("ul");
element2[0].removeChild(element2[0].lastChild);

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

let element3 = document.getElementsByTagName("img");
element3[0].src = "https://static.tnn.in/thumb/msid-111895894,thumbsize-45274,width-1280,height-720,resizemode-75/111895894.jpg?quality=100";

// • Task 8: Add and remove a CSS class to/from an HTML element.

let element4 = document.getElementsByTagName("div");
element4[0].classList.add("change1");
element4[0].classList.remove("change1");

// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let element5 = document.getElementsByTagName("button");
element5[0].addEventListener("click", function () {
    let element6 = document.getElementsByTagName("p");
    element6[0].innerHTML = "Hello World";
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.

let element7 = document.getElementsByTagName("span");
element7[0].addEventListener("mouseover", function () {
    element7[0].style.border = "5px solid red";
});

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
