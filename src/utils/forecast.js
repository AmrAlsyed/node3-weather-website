const request = require('request')


const forecast = (latitude , longitude , callback) => {
const url = `http://api.weatherstack.com/current?access_key=f8cc3a7849da5b89c1257b09492582b5&query=${latitude},${longitude}&units=m`
request({url:url , json: true} , (error , {body} = {}) => {
    if (error) {
        callback('Unable to connect to weather service!' , undefined)
    } else if (body.error) {
        callback('Unable to find location' , undefined)
    } else {
        callback(undefined , `${body.current.weather_descriptions[0]}. it is currently ${body.current.temperature} degrees out. it feels like ${body.current.feelslike} degrees out. the humidity is ${body.current.humidity}%.`)
    }
})
}

module.exports = forecast