const request = require('request')

const forecast = (longitude, latitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e29f62ae2803ed8bd26e97f700a4e778&query='+ longitude +','+ latitude +'&units=m'

 //   request({ url, json: true }, (error, response) => {
    request({ url, json: true }, (error, {body}) => {
    if(error)
    {
        callback('Unable to connect to weather service!',undefined)
    }
    else if(body.error){
        callback('Unable to find location!', undefined)
    }
    else{
        callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out. The Humidity is '+body.current.humidity+'% here.')
    }
    })
}

module.exports = forecast