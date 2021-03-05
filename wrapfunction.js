// Write a wrap dunction that takes the execute function as an argument and returns a modified functions so that the following requirements are met:
// Any result returned by the function execute should be returnecd from the modified function unchanged.
// if the function execute throws an error, the modified function should return null.
// after the function execute has thrown an error, its future executions should be prevented and null should be returned.
// Multiple wrapped functions can coexist.
// The execute function doesn't take any arguments.

function wrap (execute) {
    // used for 3rd bullet point
    let failed = false;

    return function() {
        //3rd goal met here
        if (failed) {
            return null;
        }
        //this try catch does 1st and 2nd bulletpoint
        try {
            return execute();
        } catch {
            failed = true;
            return null;
        }
    }
}

var errorExec = wrap(function () {
  throw new Error('Error');
});
var resultExec = wrap(function () {
  return "Result";
});
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
