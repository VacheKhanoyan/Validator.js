const Validator = require('./Validator');
class E_mailValidator extends Validator{
  isEmail(e_mail){
    if(!e_mail)
      return false;
    let e_mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if(e_mailRegExp.test(e_mail))
      return true;
    return false;
  }
}


