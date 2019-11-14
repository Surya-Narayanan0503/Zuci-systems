function duplicates(str){
    var arr=str.split("");
    var result=[];
    for(let i=0;i<str.length;i++){
        if(str.indexOf(arr[i])!=str.lastIndexOf(arr[i])){
            result.push(arr[i])
        }
    }
    return result.join("");
}
console.log(duplicates("SHAWSHANK REDEMPTION"));
