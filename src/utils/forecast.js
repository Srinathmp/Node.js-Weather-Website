const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c8177b7b896414a77b2815d9eba1b5b3&query='+latitude+','+longitude+'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' fahrenheit out. But it feels like ' + body.current.feelslike + ' Fahrenheit out there!!')
        }
    })
}

module.exports = forecast