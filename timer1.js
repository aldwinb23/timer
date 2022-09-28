
let newArgv = process.argv.slice(2);

let arrNum = newArgv.sort().map(Number);

const timer = () => {
  
  for (let arr of arrNum) {

    if (arr > 1) {
      arr = arr * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, arr);
    }

    if (arr <= 0) {
      continue;
    }
    
    if (arr === NaN) {
      continue;
    };
    
  };

};

timer();
