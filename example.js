"use strict";
 
/**
 * The result of this function will be tained by Analysis (by name)
 */

 
function taint(y) {
    
    return y;
}

/**
 * Result of this function will be replaced with whether the value is taint
 */
function isTaint(y) { return false; }
 
 var y = taint(5);
 var x = 'Hello World';
 x = x + y;
console.log(x);
console.log(y);

 
 console.log('IsTaint x: ' + isTaint(x));
 
 
