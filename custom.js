//                  class-41  event
//html
// mouse event (on + click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseover, mouseleave,)
//keyboard event =  on + keydown, keyup, keypress,
// form & input  events = On + submit , change, focus, blur
//
// /*
//          event types
//          1. mouse event
//          2. keyboard event
//          3. form event
//          4. windows event
//          5. clipboard event
// */
// function checkEvent() {
//   console.log("this is check event");
// }
// // function test() {
//   confirm("do you want to go home?");
// }

// function test2() {
//   console.log("this is key event got it");
// }

// let test = document.querySelector(".test");

// test.onclick = testEvent;
// function testEvent() {
//   console.log("this is test event function got it!");
// }

// let test = document.querySelector(".test");
// test.onclick = testEvent;

// best poddoti
// let test = document.querySelector(".test");
// test.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is test event function got it!");
// }

// let test = document.querySelector(".test");
// test.addEventListener("click", checkEvent);
// function checkEvent() {
//   console.log("this is check event got it!");
// }
// // let remove = document.querySelector(".remove");
// // remove.addEventListener("click", () => {
// //   test.removeEventListener("click", testEvent);
// // });

// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   test.removeEventListener("click", checkEvent);
// });

// let test = document.querySelector(".test");
// test.addEventListener("click", checkEvent);

// function checkEvent() {
//   console.log("this is check event got it!");
// }
// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   test.removeEventListener("click", checkEvent);
// });

// function hello() {
//   console.log("this is event class got it");
// }

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   console.log("First");
// });

// btn.addEventListener("click", function () {
//   console.log("Second");
// });

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is first event test");
// }

// btn.addEventListener("click", testEvent);
// function testEvent() {
//   console.log("this is second event test");
// }
// let remove = document.querySelector(".remove");

// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", testEvent);
// });

// let btn = document.querySelector("#btn");

// function firstEvent() {
//   console.log("first event test");
// }

// function secondEvent() {
//   console.log("second event test");
// }

// btn.addEventListener("click", firstEvent);
// btn.addEventListener("click", secondEvent);

// let remove = document.querySelector(".remove");

// remove.addEventListener("click", function () {
//   btn.removeEventListener("click", firstEvent);
// });
// remove.addEventListener("click", function () {
//   btn.removeEventListener("click", secondEvent);
// });

// let btn = document.querySelector("#btn");
// function firstEvent() {
//   console.log("this is first event");
// }
// function secondEvent() {
//   console.log("this is second event");
// }

//// btn.addEventListener("click", firstEvent);
// btn.addEventListener("click", secondEvent);

// let remove = document.querySelector(".remove");
// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", firstEvent);
// });
// remove.addEventListener("click", () => {
//   btn.removeEventListener("click", secondEvent);
// });

///      class-42 & 43

// Understanding “Capturing” & “Bubbling” Phases

// let parent = document.querySelector(".parent");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Hello I am parent");
//   },
//   true,
// );

// let child = document.querySelector(".child");
// child.addEventListener("click", () => {
//   console.log("Hello I am child");
// });

// Event Propagation

// parent.addEventListener("click", () => {
//   console.log("Hello I am parent");
// });

// let child = document.querySelector(".child");
// child.addEventListener("click", (e) => {
//   // event.stopPropagation();
//   e.stopPropagation();
//   console.log("Hello I am child");
// });

// Event Delegation

// let lis = document.querySelectorAll("li");

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   });`
// });

//     let lis = document.querySelectorAll("li");
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   });
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   if (e.target.localName == "li") {
//     console.log(e.target.innerText);
//   }
// // });

// let testUl = document.getElementById("test");
// liList = [];
// Array.from({ length: 107 }).forEach((item, index) => {
//   liList.push(`<li>${index + 1}</li>`);
// });
// testUl.innerHTML = liList.join("");
// Drag & Drop

////             Class - 43

// Using “dataset”

// let a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//   e.preventDefault();
//   // let miId = document.querySelector("[data-id]")
//   // let myId = e.target.getAttribute("data-id");
//   let myId = e.target.dataset.id;

//   console.log(myId);
// });

// Getting Element Box Dimensions
// Working with Element Sizes & Positions

// let myChild = document.querySelector(".child");

// let rect = myChild.getBoundingClientRect();
// console.dir(rect);

// Handling Scroll

let btn = document.querySelector("button");
// let h2 = document.querySelector("h2");

// btn.addEventListener("click", () => {
//   h2.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// let h4 = document.querySelector("h4");
// btn.addEventListener("click", () => {
//   h4.scrollIntoView({
//     behavior: "smooth",
//   });
// });

// let scrollTop = document.getElementById("scrollToTop");
// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;
//   if (scrollY > 100) {
//     scrollToTop.classList.add("show");
//     scrollToTop.classList.remove("hide");
//   } else {
//     scrollToTop.classList.add("hide");
//     scrollToTop.classList.remove("show");
//   }
// });

// scrollToTop.addEventListener("click", () => {
//   window.scrollTo({
//     behavior: "smooth",
//     top: 0,
//   });
// });
// Setting Timers & Intervals

// setTimeout(() => {
//   console.log("ghum teke jago");
// }, 2000);

// setInterval(() => {
//   console.log("sorry");
// }, 2000);

// The “location” object
