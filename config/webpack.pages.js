const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/styleguide.html', './styleguide.html', ['index']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),

  createPages('./src/pages/aboutUs.html', './pages/aboutUs.html', ['index']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['index']),
  createPages('./src/pages/about.html', './pages/about.html', ['index']),
  createPages('./src/pages/archive.html', './pages/archive.html', ['index']),
  createPages('./src/pages/interact.html', './pages/interact.html', ['index']),
  createPages('./src/pages/articles/art1.html', './pages/articles/art1.html', ['index']),
  createPages('./src/pages/articles/art2.html', './pages/articles/art2.html', ['index']),
  createPages('./src/pages/interact/games.html', './pages/interact/games.html', ['index']),
  createPages('./src/pages/interact/tests.html', './pages/interact/tests.html', ['tests']),
  createPages(
    './src/pages/interact/games/game1.html',
    './pages/interact/games/game1.html', ['index']
  ),
  createPages(
    './src/pages/interact/tests/test1.html',
    './pages/interact/tests/test1.html',
    ['test1']
  ),
  createPages('./src/pages/archive/hacks.html', './pages/archive/hacks.html', ['index']),
  createPages('./src/pages/archive/memes.html', './pages/archive/memes.html', ['index']),
  createPages('./src/pages/archive/random.html', './pages/archive/random.html', ['index']),
  createPages(
    './src/pages/archive/websites.html',
    './pages/archive/websites.html', ['index']
  ),
  createPages(
    './src/pages/archive/hacks/hack1.html',
    './pages/archive/hacks/hack1.html', ['index']
  ),
  createPages(
    './src/pages/archive/memes/mem1.html',
    './pages/archive/memes/mem1.html', ['index']
  ),
  createPages(
    './src/pages/archive/websites/website1.html',
    './pages/archive/websites/website1.html', ['index']
  )
]

module.exports = htmlPages
