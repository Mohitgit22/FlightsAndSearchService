const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime }= require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {

            if(!compareTime(data.arrivalTime,data.departureTime)){
                  console.log(" bhai arrival aur departure time hi galat de rho ho flight ka ");
                  throw { error: 'Arrival Time cannot be less than departure time'};
            }
            console.log(" Service doing good");
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats :airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    // async getFlightData() {
    //     // todo
    // }
}

module.exports = FlightService;
/**
 * {
 * flightsNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime
 * departureTime,
 * price,
 * totalSEARTS--> fetch it from airplane--> thats why crearte airplanerepository.js
 * }
 */