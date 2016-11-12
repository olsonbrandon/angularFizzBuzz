(function(){
  angular.module('FizzBuzz')
  .controller('FizzBuzzController', fizzBuzzCtrl);

  function fizzBuzzCtrl(FizzBuzzService){
    var vm = this;

    vm.generate = generate;

    vm.results = FizzBuzzService.generate(1, 100);

    function generate(){
      vm.results = FizzBuzzService.generate(vm.start, vm.end);
    }
  }
})();
