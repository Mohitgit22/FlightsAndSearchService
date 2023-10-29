// rather than making many 'require' statements (for eg.. writing 10 require statements) for many different type of services , we make a index.js file and export them as a single file  

module.exports = {
    CityService : require('./city-services')
}