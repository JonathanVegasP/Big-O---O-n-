/* Big O Complexity:
   - Time Complexity: O(log n) - Each iteration halves the search space, so the time grows logarithmically with the size of the array.
   - Space Complexity: O(1) - The function uses only a fixed amount of extra space (a few variables), so the space complexity is constant.
*/
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if(array[mid] === target) {
            return mid;
        } 

        if(array[mid] < target) {
            left = mid + 1;
            continue;
        }

        right = mid - 1;
    }

    return null;
}