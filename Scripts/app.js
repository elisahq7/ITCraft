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
                 controller: "ContactCtrl"
             })
            .when("/support", {
                 templateUrl: "Views/support.html",
                 controller: "SupportCtrl"
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

app.controller("SupportCtrl", [ "$scope", 
    function($scope) {

        $scope.submit = function(){
            if($scope.connectwiseForm.$valid) {
                $scope.username;
                $scope.password;
                $scope.invalid = false;
                //$("iframe").contents().target("input[type=username]").val($scope.username);
                //$("iframe").contents().target("input[type=password]").val($scope.password);
                //$("iframe").contents().target("input[type=submit]").click();
            window.open("https://na.myconnectwise.net/v2017_1//services/system_io/Portal/Default.aspx?Company=itcraft&rememberMe=true&txtEmail=" + 
                encodeURIComponent($scope.username) + 
                "&txtPass=" + encodeURIComponent($scope.password), "_blank");
                //$(doc + "#input[type=username]").val($scope.username);
        

            } else {
                $scope.invalid = true;
            }

        }
        

    }
]);

app.controller("ContactCtrl", [ "$scope", 
    function($scope) {

        $scope.submitEmail = function(){
            if($scope.contactForm.$valid) {
                $scope.invalid = false;
                $.post("https://api.acgtechnologies.com/itcraft/contactus", $scope.Contact);
                alert("Your email has been sent successfully!")
            } else {
                $scope.invalid = true;
            }
        }
    }
]);

