const { CityRepository } = require('../repository/index');

class CityService { 
    constructor() {
        // making a new object
        this.CityRepository = new CityRepository();
    }

    async createCity( data) {
       try {
           const res_city = await this.CityRepository.createCity( data );
           return res_city;
       } catch (error) {
         console.log("Some went wrong at service layer");
         throw{error};
       }
    }

    async deleteCity() {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
          console.log("Some went wrong at service layer");
          throw{error};
        }
    }

    async updateCity() {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
          console.log("Some went wrong at service layer");
          throw{error};
        }
    }

    async getCity() {
        try {
           const city = await this.cityRepository.getCity(cityId);
           return city;
        } catch (error) {
          console.log("Some went wrong at service layer");
          throw{error};
        }
    }
}

module.exports = CityService;