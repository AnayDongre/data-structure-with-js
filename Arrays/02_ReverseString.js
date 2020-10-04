const testString = "Hi I an Anay";

function reverseString1(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Bad input";
  } else {
    let revStrArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
      revStrArray.push(str[i]);
    }
    return revStrArray.join("");
  }
}

function reverseString2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Bad input";
  } else {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr = revStr + str[i];
    }
    return revStr;
  }
}

function reverseString3(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Bad Input");
    return "Bad input";
  } else {
    return str.split("").reverse().join("");
  }
}

const reverseString4 = (str) => [...str].reverse().join("");

console.log(reverseString4(testString));
