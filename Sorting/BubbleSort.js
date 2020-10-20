// Compare adjacent numbers -> Move largest to right -> Keep Doing Until Sorted
// Time O(n^2) -----  Space O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  return array;
}

bubbleSort(numbers);
// console.log(numbers);
