/* for Enumerative */
// iterate over an array
var pageNames = [
    "Home",
    "About Us",
    "Contact Us",
    "JavaScript Playground",
    "News",
    "Blog",
  ];
  
  for (let i = 0; i < pageNames.length; i += 1) {
    console.log(i, pageNames[i]);
  }
  
  for (var p in pageNames) {
    console.log(p, pageNames[p]);
  }
  
  for (var v of pageNames) {
    console.log(v);
  }
  
  // iterate over an object
  var pages = {
    first: "Home",
    second: "About Us",
    third: "Contact Us",
    fourth: "JavaScript Playground",
    fifth: "Blog",
  };
  for (var p in pages) {
    if (pages.hasOwnProperty(p)) {
      console.log(p, pages[p]);
    }
  }

// for loop
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// same thing as a while loop
let i = 0;
while (i < 10) {
  console.log(i + "... This will go until we hit 10");
  i += 1;
}

var myList = [true, true, true, false, true, true];

var myItem = null;

while (myItem !== false) {
  console.log(
    "myList has " +
      myList.length +
      " items now. This loop will keep going until we pop a false."
  );
  myItem = myList.pop();
}

var counter = 1;
while (true) {
  console.log(counter);
  counter++;
  break; // comment out this break statement to make this loop go forever and potentially lock up your web browser
}

var myList = [true, true, true, false, true, true];

var myItem = false;
do {
  console.log(
    "myList has " +
      myList.length +
      " items now. This loop will go until we pop a false."
  );
  myItem = myList.pop();
} while (myItem !== false);