var app = angular.module("app", [
	"ngRoute"
]);

app.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                 templateUrl: "Views/home.html",
                 controller: "HomeCtrl"
            })
            .when("/about", {
                 templateUrl: "Views/about.html",
                 controller: "HomeCtrl"
             })
            .when("/services", {
                 templateUrl: "Views/services.html",
                 controller: "HomeCtrl"
             })
            .when("/contact", {
                 templateUrl: "Views/contact.html",
                 controller: "HomeCtrl"
             })
            .when("/support", {
                 templateUrl: "Views/support.html",
                 controller: "HomeCtrl"
             })
             .otherwise({
                redirectTo: "/"
            });
    }
]);

app.controller("HomeCtrl", [ "$scope", 
	function($scope) {

		$scope.designers = [
        { 
            Id: 'e1',
            Name: 'Elisa Seeds',
            Email: 'elisaseeds@icloud.com',
            Position: 'Owner / Designer / Front-End Developer',
            Url: ""
        },{ 
            Id: 'b2',
            Name: 'Bethany Cech',
            Email: 'bethanycech@gmail.com',
            Position: 'Designer',
            Url: '../Assets/Images/Elisa.jpg'
        }
    ];

   
	 }
]);

app.controller("PortfolioCtrl", [ "$scope", 
    function($scope) {
        $scope.name = "Hello World!";
    }
]);