"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
  d:0,
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
console.log('----------------------');

Object.defineProperty(obj, "d", {
    get: () => {
      console.log(this.i, typeof this.i, this); // undefined 'undefined' Window { /* … */ } (or the global object)
      return this.i; // represents global object 'Window', therefore 'this.a' returns 'undefined'
    },
  });
  
  let z = obj.d; 
  console.log(z);
  console.log(obj);
  Object.defineProperty(obj, "d", {
    get: () =>
       'hello' 

  });

  z = obj.d; 
  console.log(z);
  console.log(obj);