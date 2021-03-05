 // Write a wrap dunction that takes the execute function as an argument and returns a modified functions so that the following requirements are met:
// Any result returned by the function execute should be returnecd from the modified function unchanged.
// if the function execute throws an error, the modified function should return null.
// after the function execute has thrown an error, its future executions should be prevented and null should be returned.
// Multiple wrapped functions can coexist.
// The execute function doesn't take any arguments.
