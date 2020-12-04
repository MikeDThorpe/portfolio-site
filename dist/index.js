"use strict";

var faqRow = document.querySelectorAll(".title");
var arrow = document.querySelectorAll(".arrow");

var _loop = function _loop(i) {
  faqRow[i].addEventListener("click", function () {
    var focusFaq = faqRow[i];
    focusFaq.classList.toggle("active");
    arrow[i].classList.toggle("arrow-active");
    var answer = focusFaq.nextElementSibling;
    console.log(answer);

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
};

for (var i = 0; i < faqRow.length; i++) {
  _loop(i);
}

function openNav() {
  document.querySelector(".mobile-nav").style.right = "0px";
}

function closeNav() {
  document.querySelector(".mobile-nav").style.right = "-255px";
}

var tabNav = document.querySelectorAll(".tab-section-nav h5");
var tabcontent1 = document.querySelector("#tabcontent1");
var tabcontent2 = document.querySelector("#tabcontent2");
var tabcontent3 = document.querySelector("#tabcontent3");

function showTab(currentElement) {
  currentElement.classList.add("tab-active");
  var id = currentElement.id;

  for (var _i = 0; _i < tabNav.length; _i++) {
    if (tabNav[_i].id !== id && tabNav[_i].classList.contains("tab-active")) {
      tabNav[_i].classList.remove("tab-active");
    }
  }

  if (id === "tab1") {
    tabcontent1.style.display = "flex";
    tabcontent2.style.display = "none";
    tabcontent3.style.display = "none";
  } else if (id === "tab2") {
    tabcontent2.style.display = "flex";
    tabcontent1.style.display = "none";
    tabcontent3.style.display = "none";
  } else if (id === "tab3") {
    tabcontent3.style.display = "flex";
    tabcontent2.style.display = "none";
    tabcontent1.style.display = "none";
  }
}

