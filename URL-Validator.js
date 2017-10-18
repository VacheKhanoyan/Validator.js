const Validator = require('./Validator');
class URLValidator extends Validator{
  isURL(url){
    if(!url)
      return false;
    let urlRegExp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    if(urlRegExp.test(url))
      return true;
    return false;
  }
}

