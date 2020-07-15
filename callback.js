function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

let compute = function (a,b,callback){
    return callback(a,b);
}

console.log(compute(7,2,add));
console.log(compute(7,2,multiply));
console.log(compute(7,2,function(a,b){return a-b}));