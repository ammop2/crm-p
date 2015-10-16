System.register(['app/controllers/people.ctrl.js', 'app/services/people.js'], function (_export) {
  /**
   * Created by Pascal on 15.10.2015.
   */

  'use strict';

  var PeopleController, PeopleService;
  return {
    setters: [function (_appControllersPeopleCtrlJs) {
      PeopleController = _appControllersPeopleCtrlJs['default'];
    }, function (_appServicesPeopleJs) {
      PeopleService = _appServicesPeopleJs['default'];
    }],
    execute: function () {

      angular.module('people', []).service('PeopleSrv', PeopleService).controller('PeopleController', PeopleController);
    }
  };
});
//# sourceMappingURL=people.module.js.map
