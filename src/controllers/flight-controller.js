const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
     try {
        console.log(" controller doing good ");
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success: true,
            message: "successfully created a flight ",
           // err: {}
        });
     } catch (error) {
           //we will not throw the error here , otherwise we will not be able to stop the error mapping
           console.log(error);
           return res.status(500).json({
             data: {},
             success: false,
             message: "Not able to create a flight",
             err: error
           });
     }
}

module.exports = {
    create,
}