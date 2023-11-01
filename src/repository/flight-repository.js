const { Flights } = require('../models/index');

// we need operators for filtering
const { Op } = require('sequelize');

class FlightRepository {

       //Custom Criteria 
    #createFilter(data) { // # is a private class function.--> we don't want other files to know about this personality
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }


    // method 1 : prefer method 2 
    //  if(data.minPrice && data.maxPrice){
    //     Object.assign(filter,{
    //         [Op.and]:[
    //             {price: {[Op.lte]: data.maxPrice} },
    //             {Price: {[Op.gte]: data.minPrice} }
    //         ]
    //     })
    //  }

     //method 2 : by preparing an array
    let priceFilter = [];
    if( data.minPrice ){
         // if there is a symbol we use Object.asssign 
        //     // gte : greater than or equalto
        //Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        priceFilter.push({price: {[Op.gte]: data.minPrice}});
    }
    if( data.maxPrice){
        //Object.assign(filter, {price: {[Op.lte]:data.maxPrice}});
        priceFilter.push({price: {[Op.lte]: data.maxPrice}});
    }
    Object.assign(filter, {[Op.and]: priceFilter});
    //Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]:7000}},{price:{[Op.gte]: 4000}}]})
    // console.log(filter);
    return filter;


    }                 

    async createFlight(data) {
        try {
            console.log(" doing good in flights repo ")
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }


    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }


    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }


    // async deleteFlight(flightId){
    //     try {

    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer");
    //         throw { error };
    //     }
    //  }

}

module.exports = FlightRepository;

/*
{
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price: {[Op.lte]:7000}
    }
}
*/