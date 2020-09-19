function printLengthTimes(arr) {
  for (i = 0; i < arr.length; i++) {
    //Only one variable assigned so space complexity O(1)
    console.log("###");
  }
}

function printHiArray(n) {
  let hiArray = [];
  for (i = 0; i < n; i++) {
    hiArray[i] = "Hi";
    //One variable assigned in each iteration so space complexity O(n)
  }
  console.log(hiArray);
}
