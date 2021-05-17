"use strict";
 
/**
 * The result of this function will be tained by Analysis (by name)
 */
// function taint(x) {
  //  return x;
// }
 
function taint(y) {
    
    return y;
}

/**
 * Result of this function will be replaced with whether the value is taint
 */
function isTaint(y) { return false; }
 
 var y = 'Hello';
 var x = 'Hello World';
 x = y;
 //console.log(x);
//console.log(y);
// window.localStorage.setItem("x", 5);

// var y = window.localStorage.getItem("x")
 


// var z = y;
// var q = y;
// var np = y;
 console.log('IsTaint x: ' + isTaint(x));
 
 
// function DoDo() {
// }
 
// console.log('IsTaint DoDo: ' + isTaint(DoDo(5)));
 
// DoDo = taint(DoDo);
 
// console.log('IsTaint DoDo: ' + isTaint(DoDo(5)));
// console.log('IsTaint: ' + isTaint(z) + ' ' + isTaint(np) + ' ' + z + ' ' + np);