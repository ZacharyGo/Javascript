var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

regex = /this/i;  // Case insensitive

regex = /^this/i; // Beginning of the string

regex = /this$/i; // End of the string

regex = /ever.$/i;

regex = /ever\.$/i; // literal dot

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
