alert('JS работает!')
import Airtable from 'airtable'

const token =
  'patG14HvKR4J0SmjX.fb19163575d0f3e81d543098904dd27c220bfb4d0881cccb39ba12ebf73cf0c4'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

var base = Airtable.base('app0vbth4eKDLaq0B')

getMemes().then((content) => {
  updateMemes(content)
})

function getMemes() {
  return new Promise((resolve) => {
    const content = []
    base('C_DMemes')
      .select({ maxRecords: 50 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            image: record.fields['Images']
          })
        })
        resolve(content)
      })
  })
}

function updateMemes(content) {
  content.forEach((stroke) => {
    createMemeCard(stroke)
  })
}

function createMemeCard(stroke) {
  let { image } = stroke

  const card = document.createElement('div')
  card.classList.add('M_DMemesTeaser')

  const imageFrame = document.createElement('div')
  imageFrame.classList.add('M_DMemesTeaserImage')

  const imageInner = document.createElement('div')
  imageInner.classList.add('M_DMemesTeaserImageInner')

  let imageURl = ''
  if (Array.isArray(image) && image.length > 0) {
    imageURl = image[0].url
  } else if (typeof image === 'string') {
    imageURl = image
  }

  if (imageURl) {
    imageInner.style.backgroundImage = `url(${imageURl})`
  }

  imageFrame.appendChild(imageInner)
  card.appendChild(imageFrame)

  const container = document.querySelector('.C_DMemesTeasers')
  if (container) {
    container.appendChild(card)
  }
}
