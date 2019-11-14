var num=parseInt(prompt("Enter the number"));
var div=[]
for(let i=0;i<=num;i++){
  if(num%i==0){
    div.push(i);

  }

}
console.log("The number is divisible by " +div.join(" "))
