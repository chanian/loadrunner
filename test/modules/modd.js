module('modd', function(exports) {
  require('modc', function(modc) {
    exports({
      test: function() {
        return modc.test() + ' via mod d';
      }
    });
  });
});