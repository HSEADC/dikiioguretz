/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burgerButton = document.querySelector('.MobileBurger img:nth-child(2)');
  var menu = document.querySelector('.MainMenuNav');
  if (burgerButton && menu) {
    burgerButton.onclick = function () {
      menu.classList.toggle('active');
    };
  }
});
/******/ })()
;