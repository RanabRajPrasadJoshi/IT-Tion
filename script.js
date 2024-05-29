document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".preload");
  images.forEach(function (image) {
    var img = new Image();
    img.src = image.src;
    img.onload = function () {
      image.style.display = "block";
    };
  });
});

// const email = document.getElementById("exampleInputEmail1");
// const btn = document.querySelector("#sub-btn");
// const div = document.querySelector("#alert-warning");
// const form = document.getElementById("myform");

// form.addEventListener("submit", (e) => {
//   if (email.validity.typeMismatch) {
//     e.preventDefault(); // Prevent the form from submitting
//     div.style.display = "block"; // Show the warning alert
//   } else {
//     div.style.display = "none"; // Hide the warning alert
//   }
// });

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     div.style.display = "block"; // Show the warning alert
//   } else {
//     div.style.display = "none"; // Hide the warning alert
//   }
// });

// const email = document.getElementById("exampleInputEmail1");
// const err = document.getElementById("hh");
// function sub() {
//   email.addEventListener("input", (event) => {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("");
//       err.innerHTML = "hi";
//       console.log("hi");
//     } else {
//       email.setCustomValidity("");
//     }
//   });
// }

const form = document.querySelector("form");
const msg = document.querySelector("#error-m");
const msgName = document.querySelector("#error-n");
const email = document.querySelector("#exampleInputEmail1");
const name = document.querySelector("#name");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function showError() {
  if (!email.value.match(emailRegex)) {
    msg.style.display = "block";
    msg.innerHTML = "Please enter a valid email";
    email.classList.add("error-box-shadow");
    return false;
  } else {
    msg.style.display = "none";
    msg.innerHTML = "";
    email.classList.remove("error-box-shadow");
  }
}
function containsNumber(str) {
  return str.split("").some((char) => !isNaN(char) && char !== " ");
}
function showNameErr() {
  if (name.value === "" || name.value == null) {
    msgName.style.display = "block";
    msgName.innerHTML = "Please enter a name";
    name.classList.add("error-box-shadow");
    return false;
  } else {
    if (containsNumber(name.value)) {
      msgName.style.display = "block";
      msgName.innerHTML = "Please enter a name not a number";
      name.classList.add("error-box-shadow");
      return false;
    } else {
      msgName.style.display = "none";
      msgName.innerHTML = "";
      name.classList.remove("error-box-shadow");
    }
  }
}
function loggg() {
  window.location.href = "login.html";
}

/* Example JavaScript for scroll animations */
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Example: Add class when element enters viewport
  const element = document.querySelector("#elementId");
  const elementPosition = element.getBoundingClientRect().top;
  if (elementPosition < window.innerHeight) {
    element.classList.add("animate-class");
  }
});
