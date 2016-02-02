(function(module) {
  var aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('#about, #index-list').show();
    $('#articles').hide();
    $('#blog-stats, #admin-list').hide();

  };

  module.aboutController = aboutController;
})(window);
