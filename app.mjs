
import express from 'express'
import path from 'path'
import cors from 'cors';
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 7400




app.get('/weather/:cityName', (req, res) => {
    
  
    let weatherData = {

        karachi: {

            temp: 30,
            max_temp: 35,
            min_temp: 25,
            humidity: 60,
            feels_like: 40,
            pressure: 70
            

        },

        
        lahore: {

            temp: 20,
            max_temp: 30,
            min_temp: 15,
            humidity: 50,
            feels_like: 24,
            pressure: 40
            

        },

        
        islamabad: {

            temp: 18,
            max_temp: 25,
            min_temp: 20,
            humidity: 70,
            feels_like: 20,
            pressure: 70
            

        },

        
        quetta: {

            temp: 37,
            max_temp: 40,
            min_temp: 30,
            humidity: 80,
            feels_like: 42,
            pressure: 80
            

        },

        
        peshawar: {

            temp: 27,
            max_temp: 35,
            min_temp: 20,
            humidity: 75,
            feels_like: 25,
            pressure: 77
            

        },

    }

    let userCityName = req.params.cityName.toLowerCase();
    let requestedWeatherData = weatherData[userCityName];
    if(requestedWeatherData){
       res.send(requestedWeatherData)
    }
    else{
        res.status(404).send(
            `Weather data is not available for ${req.params.cityName}`
        )
    }
  
  
    
  })

  app.use(express.static(path.join(__dirname, `public`)))

app.listen(port, () => {
  console.log(`My Weather Web is listening on port ${port}`)
})