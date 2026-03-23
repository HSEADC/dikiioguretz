/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var trigger = document.querySelector('.M_D7ArticlesWindows');
  var hiddenArticles = document.querySelectorAll('.M_D8ArticlesWindows, .M_D9ArticlesWindows, .M_D10ArticlesWindows, .M_D11ArticlesWindows, .M_D12ArticlesWindows');
  if (trigger) {
    trigger.addEventListener('click', function () {
      hiddenArticles.forEach(function (item) {
        item.classList.toggle('visible');
      });
      var h5 = trigger.querySelector('h5');
      if (h5.innerHTML.includes('↓')) {
        h5.innerHTML = 'Статьи &uarr;';
      } else {
        h5.innerHTML = 'Статьи &darr;';
      }
    });
  }
  var relations = [{
    button: '.M_D2ArticlesWindows',
    article: '.O_ArticleRead1'
  }, {
    button: '.M_D3ArticlesWindows',
    article: '.O_ArticleRead2'
  }, {
    button: '.M_D4ArticlesWindows',
    article: '.O_ArticleRead3'
  }, {
    button: '.M_D5ArticlesWindows',
    article: '.O_ArticleRead4'
  }, {
    button: '.M_D6ArticlesWindows',
    article: '.O_ArticleRead5'
  }];
  var allArticles = document.querySelectorAll('.O_ArticleRead1, .O_ArticleRead2, .O_ArticleRead3, .O_ArticleRead4, .O_ArticleRead5');
  relations.forEach(function (i) {
    var buttonName = document.querySelector(i.button);
    var articleRead = document.querySelector(i.article);
    if (buttonName && articleRead) {
      buttonName.addEventListener('click', function () {
        allArticles.forEach(function (article) {
          article.style.display = 'none';
        });
        articleRead.style.display = 'block';
      });
    }
  });
});
/******/ })()
;