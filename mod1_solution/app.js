(function(){
    'use strict';
    angular.module('LunchCheck',[]).
    controller('LunchCheckController',function($scope){
        $scope.items = "";
        $scope.outputvalue = "";
        $scope.changeOutput = function(){
            if($scope.items===""){
                $scope.outputvalue = "Please enter data first";
                return;
            }
            var returnvalue = callMethod($scope.items);

            $scope.outputvalue = returnvalue;

        };

        function callMethod(arg){

            var resArray = arg.split(",");
            if(resArray.length<=3){
                return "Enjoy!";
            }
            else if(resArray.length>3){
                return "Too much!";
            }

        }

        


    });
})();