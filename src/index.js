const express = require("express");
const bodyParser = require("body-parser");

// for individual creation and deletion of cities
// const { City } = require('./models/index ');

const { PORT } = require('./config/serverConfig');  

const ApiRoutes = require('./routes/index');

// const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
   
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
     console.log(`Server started at ${PORT}`);

        // individual create krne ki jagah humne hum ye kaam repositroy mein karwaenge b,coz all interactions of models should be from repository
        //  await City.create({
        //     name : "New Delhi",
        //  })


     // interactions through repository
    // const repo = new CityRepository();
    //  repo.createCity({ name : "New Delhi"});
    //  repo.createCity({ name : "Patna"});
    // repo.createCity({ name : "gaya"});

    //  const repo = new CityRepository();
    //  repo.deleteCity(1);
    });
}

setupAndStartServer();