var routerApp = angular.module('routerApp', ['ui.router']);





routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller : 'home_controller'
        })
        
        // ABOUT PAGE 
        .state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller : 'aboutus_controller'
        })
        
        // Services PAGE 
        .state('services', {
            url: '/services',
            templateUrl: 'services.html',
            controller : 'services_controller'
        })
        
       // Portfolio PAGE 
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'portfolio.html',
            controller : 'portfolio_controller'
        })
        
        // Contactus PAGE 
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html' ,
            controller : 'contact_controller'
        });
        
});


routerApp.factory('Page', function() {
   var title = 'Home';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle; }
   };
});