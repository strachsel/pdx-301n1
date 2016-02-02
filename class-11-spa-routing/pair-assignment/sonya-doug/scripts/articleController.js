(function(module) {
  var articlesController = {};
  Article.createTable();
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage)
    $('main > section').hide();
    $('#articles').show;
  };

  module.articlesController = articlesController;
})(window);
