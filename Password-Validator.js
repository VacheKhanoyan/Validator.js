const Validator = require('./Validator')
class PasswordValidator extends Validator{
  isPassword(pass){
    if(!pass)
      return false;
    let passRegExp = /^[\w+_-]{6,26}$/;
    let nopassRegExp = /^(\w+)?(password)(\w+)?$/i;
    if(passRegExp.test(pass) && !nopassRegExp.test(pass))
      return true;
    return false;
  }
}

