function sumFunc(arr) {
  let sum = 0;
  for(const el of arr){
    sum = sum + el;
  }
  return sum;
}

// Uncomment the lines below to test
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
// Uncomment the lines below to test
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

//const array3 = [1, 2, 3];
//const iteratorWithNext = nextIterator(array3);
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

// Uncomment the lines below to test
//const array4 = [1, 2, 3, 4];
//console.log(sumArray(array4)); // -> should log 10


function setIterator(set) {
  const iterator = set.values();
  
  return {
    next: function () {
      var next = iterator.next();
      return next['value'];
    }
  }
}

// Uncomment the lines below to test
//const mySet = new Set('hey');
//const iterateSet = setIterator(mySet);
//console.log(iterateSet.next()); // -> should log 'h'
//console.log(iterateSet.next()); // -> should log 'e'
//console.log(iterateSet.next()); // -> should log 'y'



function indexIterator(arr) {
  let index = 0;

  return {
    next: function() {
      const value = arr[index]
      let result = [index, value]
      index++
      return result
    }
  };
}

// Uncomment the lines below to test
//const array5 = ['a', 'b', 'c', 'd'];
//const iteratorWithIndex = indexIterator(array5);
//console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
//console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
//console.log(iteratorWithIndex.next()); // -> should log [2, 'c']


function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
  let index = 0;
  const splitStr = this.str.split(/\s/);
	return {
    next: function () {
      if (index < splitStr.length) {
        const value = splitStr[index];
        index ++;
        return {value: value, done: false};
      } else {
        return { done: true };
      }
    }
  }
}

// Uncomment the lines below to test
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
