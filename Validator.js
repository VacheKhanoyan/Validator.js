
class Validator{
  isString(str){
    if(!str || typeof(str) !== 'string')
      return false ;
    return true;
  }
  isDate(d){
    if(!d)
      return false;
    let dateRegExp = /^(3[01]|[2][0-9]|0\d)-(1[0-2]|0\[1-9])-\d{4}$/;
    if(dateRegExp.test(d))
      return true;
    return false;
  }
  isInteger(num){
  if(!num)
      return false;
    let numIntRegExp = /^[+-]?([0-9]+)$/;
    if(numIntRegExp.test(num))
      return true;
    return false;
  }
    isNumber(num){
    if(!num)
      return false;
    let numberRegExp = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/;
    if(numberRegExp.test(num))
      return true;
    return false;
  }
  isFloat(num){
    if(!num || typeof(num) !== 'number')
      return false;
    let numFloatRegExp = /^[+-]?(([0-9]{5})+([.][0-9]*)?|[.][0-9]+)$/;
    if(numFloatRegExp.test(num))
      return true;
    return false;
  }
    isSpecialSymbol(sym){
    if(!sym)
      return false;
    let symbolRegExp = /^[!@#\$%\^\&*\)\(+=._-]+$/;
    if(symbolRegExp.test(sym))
      return true;
    return false;
  }
}
module.exports = Validator;
