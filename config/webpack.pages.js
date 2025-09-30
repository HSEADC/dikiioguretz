const HtmlWebpackPlugin = require('html-webpack-plugin');

function createPages(template, filename) {
    return new HtmlWebpackPlugin({ 
          template: template ,
          filename: filename
    })
}

const htmlPages = [
    createPages('./src/index.html', './index.html'),
    createPages('./src/pages/articles.html', './pages/articles.html'),
    createPages('./src/pages/about.html', './pages/about.html'),
    createPages('./src/pages/archive.html', './pages/archive.html'),
    createPages('./src/pages/interact.html', './pages/interact.html'),
    createPages('./src/pages/articles/art1.html', './pages/articles/art1.html'),
    createPages('./src/pages/articles/art2.html', './pages/articles/art2.html'),
    createPages('./src/pages/interact/games.html', './pages/interact/games.html'),
    createPages('./src/pages/interact/tests.html', './pages/interact/tests.html'),
    createPages('./src/pages/interact/games/game1.html', './pages/interact/games/game1.html'),
    createPages('./src/pages/interact/tests/test1.html', './pages/interact/tests/test1.html'),
    createPages('./src/pages/archive/hacks.html', './pages/archive/hacks.html'),
    createPages('./src/pages/archive/memes.html', './pages/archive/memes.html'),
    createPages('./src/pages/archive/random.html', './pages/archive/random.html'),
    createPages('./src/pages/archive/websites.html', './pages/archive/websites.html'),
    createPages('./src/pages/archive/hacks/hack1.html', './pages/archive/hacks/hack1.html'),
    createPages('./src/pages/archive/memes/mem1.html', './pages/archive/memes/mem1.html'),
    createPages('./src/pages/archive/websites/website1.html', './pages/archive/websites/website1.html'),
]

module.exports= htmlPages