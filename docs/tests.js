/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony exports initTest, chooseAnswer */
// import { document } from "postcss"

var answersInputs = document.querySelectorAll('input[type=radio]');
var currentStage = 0;
var resultCount = 0;
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  var question = document.querySelector('.A_Question');
  var answers = document.querySelectorAll('.A_AnswerText');
  var answersInputs = document.querySelectorAll('input[type=radio]');
  numberOfQuestion.innerText = "\u0432\u043E\u043F\u0440\u043E\u0441 ".concat(currentStage + 1, " \u0438\u0437 ").concat(stages.length);
  question.innerText = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
    answersInputs[i].dataset.count = stages[currentStage].answers[i].count;
    answersInputs[i].checked = false;
  }
}
function chooseAnswer(stages, results) {
  var answersInputs = document.querySelectorAll('input[type=radio]');
  answersInputs.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (radio.checked) {
        setTimeout(function () {
          resultCount += Number(radio.dataset.count);
          updateStage(stages, results);
        }, 300);
      }
    });
  });
}
function updateStage(stages, results) {
  currentStage++;
  if (currentStage < stages.length) {
    initTest(stages);
  } else {
    showResult(results);
  }
}
function showResult(results) {
  var testContainer = document.querySelector('.O_Test');
  testContainer.innerHTML = '';
  var resultWrapper = document.createElement('div');
  resultWrapper.classList.add('M_TestResult');
  var resultCnt = document.createElement('p');
  resultCnt.classList.add('A_TestResultCount');
  resultCnt.innerText = "\u0438\u0442\u043E\u0433: ".concat(resultCount);
  var resultHeader = document.createElement('h2');
  resultHeader.classList.add('A_TestResultHeader');
  var resultParagraph = document.createElement('p');
  resultParagraph.classList.add('A_TestResultParagraph');
  if (resultCount >= 7) {
    resultHeader.innerText = results[0].header;
    resultParagraph.innerText = results[0].paragraph;
  } else if (resultCount >= 4) {
    resultHeader.innerText = results[1].header;
    resultParagraph.innerText = results[1].paragraph;
  } else {
    resultHeader.innerText = results[2].header;
    resultParagraph.innerText = results[2].paragraph;
  }
  resultWrapper.appendChild(resultCnt);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultParagraph);
  testContainer.appendChild(resultWrapper);
}

/******/ })()
;