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
const testFunction = (a,b,c) => {
  console.log(a+b+c);
}
logArguments(testFunction)(1,2,3,4);

