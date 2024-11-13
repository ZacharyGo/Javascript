console.clear();
console.log('a:',a); // undefined
var a;
console.log('a:',a); // undefined
console.log('b:',b); // Cannot access 'b' before initialization
let b;
console.log('b:',b); // undefined


if (true) {
    a = 10;
    var x = 5;
    let y = 10;
  }
  console.log('a:',a); // a=10
  console.log('x:',x); // x is 5
  console.log('y:', y); // y is not defined