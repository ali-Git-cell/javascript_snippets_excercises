
// password checker
// Password checker checks for the following:
// password must be not less than 10 characters
// password must not contain the username
// password must not have spaces in it


function validPassword(password, username){
  if(password.length < 8){
    return false
  }
  // indexOf gives -1 if that character is not in there.
  if(password.indexOf(" ") !== -1){
    return false
  }
  // we can also use indexOf() on multiple characters.
  if(password.indexOf(username) !== -1){
    return false
  }
  return true
}

//validPassword("Thepassword123", "theusername")



// A pangram is scentence that contains very aphabet letter.

// The quick fox jumps over the lazy dog

function isPangram(scentence){
  let alphas = "abcdefghijklmnopqrstuvwxyz";
  scentence = scentence.toLowerCase();
  
  for(let i = 0; i < alphas.length; i++){
    if(!scentence.includes(alphas[i])){
      return false
    }
  }
  return true
}


// isPangram("The quick brown fox jumps over the lazy dog")









// Card returning function

// random values
// 1,2,3,4,5,6,7,6,9,10,J,Q,K,A
// random suits
// clubs, spades, hearts, diamonds
const val = [1,2,3,4,5,6,7,6,9,10,"J","Q","K","A"];
const suit = ["clubs", "spades", "hearts", "diamonds"];

const ran1 = Math.floor(Math.random() * 14);
const ran2 = Math.floor(Math.random() * 4)


function getCard(){
  let obj = {value: "", 
             suit: ""};
  obj.value = val[ran1];
  obj.suit = suit[ran2];
  return obj;
}


// getCard()
// getCard()



// The `isItValidName(..) function takes one parameter called `name`. The validator returns `true` if all the following requirements are met by the parameter.

	// - name must be a string
	// - name must be non-empty
	// - name must contain non-whitespace of at least 3 characters

function isItValidName(name){
  if (typeof name == "string" && name.trim().length >= 3){
       return true   
  } else {
    return false
  }
}


 // The `hoursAttended(..)`  that takes two parameters called `attended` and `length`. it only returns `true` if all the following match the two parameters.

	//- either parameter may only be a string or number
	//- both parameters should be treated as numbers
	//- both numbers must be 0 or higher
	//- both numbers must be whole numbers
	//- `attended` must be less than or equal to `length`

function attendedHours(attended, length){
  
  if(typeof attended == "string" && attended.trim() != ""){
    attended = Number(attended)
  }
    if(typeof length == "string" && length.trim() != ""){
    length = Number(length)
  }
  if(typeof attended == "number" && typeof length == "number" && attended >= 0 && length >= 0 && Number.isInteger(attended) && Number.isInteger(length) && attended <= length){
    return true
  }
  return false;

}
