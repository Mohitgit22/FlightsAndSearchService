const { FlightService } = require('../services/index');
const { SuccessCodes, ClientErrorCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
     try {
        const flightRequestData = {
          flightsNumber: req.body.flightsNumber,
          airplaneId: req.body.airplaneId,
          departureAirportId: req.body.departureAirportId,
          arrivalAirportId: req.body.arrivalAirportId,
          arrivalTime: req.body.arrivalTime,
          departureTime: req.body.departureTime,
          price : req.body.price 
        } 
        console.log(" controller doing good ");
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
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

const getAll = async( req, res) => {
  try {
    const response = await flightService.getAllFlightData( req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights "
    })
  } catch (error) {
     //we will not throw the error here , otherwise we will not be able to stop the error mapping
     console.log(error);
     return res.status(500).json({
       data: {},
       success: false,
       message: "Not able to fetch the flights ",
       err: error
     });
  }
}

module.exports = {
    create,
    getAll
}