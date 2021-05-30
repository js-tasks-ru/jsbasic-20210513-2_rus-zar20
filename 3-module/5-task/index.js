let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  
  let arr = [...str]
      .map(i => { 
        if(isFinite(i) == true || i == '.' || i == '-') {
          return i;
        } else {
          return ' ';
        }
      })
      .join('')
      .split(' ')
      .filter(i => i != '')
      .map(i => +i);

  let result = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };

  return result;
};

console.log(getMinMax(inputData));