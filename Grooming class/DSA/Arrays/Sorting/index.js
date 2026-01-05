//~ ============================== Selection sort ==========================================

/**
*? In this, we find the minimum elemen present in the array and swap it with the value of i or starting element of the array ,  after every iteration the minimum element sorted

//& Bubble, insertion and selection are in place sorting because they dont use another space 

 ** Space complexity : auxuliary space + returned variable space
 */


// let arr = [15, 43, 31, 2, 2, 90, 12, 23, 67, 10,-45];

function selectionSort() {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        if(minIndex != i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log(arr);
}

// selectionSort();

//* SC ==> O(n)
//* TC ==> O(n^2)

//~ ============================================= Insertion sort ============================================

//? in this, we devide the array in two parts, one sorted and another are unsorted, then we iterate the unsorted array, and place the elements of unsorted in the sorted array, in such a way that the order of sorted array does not change.

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let currEle = arr[i];
        let j = i - 1;

        while (j >= 0 && currEle < arr[j]) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = currEle;
    }
    console.log(arr);
}

// insertionSort(arr);
//* SC ==> O(n)
//* TC ==> O(n^2)

//~ ========================================== Merge Two sorted Array ===========================================

//? Given two sorted array, merge the arrays such that the resultant aray remains sorted (TC  ===> O(n+m))
//? O(n log n)

let arr1 = [1, 6, 23, 34];
let arr2 = [5, 8, 12, 90];

function mergeTwoSortedArray(arr1, arr2) {
    let res = [];
    let i = 0, j = 0, k = 0;
    let n = arr1.length;
    let m = arr2.length;

    while (i < n && j < m) {
        
    }
    
     
       
}
//! TC ==> O(n^2) --> O(n)
//! TC ==> O(n+m)

//! all for loop are iterating the same array
// for (let i = 0; i < n; i++) {}
// for (let j = 0; j < n; j++) {}
// for (let k = 0; k < n; k++) {}
//! TC ==> O(n)


//~ ========================================  Merge two sorted array ===========================================================

function mergeTwoSortedArr(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0,
    k = 0;
  let n = arr1.length;
  let m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      result[k++] = arr1[i++];
    } else {
      result[k++] = arr2[j++];
    }
  }
  //! arr1
  while (i < n) {
    result[k++] = arr1[i++];
  }
  //! arr2
  while (j < m) {
    result[k++] = arr2[j++];
  }
  console.log(result);
}

// mergeTwoSortedArr(arr1, arr2);

//! TC and SC ==> o(n+m) == O(n)

//~ =========================================== merge sort ===================================================================
/** 
 ** divede and conquer  --> In this, array is divied into two halves until the array contains single element (using recursion), and then it is merged ( using merge and two sorted array)
*/

function mergeSort(arr) {
  let tempArr = new Array(arr.length);
  sort(arr, tempArr, 0, arr.length - 1);
  console.log(arr);
}

function sort(arr, temp, left, right) {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  sort(arr, temp, left, mid);
  sort(arr, temp, mid + 1, right);

  merge(arr, temp, left, mid, right);
}

function merge(arr, temp, left, mid, right) {
  let i = left,
    j = mid + 1,
    k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  for (let i = left; i <= right; i++) {
    arr[i] = temp[i];
  }
}

// mergeSort(arr);



//? TC ==> O(n log n)
//? SC ==> O(n) + log n
//? time complexity are indirectly proportional to space complexity

//* linear search 

function linearSearch(arr, target) {
  console.log("array length", arr.length);
  let n = arr.length;
  let compare = 0;
  for (let i = 0; i < n; i++) {
    compare++;
    if (arr[i] === target) return { target: arr[i], noOfComparisons: compare };
    // else return -1;
  }
  return { target: -1, noOfComparisons: compare };
}

console.log(
  linearSearch([1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 17, 19, 19, 20, 21], 21)
);

console.log(linearSearch([12, 1, 23, 34, 12, 0, 1, 4]));

//! TC ==> O(n)
//! SC ==> O(1)

//* binary search

function binarySearch(arr, target) {
  let n = arr.length;
  console.log("array length", n);
  let compare = 0;
  let start = 0;
  let end = n - 1;

  while (end >= start) {
    compare++;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target)
      return { target: arr[mid], noOfComparisons: compare };
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return { target: -1, noOfComparisons: compare };
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 17, 19, 19, 20, 21], 21)
);
//! this is not possible for unsorted array
//! TC ==> O (log n)
//! SC ==> O (1)

//! move all zeros to end [1, 2, 0, 0 ,1 2,3,5,6, 0]
//! find largest and second largest element in ar array using single loop

