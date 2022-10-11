
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
