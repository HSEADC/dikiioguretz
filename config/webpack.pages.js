const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'allStyles']),
  createPages('./src/styleguide.html', './styleguide.html', ['allStyles']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['allStyles']),

  createPages('./src/pages/aboutUs.html', './pages/aboutUs.html', ['allStyles']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['allStyles']),
  createPages('./src/pages/about.html', './pages/about.html', ['allStyles']),
  createPages('./src/pages/archive.html', './pages/archive.html', ['allStyles']),
  createPages('./src/pages/interact.html', './pages/interact.html', ['allStyles']),
  createPages('./src/pages/articles/art1.html', './pages/articles/art1.html', ['allStyles']),
  createPages('./src/pages/articles/art2.html', './pages/articles/art2.html', ['allStyles']),
  createPages('./src/pages/interact/games.html', './pages/interact/games.html', ['allStyles']),
  createPages('./src/pages/interact/tests.html', './pages/interact/tests.html', ['tests', 'allStyles']),
  createPages(
    './src/pages/interact/games/game1.html',
    './pages/interact/games/game1.html', ['allStyles']
  ),
  createPages(
    './src/pages/interact/tests/test1.html',
    './pages/interact/tests/test1.html',
    ['test1', 'allStyles']
  ),
  createPages('./src/pages/archive/hacks.html', './pages/archive/hacks.html', ['allStyles']),
  createPages('./src/pages/archive/memes.html', './pages/archive/memes.html', ['allStyles']),
  createPages('./src/pages/archive/random.html', './pages/archive/random.html', ['allStyles']),
  createPages(
    './src/pages/archive/websites.html',
    './pages/archive/websites.html', ['allStyles']
  ),
  createPages(
    './src/pages/archive/hacks/hack1.html',
    './pages/archive/hacks/hack1.html', ['allStyles']
  ),
  createPages(
    './src/pages/archive/memes/mem1.html',
    './pages/archive/memes/mem1.html', ['allStyles']
  ),
  createPages(
    './src/pages/archive/websites/website1.html',
    './pages/archive/websites/website1.html', ['allStyles']
  )
]

module.exports = htmlPages
