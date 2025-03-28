// Big O Complexity:
// The outer loop runs 'a' times, and for each iteration of the outer loop, the inner loop runs 'b' times.
// This results in a total of 'a * b' iterations, making the time complexity O(a * b).
function logItems(a, b) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            console.log(i, j);
        }
    }
}