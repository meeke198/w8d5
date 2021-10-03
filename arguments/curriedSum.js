function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let sumTotal = 0;
      for(let i = 0; i < numbers.length; i++) {
        sumTotal += numbers[i];
      }
      return sumTotal;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
console.log(curriedSum(4)(5)(30)(20)(1)); // => 56

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
Function.prototype.curry = function (numArgs) {
  let that = this;
  let args = [];
  function _curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    }else {
      return _curried;
    }
  }
  return _curried;
}

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);
// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

function SumCalculator() {
  // scope 0
  debugger
  this.sum = 0; // this = window
}

SumCalculator.prototype.addNumbers = function (numbers) { //monkey patching nen phai xai class, khong viet thang function addNumbers()
  const sumCalculator = this; // this = SumCalculator { sum: 0 }
  debugger
  numbers.forEach(function (number) {
    sumCalculator.sum += number; // will work as intended
    debugger
  });
  debugger 
  return this.sum;
};
const sum = new SumCalculator ();
console.log(sum.addNumbers([1, 2, 4]));
