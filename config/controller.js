angular.module('routerApp')

.controller('MainController', function($scope, $http, Page) {    
    //$scope.baseurl = 'http://picnframes.com/beta/';
    $scope.Page = Page; 
    $scope.$on('$viewContentLoaded', function(){
    //Here your view content is fully loaded !!
    $('.loader').hide();
  });
    
    $scope.contact_form = function(user) {
               
        $http({
                method: 'POST',
                url: 'controller/contact.php',
                data: $.param(user),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                }
            }).then(function successCallback(response) {
             if(response.data=="true"){
               swal("Good job!", "Thanks for submitting! Will revert back shortly.", "success");
               user.name = "";
               user.phone = "";
               user.email = "";
               user.message = "";
             }else{
               swal("Oops...","Something went wrong! Please try again.","error");
             }             
                //$scope.getAllLendersRecords = $sce.trustAsHtml(response.data);
            }, function errorCallback(response) {
             swal("Oops...","Something went wrong! Please try again.","error");
            });
        
    };
})

// controller for home.html
.controller('home_controller', function($scope, Page) {
         $('.loader').show(); 
         Page.setTitle('Home');
         $scope.page_title = "Home"; 
})
// controller for about.html
.controller('aboutus_controller', function($scope, Page) {
         $('.loader').show();
         Page.setTitle('About us');
})
// controller for services.html
.controller('services_controller', function($scope, Page) {
         $('.loader').show();
         Page.setTitle('Our Services');
})
// controller for portfolio.html
.controller('portfolio_controller', function($scope, Page) {
         $('.loader').show();
         Page.setTitle('Portfolio');
})
// controller for contact.html
.controller('contact_controller', function($scope, Page) {
         $('.loader').show();
         Page.setTitle('Contact us');
});




// controller for login.html
function LoginCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.errorMessage='';
  $scope.submitLogin = function() {
    $http.post('/login',$scope.form).
      success(function(data){
        $location.path('/');
      }).error(function(err){
        $scope.errorMessage = err;
      });
  }
}
// controller for register.html
function RegisterCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.errorMessage = '';
  $scope.submitPost = function() {
    $http.post('/register', $scope.form).
      success(function(data) {
        $location.path('/');
      }).error(function(err) {
        $scope.errorMessage = err;
      });
  };
}