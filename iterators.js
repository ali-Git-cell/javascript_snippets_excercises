function sumFunc(arr) {
  let sum = 0;
  for(const el of arr){
    sum = sum + el;
  }
  return sum;
}

// Uncomment the below to test
//const array = [1, 2, 3, 4];
//console.log(sumFunc(array)); // -> should log 10
function returnIterator(arr) {
  let i = 0;
  function iterator(){
    const el = arr[i];
    i++
    return el;
  }
  return iterator
}
// Uncomment the below to test
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

function nextIterator(array) {
  let index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return {
          value: array[index++],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}

// Uncomment the below to test
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next().value); // -> should log 1
// console.log(iteratorWithNext.next().value); // -> should log 2
// console.log(iteratorWithNext.next().value); // -> should log 3

function sumArray(arr) {
  let total = 0;
  const iterator = nextIterator(arr);
  for(let i = 0; i < arr.length; i++){
    total = total + iterator.next().value
  }
  return total;
}

// Uncomment the below to test
// Uncomment the lines below to test
//const array4 = [1, 2, 3, 4];
//console.log(sumArray(array4)); // -> should log 10
