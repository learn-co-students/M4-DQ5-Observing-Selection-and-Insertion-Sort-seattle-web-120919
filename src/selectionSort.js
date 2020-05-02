  // arr is an array of unsorted integers (i.e. [3, 5, 1])

function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min])
        min = j
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
}
