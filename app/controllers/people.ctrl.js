/**
 * Created by Pascal on 15.10.2015.
 */

class PeopleController {
    constructor(PeopleSrv) {
        'ngInject';
        this.msg = 'hi pascal';
        this.peoples = PeopleSrv.load();
    }
    click() {
        this.msg = 'foo';
    }
}

export default PeopleController;