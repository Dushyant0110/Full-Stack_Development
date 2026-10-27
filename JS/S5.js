let n= 153;
let t=n;
let count=n.toString().length;
let sum=0;
while(n>0){
    let tu = t%10;
    sum=sum+tu**count;
    t=Number.parseInt(t/10);
}
if(sum==n){
    console.log("Armstrong");
}else{
    console.log(sum+" Not an ArmStrong");
}