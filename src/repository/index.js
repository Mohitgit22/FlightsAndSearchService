// rather than making many 'require' statements (for eg.. writing 10 require statements) for many different type of repositories , we make a index.js file and export them as a single file 

module.exports = {
   CityRepository : require('./city-repository'),
   FlightRepository : require('./flight-repository'),
   AirplaneRepository: require('./airplane-repository'),
   AirportRepository: require('./airport-repository'),
   CrudRepository: require('./crud-repository'),
}