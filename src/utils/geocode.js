const request = require('request')

const geocode = (address, callback) => {
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?types=address&access_token=pk.eyJ1IjoiYmh1bWlrYXBhdGlsNSIsImEiOiJja2NjYnpjZGUwMzh2MnptbHZtaHVvMXU4In0.0Q40cnC9Io6iCgqT84I2pA'
    request({ url, json: true}, (error, {body}) => {

        if(error)
        {
            callback('Unable to connect to the service!', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location!', undefined)
        }
        else{
            callback(undefined, {
            longitude: body.features[0].center[1],
            latitude: body.features[0].center[0],
            location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode