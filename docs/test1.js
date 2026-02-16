/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ chooseAnswer),
/* harmony export */   v: () => (/* binding */ initTest)
/* harmony export */ });
// import { document } from "postcss"

var currentStage = 0;
var resultCount = 0;
var checkboxes = document.querySelectorAll('input[type=checkbox]');
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  var question = document.querySelector('.A_Question');
  var answers = document.querySelectorAll('.A_AnswerText');
  numberOfQuestion.innerText = "\u0432\u043E\u043F\u0440\u043E\u0441 ".concat(currentStage + 1, " \u0438\u0437 ").concat(stages.length);
  question.innerText = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
  }
  for (var j = 0; j < checkboxes.length; j++) {
    checkboxes[j].dataset.count = stages[currentStage].answers[j].count;
  }
}
function chooseAnswer(stages, results) {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        setTimeout(function () {
          resultCount += Number(checkbox.dataset.count);
          updateStage(stages, results);
          checkbox.checked = false;
        }, 300);
      }
    });
  });
}
function updateStage(stages, results) {
  if (++currentStage + 1 < stages.length) {
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
  resultHeader.classList.add(A_TestResultHeader);
  resultHeader.innerText = results[0].header;
  var resultParagraph = document.createElement('p');
  resultParagraph.classList.add('A_TestResultParagraph');
  // resultParagraph.innerText = results[0].paragraph

  // const resultImage = document.createElement('img')
  // resultImage.classList.add('A_TestResultImage')
  // resultImage.src = results[0].image

  if (resultCount == 4) {
    resultHeader.innerText = results[0].header;
    resultParagraph.innerText = results[0].paragraph;
    // resultImage.src = results[0].image
  } else if (resultCount == 3 || resultCount == 2) {
    resultHeader.innerText = results[1].header;
    resultParagraph.innerText = results[1].paragraph;
    // resultImage.src = results[1].image
  } else {
    resultHeader.innerText = results[2].header;
    resultParagraph.innerText = results[2].paragraph;
    // resultImage.src = results[2].image
  }
  resultWrapper.appendChild(resultCnt);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultParagraph);
  // resultWrapper.appendChild(resultImage)

  testContainer.appendChild(resultWrapper);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
console.clear();

// import imgGood from '../images/results/result_good'
// import imgOk from '../images/results/result_ok'
// import imgBad from '../images/results/result_bad'

var stages = [{
  question: 'что такое хомяк??',
  answers: [{
    text: 'домашнее животное',
    count: 0
  }, {
    text: 'домашняя страница',
    count: 1
  }, {
    text: 'сервер',
    count: 0
  }]
}, {
  question: 'кого называют люркер?',
  answers: [{
    text: 'модератор',
    count: 0
  }, {
    text: 'чел, который вечно начинает споры',
    count: 0
  }, {
    text: 'чел, который все читает, но ничего не пишет',
    count: 1
  }]
}, {
  question: 'как расшифровывается з.ы.??',
  answers: [{
    text: 'постскриптум',
    count: 1
  }, {
    text: 'зюзя',
    count: 0
  }, {
    text: 'закрытая запись',
    count: 0
  }]
}, {
  question: 'что такое башорг??',
  answers: [{
    text: 'платеж за интернет',
    count: 0
  }, {
    text: 'сайт со смешными цитатами из рунета',
    count: 1
  }, {
    text: 'сайт организаторов мероприятий Башкиртостана',
    count: 0
  }]
}, {
  question: 'что значит ЖЖ?',
  answers: [{
    text: 'сервис онлайн-дневников',
    count: 1
  }, {
    text: 'душнила',
    count: 0
  }, {
    text: 'карта интернета по часам',
    count: 0
  }]
}];
var results = [{
  header: 'ты крут',
  paragraph: 'попробуй и другие тесты',
  image: ""
}, {
  header: 'все забывается..',
  paragraph: 'видно время оставляет свои следы',
  image: ""
}, {
  header: 'похоже ты зумер',
  paragraph: 'иди листай тик ток',
  image: ""
}];
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
/******/ })()
;