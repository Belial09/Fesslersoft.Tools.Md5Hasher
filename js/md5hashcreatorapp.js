var app = angular.module('md5hashcreatorapp',['angular-md5']);
app.controller('md5hashcreatorappController', [
    '$scope','md5',
    function($scope,md5) {
        $scope.inputValue = '';
        $scope.encodedString = '';
        $scope.saltValue = '';
        $scope.saltBefore = true;
        $scope.beforeCheckedValue = true;
        $scope.afterCheckedValue = false;
        
        $scope.clearInput = function clearInput(){
            if($scope.inputValue == ''){
                    $scope.md5String = ''
                }
        }
        
        $scope.makeMD5 = function makeMD5() {
            if($scope.inputValue != ''){
                if($scope.saltBefore == true){
                    $scope.md5String = md5.createHash($scope.salt + $scope.inputValue);
                }
                else{
                    $scope.md5String = md5.createHash($scope.inputValue + $scope.salt);
                }
            }
        };
        
        $scope.textChangedInput = function() { 
            $scope.clearInput();
            $scope.makeMD5();
        };
        
        $scope.textChangedSalt = function() { 
            if($scope.saltValue != ''){
                $scope.salt = md5.createHash($scope.saltValue);
            }
            else{
                $scope.salt = '';
            }
            $scope.makeMD5();
        };
        
        $scope.saltOptionChanged = function(saltOption) {
            $scope.saltBefore = saltOption == 1;
            $scope.makeMD5();
        };
        
    }
]);