var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'index.html',
            controller: 'mainController'
    	})
    	.when('/login', {
    		templateUrl: 'index.html',
    		controller: 'mainController'
    	})
    	.when('/register', {
    		templateUrl: 'register.html',
            controller: 'registerController'
    	})
        .when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'dashboardController'
        });

});

animateApp.controller('dashboardController', function ($scope, $http) {
    $scope.pageClass = 'dashboard';
});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'index';
});

animateApp.controller('mainController', function ($scope, $location, $window) {
    $scope.pageClass = 'index';
    
    $scope.logOn = function() {
        $scope.errorMsg = "Dummy";
        if (! $scope.username ) {
            $scope.errorMsg = "Please enter a username";
        } else if (! $scope.password ) {
            $scope.errorMsg = "Please enter a password";
        } else if (! localStorage.getItem("username") ) {
            $scope.errorMsg = "User is not signed up";
        } else if ($scope.username != localStorage.getItem("username") ) {
            $scope.errorMsg = "Invalid username";
        } else if ($scope.password != localStorage.getItem("password") ) {
            $scope.errorMsg = "Invalid password";
        } else {
            $scope.errorMsg = "User " + localStorage.getItem("username") + " logged in";
            var landingUrl = "#index";
            $window.location.href = landingUrl;
        };
    };
});

animateApp.controller('registerController', function ($scope) {
    $scope.pageClass = 'register';
    
    $scope.signUp = function () {
        debugger;
        if (!$scope.txt_uname) {
            $scope.lbl_msg = "Invalid username entered";
        } else if (!$scope.txt_pwd) {
            $scope.lbl_msg = "Invalid password entered";
        } else {
            localStorage.setItem("username", $scope.username);
            localStorage.setItem("password", $scope.password);
            $scope.lbl_msg = "User " + $scope.username + " successfully Registered!";
            var landingUrl = "#index";
            $window.location.href = landingUrl;
        }
    }
});