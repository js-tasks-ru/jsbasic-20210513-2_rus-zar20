  function factorial(n) {
    
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
  
  alert (factorial(5));
  alert (factorial(3));