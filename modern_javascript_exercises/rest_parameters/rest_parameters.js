// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...myNums) {
  // Add a loop here
  var sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);
  return sum;
}

add(1, 2, 3, 4, 5);
