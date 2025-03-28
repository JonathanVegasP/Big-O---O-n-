// Big O Complexity:
// The first loop has a time complexity of O(a), and the second loop has a time complexity of O(b).
// Since these loops run independently of each other, the overall time complexity is O(a + b).
function logItems(a,b) {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }

    for (let j = 0; j < b; j++) {
        console.log(j);
    }
}