(function(module){
  var statsController = {};

  statsController.index = function(){
    $('main > section').hide();
    $('#stats').show();
  };

  module.statsController = statsController;
})(window);
