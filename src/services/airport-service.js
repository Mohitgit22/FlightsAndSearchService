const CrudService = require ('./crud-service');

// service banane ke liye repository to chahiye hi , LIKE BAAKI SABHI MANUAL SERVICE BANTAE WAQT KIYE HAI, SABHI MEIN REPO KO REQUIRE KIYE HI HAI
const { AirportRepository } = require('../repository/index')

class AirportService extends CrudService {
     constructor() {
        const airportRepository = new AirportRepository();
        super (airportRepository);
     }
}

module.exports =  AirportService;