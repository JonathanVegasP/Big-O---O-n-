/// Study about Big O

/// This function takes a number N as an argument, and when executed, 
/// it runs N times, logging N items.
/// The time complexity of this operation is O(n), where n represents the number of iterations.
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/// We pass the number 10, which causes the function to run 10 times.
logItems(10);
