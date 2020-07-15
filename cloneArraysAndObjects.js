let a = [1,2,3];
let b = Array.from(a);
b[0]=10;
console.log(a,b);

let aobj = [{x:1},{y:2},{z:3}];
//let bobj = Array.from(aobj);
let bobj = JSON.parse(JSON.stringify(aobj));
bobj[0].x=0;
console.log(aobj,bobj);