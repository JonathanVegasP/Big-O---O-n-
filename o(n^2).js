/// Study about Big O

// This function takes a number n as an argument.
// It contains two nested loops:
// - The outer loop runs n times, iterating over the variable i.
// - The inner loop also runs n times for each iteration of the outer loop, iterating over the variable j.
// In each iteration of the inner loop, the current values of i and j are logged to the console.
// The total number of iterations is n * n, or n^2.
// Therefore, the time complexity of this function is O(n^2), 
// as the execution time grows quadratically with the input size n.
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// The time complexity of this function is O(n^2), where n is the input value.
// In this case, with n = 10, the function will execute 100 iterations (log statements).
logItems(10);
