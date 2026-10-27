/*  var myObj={
    name:"Dushyant",
    Age:21,
    showName: getObjName,
    age:getAge
    
};
myObj.showName();
myObj.age();
function getObjName(){
    console.log(myObj.name);
}
function getAge(){
    console.log(myObj.Age);
}
*/

var myArr=[1,"Dushyant"];
for(let x of myArr){
    console.log(x);
}
var myObj={
    name:"Dushyant",
    occ:"Student",
    age:null
};
for(let key in myObj){
    console.log(key,myObj[key]);
}