// Fine Minimum -> Swap it with the first unsorted element in the list
// Time O(n^2) -----  Space O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (i = 0; i < length; i++) {
    let minIndex = i;
    let temp = array[i];
    for (j = i + 1; j < length; j++) {
      //Notice j starts from i+1
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
