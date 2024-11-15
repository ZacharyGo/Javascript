// === - equiality operator

let temp = 31
let isFreezing = temp === 31
console.log("temp: " + temp + ", temp === 31" + isFreezing)
// !== - not equal operator
temp = 31
isFreezing = temp !== 31
console.log("temp: " + temp + ", temp !== 31" + isFreezing)

// < - less than operator
isFreezing = temp < 31
console.log("temp: " + temp + ", temp < 31" + isFreezing)

// > - greater than operator
isFreezing = temp > 31
console.log("temp: " + temp + ", temp > 31" + isFreezing)

// <= - less than or equal to operator
isFreezing = temp <= 31
console.log("temp: " + temp + ", temp <= 31" + isFreezing)

// >= - greater than or equal to operator
isFreezing = temp >= 31
console.log("temp: " + temp + ", temp >= 31" + isFreezing)

if (isFreezing) {
    console.log('It is freezing')
}
if(temp>=100) {
    console.log('It is way to hot')
}