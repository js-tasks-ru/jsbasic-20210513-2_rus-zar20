function ucFirst(str) {
        
  let firstLetter = str.slice(0, 1).toUpperCase();
  let otherLetters = str.slice(1);
  
  return firstLetter + otherLetters;
}

alert(ucFirst(''));
alert(ucFirst('в'));