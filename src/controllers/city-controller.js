//    AAAAAAAPPPPPPPIIIIIII creation

const { CityService } = require('../services/index');

// we will create a new CityService object and will use the object everywhere 
const cityService = new CityService();



/**
*  for creating an API which will help in creating a city , the http method used will be : post , therefore; 
 * POST
 * data -> req.body // data will come from req.body;
 */


const create = async (req, res) => {
    try {
        //console.log(req.body);
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city ",
            err: {}
        });
    } catch (error) {
        //we will not throw the error here , otherwise we will not be able to stop the error mapping
              console.log(error);
              return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to create a city",
                err: error
              });
    }
}


// DELETE -> /city/:id ; (url should be like this for deleting -> id should be there-> id is in req.params for delete ----> that's why req.params)
const destroy = async ( req, res) => {
    try {
        //console.log(req.params);
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city ",
            err: {}
        });
    } catch (error) {
         //we will not throw the error here , otherwise we will not be able to stop the error mapping
        console.log(error);
              return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to delete the city",
                err: error
              });
    }
}

// Patch -> /city/:id ->req.body
const update =  async (req, res) => {
    try {
        //console.log(req.body);
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully updated the city ",
            err: {}
        });
    } catch (error) {
         //we will not throw the error here , otherwise we will not be able to stop the error mapping
         console.log(error);
         return res.status(500).json({
           data: {},
           success: false,
           message: "Not able to update the city",
           err: error
         });
    }
}


// GET -> /city/:id 
const get =  async (req, res) => {
    try {
        //console.log(req.params);
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: " successfully fetched a city ",
            err: {}
        });
    } catch (error) {
         //we will not throw the error here , otherwise we will not be able to stop the error mapping
        console.log(error);
        return res.status(500).json({
          data: {},
          success: false,
          message: "Not able to get the city",
          err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update 
}