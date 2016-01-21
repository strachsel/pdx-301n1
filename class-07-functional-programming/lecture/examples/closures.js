// From MDN:
// Closures are **functions** ...that refer to independent (free) variables.
// In other words, the function defined in the closure 'remembers' the environment in which it was created.

var packSuitcase = function (destination) {
  console.log('starting at the top of packSuitcase');
  var coreItems = {
    duffel: ['toothbrush', 'toothpaste', 'underwear'],
    messenger: ['wallet', 'laptop']
  };

  var isInternational = destination.country !== 'US';
  console.log('Is it an international trip? ' + isInternational);

  var capitalize = function(s) {
      console.log('About to capitalize ' + s);
      return s[0].toUpperCase() + s.slice(1);
  };

  var arbitraryVariable = 'hi there';

  console.log('About to assign our anonymous function to return...');
  return function(bagType) {
    console.log('Finally we get to pack our ' + bagType + ' bag.');

    console.log('note that this is a closure, so we have access to: ');
    console.log('arbitraryVariable: ' + arbitraryVariable);

    var bagContents = coreItems[bagType].map(function(item) { return capitalize(item); });

    return bagContents;
  };

};

var packer = packSuitcase({ city: 'Paris', country: 'France' });
console.log('-------------');
var duffelBag = packer('duffel'),
    messengerBag = packer('messenger');

console.log(duffelBag);
console.log(messengerBag);
