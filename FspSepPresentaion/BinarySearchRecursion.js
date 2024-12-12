function binarySearchRecursive(arr, x, start, end) {

    if (start > end){
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x){
        return mid;
    } 

    if (arr[mid] > x) {
        return binarySearchRecursive(arr, x, start, mid - 1);
    }

    return binarySearchRecursive(arr, x, mid + 1, end);
}


let arr = [1, 3, 5, 7, 8, 9, 10, 13, 14];
let x = 14;

const index = binarySearchRecursive(arr, x, 0, arr.length - 1);

if (index !== -1) {

    console.log(`Element found at index ${index}!`);
} else {

    console.log("Element not found!");
}

//stack
//   |   binarySearchRecursive(arr, 14, 8, 8)   |
//   |   binarySearchRecursive(arr, 14, 7, 8)   |
//   |   binarySearchRecursive(arr, 14, 5, 8)   |
//   |   binarySearchRecursive(arr, 14, 0, 8)   |
//   |__________________________________________| 