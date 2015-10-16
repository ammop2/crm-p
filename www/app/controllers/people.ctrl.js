System.register([], function (_export) {
    /**
     * Created by Pascal on 15.10.2015.
     */

    'use strict';

    var PeopleController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            PeopleController = (function () {
                function PeopleController(PeopleSrv) {
                    'ngInject';

                    _classCallCheck(this, PeopleController);

                    this.msg = 'hi pascal';
                    this.peoples = PeopleSrv.load();
                }
                PeopleController.$inject = ["PeopleSrv"];

                _createClass(PeopleController, [{
                    key: 'click',
                    value: function click() {
                        this.msg = 'foo';
                    }
                }]);

                return PeopleController;
            })();

            _export('default', PeopleController);
        }
    };
});
//# sourceMappingURL=people.ctrl.js.map
