(function(module) {
  var adminController = {};


  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  adminController.index = function() {
    articleView.initAdminPage();

    $('#blog-stats, #admin-list').show();
    $('#articles').hide();
    $('#about, #index-list').hide();
  };

  module.adminController = adminController;
})(window);
