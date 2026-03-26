// import { document } from "postcss"
import crossIcon from '../images/A.CROSS.webp'
import testLemon1 from '../images/Q.D1LEMON.svg'
import testLemon2 from '../images/Q.D2LEMON.svg'
import testLemon3 from '../images/Q.D3LEMON.svg'

const answersInputs = document.querySelectorAll('input[type=radio]')

let currentStage = 0
let resultCount = 0

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
  const question = document.querySelector('.A_Question')
  const answers = document.querySelectorAll('.A_AnswerText')
  const answersInputs = document.querySelectorAll('input[type=radio]')

  const imageTop = document.querySelector('.A_DecorationTopRight')
  const imageBottom = document.querySelector('.A_DecorationBottomLeft')

  numberOfQuestion.innerText = `вопрос ${currentStage + 1} из ${stages.length}`
  question.innerText = stages[currentStage].question

  if (imageTop && stages[currentStage].imgTop) {
    imageTop.style.backgroundImage = `url(${stages[currentStage].imgTop})`
  }
  if (imageBottom && stages[currentStage].imgBottom) {
    imageBottom.style.backgroundImage = `url(${stages[currentStage].imgBottom})`
  }

  if (currentStage % 2 === 0) {
    imageTop.style.left = 'auto'
    imageTop.style.right = '-38%'

    imageBottom.style.right = 'auto'
    imageBottom.style.left = '0'
  } else {
    imageTop.style.right = 'auto'
    imageTop.style.left = '1%'

    imageBottom.style.left = 'auto'
    imageBottom.style.right = '-48%'
  }

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text
    answersInputs[i].dataset.count = stages[currentStage].answers[i].count
    answersInputs[i].checked = false
  }
  const indicator = document.querySelector('.A_ProgressBarIndicator')

  if (indicator) {
    let progressPercent = (currentStage / (stages.length - 1)) * 100

    if (progressPercent < 7) progressPercent = 7
    if (progressPercent > 93) progressPercent = 93

    indicator.style.left = progressPercent + '%'
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
  const progressBar = document.querySelector('.M_DProgressBar')
  if (progressBar) progressBar.style.display = 'none'

  const testContainer = document.querySelector('.W_Test')
  testContainer.innerHTML = ''

  const resultWrapper = document.createElement('div')
  resultWrapper.classList.add('M_TestResult')

  const lemonContainer = document.createElement('div')
  lemonContainer.classList.add('M_LemonTest')

  const lemon1 = document.createElement('div')
  lemon1.classList.add('Q_TestLemon1')
  lemon1.style.backgroundImage = `url(${testLemon1})`

  const lemon2 = document.createElement('div')
  lemon2.classList.add('Q_TestLemon2')
  lemon2.style.backgroundImage = `url(${testLemon2})`

  const lemon3 = document.createElement('div')
  lemon3.classList.add('Q_TestLemon3')
  lemon3.style.backgroundImage = `url(${testLemon3})`

  const testResMolecule = document.createElement('div')
  testResMolecule.classList.add('M_TestResultCountMolecule')

  const resultCnt = document.createElement('h2')
  resultCnt.classList.add('A_TestResultCount')
  resultCnt.innerText = `Итог: ${resultCount}/8`

  const crossImage = document.createElement('img')
  crossImage.src = crossIcon
  crossImage.classList.add('A_TestResultCross')
  crossImage.classList.add('A_TestResultCross')
  crossImage.onclick = () => (window.location.href = '../tests.html')

  const resultParagraph = document.createElement('p')
  resultParagraph.classList.add('A_TestResultParagraph')

  if (resultCount >= 7) {
    resultParagraph.innerText = results[0].paragraph
  } else if (resultCount >= 4) {
    resultParagraph.innerText = results[1].paragraph
  } else {
    resultParagraph.innerText = results[2].paragraph
  }

  testResMolecule.appendChild(resultCnt)
  testResMolecule.appendChild(crossImage)

  resultWrapper.appendChild(testResMolecule)
  resultWrapper.appendChild(resultParagraph)

  resultWrapper.appendChild(lemon1)
  resultWrapper.appendChild(lemon2)
  resultWrapper.appendChild(lemon3)

  testContainer.appendChild(resultWrapper)
}

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
        maxRecords: 10
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
  // card.target = '_blank'
  card.classList.add('W_TestTeaser')

  const textContent = document.createElement('div')
  textContent.classList.add('M_TestTeaserContent')

  const header = document.createElement('h4')
  header.innerText = title
  header.classList.add('A_TestTeaserHeader')

  const text = document.createElement('p')
  text.innerText = description
  text.classList.add('A_TestTeaserDescription')

  const icon = document.createElement('div')
  icon.classList.add('A_TestTeaserIcon')

  let imageUrl = ''
  if (Array.isArray(image) && image.length > 0) {
    imageUrl = image[0].url
  } else if (typeof image === 'string') {
    imageUrl = image
  }

  if (imageUrl) {
    icon.style.backgroundImage = `url(${imageUrl})`
  }
  textContent.appendChild(header)
  textContent.appendChild(text)
  card.appendChild(textContent)
  card.appendChild(icon)

  const container = document.querySelector('.C_DTests')
  if (container) {
    container.appendChild(card)
  }
}
export { initTest, chooseAnswer }
