System.register(['app/modules/people.module.js'], function (_export) {
    'use strict';

    return {
        setters: [function (_appModulesPeopleModuleJs) {}],
        execute: function () {

            angular.module('crmApp', ['ngRoute', 'people']).config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/peoples', {
                    templateUrl: 'views/peoples.html',
                    controller: 'PeopleController as ctrl'
                }).otherwise({
                    redirectTo: '/peoples'
                });
            }]).run(function () {
                'ngInject';
            });
        }
    };
});
//# sourceMappingURL=app.js.map
