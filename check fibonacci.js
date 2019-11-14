var num=parseInt(prompt("Enter the Number"));
var a=0;
var b=1;
var temp;
var fib=[];
for(let i=0;i<=num;i++){
  temp=a+b;
  a=b;
  b=temp;
  fib.push(temp);
}
var result=fib.includes(num);
console.log(result);
