(function(){
    'use strict';
angular
    .module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
      
        toBuy.items = ShoppingListCheckOffService.getItems();
           

        toBuy.buyButton = function(indexvalue){
            
            ShoppingListCheckOffService.toBetobeBought(indexvalue);
          
        }

    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
     
        bought.items = ShoppingListCheckOffService.getBoughtItems();
            
        
    }

    function ShoppingListCheckOffService(){
        var ShoppingService = this;
        var toBuyList = [
                {quantity:'10',name:'cookies'},
                {quantity:'5',name:'biscuits'},
                {quantity:'8',name:'chacolates'},
                {quantity:'6',name:'lollypops'},
                {quantity:'12',name:'cakes'}
    
            ];
        
        var boughtList = [];
        ShoppingService.toBetobeBought = function(indexValue){
          var boughtValue =  toBuyList[indexValue];
          boughtList.push(boughtValue);
          toBuyList.splice(indexValue,1);
          
        };

        ShoppingService.getItems = function(){
            return toBuyList;
        };

        ShoppingService.getBoughtItems = function(){
            return boughtList;
        };
    }
   
})();
