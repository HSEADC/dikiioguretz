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

// const checkboxes = document.querySelectorAll ('input[type=checkbox]')
var answersInputs = document.querySelectorAll('input[type=radio]');

// let currentStage = 0
// let resultCount = 0
// function initTest(stages){
//     const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
//     const question = document.querySelector('.A_Question')
//     const answers = document.querySelectorAll('.A_AnswerText')

//     numberOfQuestion.innerText = `вопрос ${currentStage + 1} из ${stages.length}`
//     question.innerText = stages[currentStage].question
//     for (let i = 0; i < answers.length; i++) {
//         answers[i].innerText = stages[currentStage].answers[i].text

//     }
//     for (let j = 0; j < checkboxes.length; j++) {
//         checkboxes[j].dataset.count = stages[currentStage].answers[j].count

//     }
// }

// function chooseAnswer(stages, results) {
// checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change',() => {
//         if (checkbox.checked){
//             setTimeout(()=>{
//                 resultCount += Number(checkbox.dataset.count)
//                 updateStage(stages, results)
//                 checkbox.checked = false
//             },300)
//         }
//     })
// })
// }

// function updateStage(stages, results) {
//     if (++currentStage + 1 < stages.length) {
//         initTest(stages)
//     } else {
//         showResult(results)
//         }
// }
// function showResult(results) {
//     const testContainer = document.querySelector('.O_Test')
//     testContainer.innerHTML = ''

//     const resultWrapper = document.createElement('div')
//     resultWrapper.classList.add('M_TestResult')

//     const resultCnt = document.createElement('p')
//     resultCnt.classList.add('A_TestResultCount')
//     resultCnt.innerText = `итог: ${resultCount}`

//     const resultHeader = document.createElement('h2')
//     resultHeader.classList.add('A_TestResultHeader')
//     // resultHeader.innerText = results[0].header

//     const resultParagraph = document.createElement('p')
//     resultParagraph.classList.add('A_TestResultParagraph')
//     // resultParagraph.innerText = results[0].paragraph

//     // const resultImage = document.createElement('img')
//     // resultImage.classList.add('A_TestResultImage')
//     // resultImage.src = results[0].image

//     if (resultCount == 9 || resultCount == 7){
//         resultHeader.innerText = results[0].header
//         resultParagraph.innerText = results[0].paragraph
//         // resultImage.src = results[0].image

//     } else if (resultCount == 6 || resultCount == 4) {
//         resultHeader.innerText = results[1].header
//         resultParagraph.innerText = results[1].paragraph
//         // resultImage.src = results[1].image
//     } else {
//         resultHeader.innerText = results[2].header
//         resultParagraph.innerText = results[2].paragraph
//         // resultImage.src = results[2].image
//     }

//     resultWrapper.appendChild(resultCnt)
//     resultWrapper.appendChild(resultHeader)
//     resultWrapper.appendChild(resultParagraph)
//     // resultWrapper.appendChild(resultImage)

//     testContainer.appendChild(resultWrapper)

// }

// export { initTest, chooseAnswer }

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