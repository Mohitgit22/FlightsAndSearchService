const { City } = require('../models/index');

class CityRepository {

    async createCity({ name }){
        try{
             const city = await City.create({ name });
             return city;
        }catch(error){
            console.log("Sonething went wrong in the repository layer");
             throw { error };
        }
    }



async deleteCity( cityId ){
    try{
        await City.destroy({
            where: {
                id : cityId
            }
        });
        return true;
    }catch( error ){
        console.log("Sonething went wrong in the repository layer");
        throw { error };
    }
  }



  // data : since we have only  name as parameter in city.js , we are just giving it as "name" argument
  async updateCity( cityId,  data){ // data == {name : Allahabad }==> {name : Prayagraj }
    try {
        const city = await  City.update(data, {
            where: {
                id: cityId
            }
        });
        return city;    
    } catch (error) { 
        console.log("Sonething went wrong in the repository layer");
        throw { error };
    }
  }



 // finds by Primary Key : Pk
  async getCity( cityId ){
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("Sonething went wrong in the repository layer");
        throw { error };
    }
  }


}


// exported the CLASS made for using to create and delete in the table
module.exports = CityRepository;

// use the link to refer to functions like .destroy , .findbypk , .update : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/