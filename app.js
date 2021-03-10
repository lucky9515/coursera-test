(function(){
    'use strict';
    angular.module('MyFirstApp',[]).
    controller('firstController',function($scope){
        $scope.firstName = 'Lakshmi prasanna kumar reddy Venkat are Friends';
        $scope.friendName = "";
        $scope.countValue = 0;
        $scope.displayNumeric = function(){
          var val =  countAsciValue($scope.friendName);
          $scope.countValue = val;

        };

        function countAsciValue(val){
            var countVal = 0;
            for(var i=0;i<val.length;i++){

                countVal += val.charCodeAt(i);

            }
            return countVal;

        }


    });
})();