// import { document } from "postcss"

const answersInputs = document.querySelectorAll('input[type=radio]')

let currentStage = 0
let resultCount = 0

function initTest(stages) {
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

// ________________________airtable script_______________________________

import Airtable from 'airtable'

const token =
  'patdXreHafdjmq3wj.ef812e3ea4fe39ed00b01b55308d5893ff0a20ad467ca49500324fb398a92a62'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

var base = Airtable.base('appI9JTrjB3ZBx6WZ')

let data
getTestsTeasers().then((content) => {
  data = content

  updateInfo(data)
})
function getTestsTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('C_DTests')
      .select({
        maxRecords: 50
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            image: record.fields['Images'],
            url: record.fields['URL']
          })
        })

        resolve(content)
      })
  })
}

function updateInfo(content) {
  content.forEach((stroke) => {
    createTestsTeaserCard(stroke)
  })
}

function createTestsTeaserCard(stroke) {
  let { title, description, image, url } = stroke

  const card = document.createElement('a')
  card.href = url
  card.classList.add('W_TestTeaser')
  card.style.backgroundImage = `url(${image})`

  const header = document.createElement('h4')
  header.innerText = title
  header.classList.add('A_TestTeaserHeader')

  const text = document.createElement('p')
  text.innerText = description
  text.classList.add('A_TestTeaserDescription')

  card.appendChild(header)
  card.appendChild(text)

  document.querySelector('.O_ArticleTeasers').appendChild(card)
}
