angular.module('starter.controllers', [])
.controller('AppCtrl', function($rootScope, $scope, $state) {

})
.controller('HomeCtrl', function($rootScope, $scope, $state) {
console.log('HomeCtrl');
})
.controller('LoginCtrl', function($rootScope, $scope, $state) {
  // Perform the login action when the user submits the login form
  // Form data for the login modal
  $scope.loginData = {};
  $scope.login = function() {
    console.log('Doing login', $scope.loginData);
    $rootScope.library.userLogin($scope.loginData, function(authData){
      console.log('userLogin successful:', authData);
      $rootScope.auth = authData;
      $state.go('home');
    }, function(err){
      console.error('error logging user in',err);
    });
  };
})
.controller('SignupCtrl', function($rootScope, $scope, $state) {
  // Perform the login action when the user submits the login form
  // Form data for the login modal
  $scope.signupData = {};
  $scope.signup = function() {
    console.log('Doing login', $scope.signupData);
    $rootScope.library.userSignup($scope.signupData, function(account){
      console.log('userLogin successful:', account);
    }, function(err){
      console.error('error logging user in',err);
    });
  };
})
.controller('ChatCtrl', function($rootScope, $scope, $stateParams) {
  console.log('ChatCtrl');
  $scope.messageList = {};
  $scope.isNull = true;
  $scope.chat = {};
  $scope.init = function() {
    $rootScope.library.loadMessages(function(messageStream){
      console.log('Messages loaded sucessfully:', messageStream);
      if(messageStream != null) {
        $scope.messageList = messageStream;
        $scope.isNull = false;
      } else {
        $scope.isNull = true;
      }

    })
  };
  $scope.sendMessage = function() {
    if($scope.chat.newMessage) {
      $rootScope.library.sendMessage($scope.chat.newMessage, function() {

      });

    } else {
      $scope.err = "Please enter a message to send";
      console.error("Please enter a message to send");
    }
  };

});
