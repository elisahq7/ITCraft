var app = angular.module("app", [
	"ngRoute"
]);


app.config(["$routeProvider", "$httpProvider",
    function ($routeProvider, $httpProvider) {
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
            .when("/calculator", {
                 templateUrl: "Views/calculator.html",
                 controller: "CalculatorCtrl"
             })
             .otherwise({
                redirectTo: "/"
            });
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller("HomeCtrl", [ "$scope", 
	function($scope) {
		
	 }
]);

app.controller("PortfolioCtrl", [ "$scope", 
    function($scope) {
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


app.controller("ContactCtrl", [ "$scope", "$http", 
    function($scope, $http) {
        $scope.widgetId = null;
        $scope.Contact = {
            captchaKey: '6Ld5018UAAAAAKuD9ViJMMc5ufCVprMbJXXev61f'
        };

        // vcRecaptchaService.reload($scope.widgetId);
        $scope.submitEmail = function(){

            var valid;
            $scope.captchaResponse = {
                secret: "6Ld5018UAAAAAAc0D2YhPnIQ175dWMTYy4XZ0ei2",
                response: angular.element("#g-recaptcha-response").val(),
                remoteip: ""
            }
            // $http.post("https://www.google.com/recaptcha/api/siteverify", $scope.captchaResponse)
            // .then(function (response) {
            //     console.log(response);
                //valid = true;
           
                //valid = false;
                //vcRecaptchaService.reload($scope.widgetId);
            // });
            /**
             * SERVER SIDE VALIDATION
             *
             * You need to implement your server side validation here.
             * Send the reCaptcha response to the server and use some of the server side APIs to validate it
             * See https://developers.google.com/recaptcha/docs/verify
             */
                
            if($scope.contactForm.$valid) {
                $scope.invalid = false;
                var emailObj = {
                        to: 'elisaseeds@gmail.com',
                        from: 'noreply@turncoatdesign.com',
                        subject: $scope.Contact.Subject,
                        text: $scope.Contact.Message,
                        html: 'testing 123'
                    };
                $.post('/sendmail', emailObj);
                console.log('Data posted successfully');
                $scope.loading = false;
                $scope.contactForm.$setSubmitted();
                $scope.serverMessage = 'Email sent successfully';
             

                // $.post("https://api.acgtechnologies.com/itcraft/contactus", $scope.Contact);
                // alert("Your email has been sent successfully!")
            } else {
                $scope.invalid = true;
            }
        }
    }
]);

app.controller("CalculatorCtrl", [ "$scope", 
    function($scope) {

        $scope.loggedin = false;
        $scope.login = {password: ""};

        $scope.checkPassword = function() {
            if($scope.login.password == 'God3inone!')
                $scope.loggedin = true;
            else 
                $scope.errorMsg = 'Your password is incorrect'
        }

    }
]);



