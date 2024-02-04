
let XHMLHttpRequest = require('xhr2');

let xhr = new XHMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
   let user = JSON.parse(xhr.responseText);
  for(user of user)
  {
    console.log(user.flag);
  }
}