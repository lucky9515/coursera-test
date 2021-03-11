(function(){
    'use strict';
angular
    .module('LunchCheck',[])
    .controller('LunchCheckController', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
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
}
        function callMethod(arg){
         var resArray = arg.split(",");
            if(resArray.length<=3){
                return "Enjoy!";
            }
            else if(resArray.length>3){
                return "Too much!";
            }
        }
})();

//!function(){"use strict";function t(t){t.items="",t.outputvalue="",t.changeOutput=function(){if(""!==t.items){var e=function(t){var e=t.split(",");if(e.length<=3)return"Enjoy!";if(e.length>3)return"Too much!"}(t.items);t.outputvalue=e}else t.outputvalue="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",t),t.$inject=["$scope"]}();