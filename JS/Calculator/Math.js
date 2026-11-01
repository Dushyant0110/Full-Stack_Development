function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return b===0 ? "Error" : a/b;
}

export default {add,sub,mul,div};