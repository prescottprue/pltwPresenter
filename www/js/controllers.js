angular.module('starter.controllers', [])

.controller('LoginCtrl', function($rootScope, $scope, $state) {
  // Perform the login action when the user submits the login form
  // Form data for the login modal
  $scope.loginData = {};
  $scope.login = function() {
    console.log('Doing login', $scope.loginData);
    $rootScope.library.userLogin($scope.loginData, function(authData){
      console.log('userLogin successful:', authData);
      $rootScope.auth = authData;
      $state.go('')
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
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
