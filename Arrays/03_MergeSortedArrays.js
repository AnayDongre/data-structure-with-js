const arr1 = [0, 3, 9, 23];
const arr2 = [2, 5, 6, 17, 40];

const mergeArrays1 = (arr1, arr2) => {
  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const finalArray = [];
  let firstElement1 = arr1[0];
  let firstElement2 = arr2[0];
  i = 1;
  j = 1;
  while (firstElement1 || firstElement2) {
    console.log(firstElement1, firstElement2);
    if (!firstElement2 || firstElement1 < firstElement2) {
      finalArray.push(firstElement1);
      firstElement1 = arr1[i];
      i++;
    } else {
      finalArray.push(firstElement2);
      firstElement2 = arr2[j];
      j++;
    }
  }
  console.log(finalArray);
};

mergeArrays1(arr1, arr2);
