import Airtable from 'airtable'

// поменять токен перед пущем!!!!
// const token =
//   'patEG59q9n6nmP5cv.1c7f4c3308ec509316416a3206ffda0e300d653b9d39c0a03f00fa7d5c6369c1'

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: token
// })

// var base = Airtable.base('app0vbth4eKDLaq0B')

// getMemes().then((content) => {
//   updateMemes(content)
// })

// function getMemes() {
//   return new Promise((resolve) => {
//     const content = []
//     base('C_DMemes')
//       .select({ maxRecords: 50 })
//       .firstPage()
//       .then((result) => {
//         result.forEach((record) => {
//           content.push({
//             id: record.id,
//             image: record.fields['Images']
//           })
//         })
//         resolve(content)
//       })
//   })
// }

// function updateMemes(content) {
//   content.forEach((stroke) => {
//     createMemeCard(stroke)
//   })
// }

// function createMemeCard(stroke) {
//   let { image } = stroke

//   const card = document.createElement('div')
//   card.classList.add('M_DMemesTeaser')

//   const imageFrame = document.createElement('div')
//   imageFrame.classList.add('M_DSitesTeaserImage')

//   const imageInner = document.createElement('div')
//   imageInner.classList.add('M_DSitesTeaserImageInner')

//   let imageURl = ''
//   if (Array.isArray(image) && image.length > 0) {
//     imageURl = image[0].url
//   } else if (typeof image === 'string') {
//     imageURl = image
//   }

//   if (imageURl) {
//     imageInner.style.backgroundImage = `url(${imageURl})`
//   }

//   imageFrame.appendChild(imageInner)
//   card.appendChild(imageFrame)

//   const container = document.querySelector('.C_DMemesTeasers')
// }
