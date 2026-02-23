// import { document } from "postcss"

const answersInputs = document.querySelectorAll('input[type=radio]')


let currentStage = 0
let resultCount = 0

function initTest(stages){
    const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
    const question = document.querySelector('.A_Question')
    const answers = document.querySelectorAll('.A_AnswerText')
    const answersInputs = document.querySelectorAll('input[type=radio]')

    numberOfQuestion.innerText = `вопрос ${currentStage + 1} из ${stages.length}`
    question.innerText = stages[currentStage].question

    for (let i = 0; i < answers.length; i++) {
        answers[i].innerText = stages[currentStage].answers[i].text
        answersInputs[i].dataset.count = stages[currentStage].answers[i].count
        answersInputs[i].checked = false
    }
}

function chooseAnswer(stages, results) {
    const answersInputs = document.querySelectorAll('input[type=radio]')

    answersInputs.forEach((radio) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                setTimeout(() => {
                    resultCount += Number(radio.dataset.count)
                    updateStage(stages, results)
                }, 300)
            }
        })
    })
}

function updateStage(stages, results) {
    currentStage++

    if (currentStage < stages.length) {
        initTest(stages)
    } else {
        showResult(results)
    }
}

function showResult(results) {
    const testContainer = document.querySelector('.O_Test')
    testContainer.innerHTML = ''

    const resultWrapper = document.createElement('div')
    resultWrapper.classList.add('M_TestResult')

    const resultCnt = document.createElement('p')
    resultCnt.classList.add('A_TestResultCount')
    resultCnt.innerText = `итог: ${resultCount}`

    const resultHeader = document.createElement('h2')
    resultHeader.classList.add('A_TestResultHeader')

    const resultParagraph = document.createElement('p')
    resultParagraph.classList.add('A_TestResultParagraph')

    if (resultCount >= 7) {
        resultHeader.innerText = results[0].header
        resultParagraph.innerText = results[0].paragraph
    } else if (resultCount >= 4) {
        resultHeader.innerText = results[1].header
        resultParagraph.innerText = results[1].paragraph
    } else {
        resultHeader.innerText = results[2].header
        resultParagraph.innerText = results[2].paragraph
    }

    resultWrapper.appendChild(resultCnt)
    resultWrapper.appendChild(resultHeader)
    resultWrapper.appendChild(resultParagraph)

    testContainer.appendChild(resultWrapper)
}

export { initTest, chooseAnswer }
