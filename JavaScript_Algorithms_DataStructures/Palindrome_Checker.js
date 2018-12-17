function palindrome(str) {
  if(str.replace(/[^\w]|_/g, "").toLowerCase() === str.replace(/[^\w]|_/g, "").toLowerCase().split("").reverse().join("")){
    return true;
  } else {
    return false;
  }
}
palindrome("racecar");
