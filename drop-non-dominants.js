// Big O Complexity:
// The nested loops have a time complexity of O(n^2) because there are two loops each running n times.
// The second loop runs O(n) times.
// So, the overall time complexity is O(n^2 + n).
// However, Big O simplifies to O(n^2), because the n^2 term dominates as n grows larger.
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }

    for(let k = 0; k < n; k++) {
        console.log(k);
    }
}


// The time complexity of this function is O(n^2), where n is the input value.
// In this case, with n = 10, the function will execute 100 iterations (log statements).
logItems(10);