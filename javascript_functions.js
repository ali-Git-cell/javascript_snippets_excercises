
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
