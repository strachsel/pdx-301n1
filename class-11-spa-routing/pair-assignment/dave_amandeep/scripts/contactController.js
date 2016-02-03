(function(module) {
  var contactController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  contactController.index = function() {
    $('main > section').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
