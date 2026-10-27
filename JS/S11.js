let arr=[1,2,3,4,5];
console.log(arr);

//MAP  ......... 
let nArr = arr.map(n=>n*n*n);

console.log(nArr);


//FILTER  ......
nArr=arr.filter(n=>n>3);
console.log(nArr);


//Find   .......
let element = arr.find(n=>n>3);
console.log(element);

//REDUCE .......1 pass the function ... 2 then it does
let total = arr.reduce((sum,n)=>sum=sum+n,0);
console.log(total);