(function(module) {
  var adminController = {};


  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  adminController.index = function() {
    articleView.initAdminPage;

    $('#articles').show();
    $('#about').hide();
  };

  module.adminController = adminController;
})(window);
