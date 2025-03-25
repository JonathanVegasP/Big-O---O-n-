/// Study about Big O

/// This function takes a number N as an argument. When executed, 
// it runs two separate loops, each iterating N times and logging N items in total.
// The time complexity of this operation is O(2n), but constants are ignored in Big O notation, 
// so it simplifies to O(n), which represents the linear growth rate of the function.
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    for (let j = 0; j < n; j++) {
        console.log(j);
    }
}

// We pass the number 10, causing the function to execute two loops, 
// each iterating 10 times.
logItems(10);
