const { City } = require('../models/index');

class CityRepository {

    async createCity(data){
        try{
            console.log("repository ", data);
             const city = await City.create(data);
             return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
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
        console.log("Something went wrong in the repository layer");
        throw { error };
    }
  }



  // data : since we have only  name as parameter in city.js , we are just giving it as "name" argument
  async updateCity( cityId,  data){ // data == {name : Allahabad }==> {name : Prayagraj }
    try {

          // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;   
    } catch (error) { 
        console.log("Something went wrong in the repository layer");
        throw { error };
    }
  }



 // finds by Primary Key : Pk
  async getCity(cityId){
    try {
        console.log("repository  to get ", cityId);
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw { error };
    }
  }
   

  async getAllCities(){
    try {
        const cities = await City.findAll();
        return cities;  
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw { error };
    }
  }

}


// exported the CLASS made for using to create and delete in the table
module.exports = CityRepository;

// use the link to refer to functions like .destroy , .findbypk , .update : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/