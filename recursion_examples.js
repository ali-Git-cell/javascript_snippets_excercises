// A recursive function can be an alternative to Loops and in some case even better than loops, mostly used in functional programming
// Before defining/declaring and executing a recurive function, remember that a recursive function is made up of two very important parts.
// 1- A bases case, which prevents the function from infinit runs
// 2- A recursive function call, which is the part where the function is calling itself.
// Below three functions demonstate different uses of recursive functions.


// 1st function example //
function recursiveCountdown(num){
  if (num <= 0){
    // base case
    return
  }
  console.log(num)
    // The recursive call
  recursiveCountdown(num - 1)
}

//recursiveCountdown(7)





// 2nd function example //
function countRange(n, total = 0){
  if(n <= 0){
    return total; 
  }
 return countRange(n - 1, total + n)
}

//countRange(6)






// 3rd function example //
const familyTree = {
  name: "Jack",
  children: [ {name: "Alejandro",children: []},
              {name: "Michaela",children: [{name: "Amigo", children: []},{name: "Amiga", children: []}]}
            ] 
}

function printChildObjects(obj){
   if(obj.children.length === 0){
     return
   }
  
  obj.children.forEach(item => {
    console.log(item.name);
    printChildObjects(item)
  }) 
}


//printChildObjects(familyTree)
