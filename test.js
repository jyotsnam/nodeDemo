//console.log("Hello World");

/*var fibo = function(num)
{
    var fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    
    if(num == 1)
    {
        fibArray.splice(1,1);
    }
   
    else if(num > 2)
    {
      for( var i=2; i<=num; i++)
      {
        fibArray[i] = fibArray[i-2] + fibArray[i-1];
      }
    }
    console.log(fibArray);
}*/

/*var fibo = function (n)   
{  
  if (n===1)   
  {  
    return [0, 1];  
  }   
  else   
  {  
    var s = fibo(n - 1);  
    s.push(s[s.length - 1] + s[s.length - 2]);  
    return s;  
  }  
};  
  
 console.log(fibo(8)); */

/*var multiply = function (x)
{
    return function(y)
    {
        return function(z)
        {
            return x*y*z;
        }
    }
};
var ans = multiply(4)(2)(3);
console.log(ans);*/

function nTimes(x,y){
    return function(a,b){
        y--
        if(y<0){
            console.log('if loop');
            return null;
        }
        else{
            console.log('else part '+y);
            return x.apply(this,[a,b]);
        }
           
    }
}
function add(a,v){
    console.log(a+v);
}
var t = nTimes(add,2);
t(2,3);
t(2,3);
t(2,3);