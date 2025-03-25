/// Study about Big O

/// This function has an argument that is a number called N and when it is executed
/// It's going to ran N times to log N items.
/// The expression that we can use in this case is O(n)
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/// Here we pass the number ten to It run ten times   
logItems(10);
