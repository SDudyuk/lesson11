/*Task 1 */
function logArguments(fn) {

  return function() {

      for (let i=0; i<arguments.length; i++){
        console.log(`argument ${i}: ${arguments[i]}`);
      }

      return fn.apply(this, arguments);
    }

}

/*Test: */
function testFunction(a,b,c) {
  console.log(a+b+c);
}
testFunction = logArguments(testFunction);
testFunction(1,2,3);
