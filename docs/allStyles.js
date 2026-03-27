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
  var slider = document.querySelector('.C_OurPics');
  var dots = document.querySelectorAll('.Dot');
  if (slider && dots.length > 0) {
    slider.addEventListener('scroll', function () {
      var scrollLeft = slider.scrollLeft;
      var width = slider.clientWidth;
      var index = Math.round(scrollLeft / width);
      dots.forEach(function (dot) {
        return dot.classList.remove('active');
      });
      if (dots[index]) {
        dots[index].classList.add('active');
      }
    });
  }
});
/******/ })()
;