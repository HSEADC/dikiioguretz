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
  card.classList.add('W_DSitesTeaser')
  card.style.backgroundImage = `url(${image})`

  const footer = document.createElement('h6')
  footer.innerText = title
  footer.classList.add('A_WebsitesTeaserFooter')

  //   const websiteImage = document.createElement(img)
  //   websiteImage.srd = image

  card.appendChild(footer)
  //   card.appendChild(websiteImage)
  console.log('okay')
  document.querySelector('.C_DSitesTeasers').appendChild(card)
}
