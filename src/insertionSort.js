// arr is an array of unsorted integers (i.e. [3, 5, 1])
// i = start index
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let currIdx = i; currIdx > 0 && arr[currIdx-1] > arr[currIdx]; currIdx--) {
      let temp = arr[currIdx]
      arr[currIdx] = arr[currIdx-1]
      arr[currIdx-1] = temp
    }
  }
}