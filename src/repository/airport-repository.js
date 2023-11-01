const CrudRepository = require('./crud-repository');
// idhar Airport repository ko include karte waqt model bhi dena pad rha hain kyuki wo repository constructor mein model expect kar rha hain
const { Airport } = require ('../models/index');
class AirportRepository extends CrudRepository {
    constructor() {
        //calling super constructor
        super(Airport );
    }
}

module.exports = AirportRepository;

//SUPER CONSTRUCTOR : super is used to call a superclass constructor: When a subclass is created, its constructor must call the constructor of its parent class. This is done using the super() keyword, which calls the constructor of the parent class
// Here we are calling constructor with model which is of parent class constructor i.e. crud repository's constructor