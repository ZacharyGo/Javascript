let greetUser = function (name, type='user') {
    if (name===undefined) {
        console.log('Welcome unknown :' + type)
    } else
        console.log('Welcome ' + name + ' you are a :' + type)
} 

greetUser()
greetUser('Zach', 'admin')
let fahrenheitToCelcius = function (fahrenheit) {
    if (fahrenheit===undefined) {
        return 'fahrenheit not defined'
    }
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let fahrenheitToKelvin = function (fahrenheit) {
    if (fahrenheit===undefined) {
        return 'fahrenheit not defined'
    }
    let result = (fahrenheit - 32) / 1.8 + 273.15
    return result
}


console.log("celcius : " + fahrenheitToCelcius(32))
console.log("kelven : " + fahrenheitToKelvin(32))

let fahrenheit
console.log("celcius : " + fahrenheitToCelcius(fahrenheit))
console.log("kelven : " + fahrenheitToKelvin())
console.log(fahrenheit)
