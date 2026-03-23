import Airtable from 'airtable'

const token =
  'patEG59q9n6nmP5cv.1c7f4c3308ec509316416a3206ffda0e300d653b9d39c0a03f00fa7d5c6369c1'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

var base = Airtable.base('appZUmWgFDWGxVoDr')

let data
getWebsitesTeasers().then((content) => {
  data = content

  updateInfo(data)
})

function getWebsitesTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('C_DSites')
      .select({
        maxRecords: 50
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
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
    createWebsitesTeaserCard(stroke)
  })
}

function createWebsitesTeaserCard(stroke) {
  let { title, image, url } = stroke

  const card = document.createElement('a')
  card.href = url
  card.target = '_blank'
  card.rel = 'noopener noreferrer'
  card.classList.add('M_DSitesTeaser')

  const imageFrame = document.createElement('div')
  imageFrame.classList.add('M_DSitesTeaserImage')

  const imageInner = document.createElement('div')
  imageInner.classList.add('M_DSitesTeaserImageInner')

  let imageURl = ''
  if (Array.isArray(image) && image.length > 0) {
    imageURl = image[0].url
  } else if (typeof image === 'string') {
    imageURl = image
  }

  if (imageURl) {
    imageInner.style.backgroundImage = `url(${imageURl})`
  }

  const footer = document.createElement('div')
  footer.innerText = title
  footer.classList.add('A_WebsitesTeaserFooter')

  imageFrame.appendChild(imageInner)
  card.appendChild(imageFrame)
  card.appendChild(footer)

  document.querySelector('.C_DSitesTeasers').appendChild(card)
}
