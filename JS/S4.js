var objList=[];
function add(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;

    var obj={
        name:val1,
        rating:val2
    };
    objList.push(obj);
    console.log(objList);
    
}