const Validator = require('./Validator');

class UsernameValidator extends Validator{
  isUsername(username){
    if(!username || !super.isString(username))
      return false;
    let usernameRegExp = /^[\w+_-]{4,24}$/;
    if(usernameRegExp.test(username))
      return true;
    return false;
  }
}

