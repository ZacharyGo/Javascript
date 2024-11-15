// Lexical Scope (Static Scope)
let varOne = 'varOne'

{
    let undeclaredVar = 'private local'
}
if (true) {
    //console.log(varOne)
    let varTwo = 'varTwo'
    let varOne = 'var'
    console.log(varOne)
    {
        let varOne = 'var2'
        undeclaredVar = 'Auto Global' // Will be treated as global since not being declared here or it's parent
    }
    console.log(varOne)
}
//console.log(varTwo)
console.log(varOne)
console.log(undeclaredVar)
