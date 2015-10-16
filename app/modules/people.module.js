/**
 * Created by Pascal on 15.10.2015.
 */

import PeopleController from 'app/controllers/people.ctrl.js';
import PeopleService from 'app/services/people.js';

angular.module('people', [])
    .service('PeopleSrv', PeopleService)
    .controller('PeopleController', PeopleController);


