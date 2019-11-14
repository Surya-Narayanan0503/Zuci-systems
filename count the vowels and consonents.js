var str=pompt("Enter the string")
var vow=['a','e','i','o','u','A','E','I','O','U'];
var vowels=0;
var cons=0;
for(let i=0;i<str.length;i++){
  if(vow.includes(str[i])){
    vowels+=1;
  }
  else{
    cons+=1
  }
}
console.log("Count of Vowels = " +vowels);
console.log("Count of Consonents = " +cons);
