let temp= 65

// logical And Operator

if (temp >= 60 && temp <=90) {
    console.log('It is pretty nice out')
}

// logical Or Operator

if (temp <= 0 || temp >=120) {
    console.log('Do not go outside')
}

// Chanlenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// both vegan - offer only vegan dishes
// if only one is vegan, offer some vegan option
// if none are vegan, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only Vegan Dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some Vegan options')
} else {
    console.log('Offer anything on the menu')
}
