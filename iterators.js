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
