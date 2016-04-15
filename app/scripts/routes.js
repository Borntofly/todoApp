
//Routes
jsMytodoApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainctrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'aboutctrl'
        });
});
