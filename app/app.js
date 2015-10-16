import 'app/modules/people.module.js';

angular
    .module('crmApp', [
  'ngRoute',
  'people',
])
    .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('/peoples', {
        templateUrl: 'views/peoples.html',
        controller: 'PeopleController as ctrl'
      }).otherwise({
        redirectTo: '/peoples'
      });
  }])
.run(() => {
        'ngInject';
    });