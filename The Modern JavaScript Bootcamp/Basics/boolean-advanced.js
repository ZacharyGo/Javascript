let isAccountLocked = true
if (isAccountLocked) {
    console.log('Account is locked')
} else {
    console.log('Welcome')
}

isAccountLocked = false
let userRole = 'admin2'
if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}

