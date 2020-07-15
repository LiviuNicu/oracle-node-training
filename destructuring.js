let a,b,rest;
[a,b]=[10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10,20,30,40,50];
console.log(rest);


const foo = ['one','two','three'];
const [red,yellow,green]= foo;
console.log(red)
console.log(yellow)
console.log(green)

const user ={
id:3,
isVerifyed:true
}

const {id,isVerifyed}=user;
console.log(id);
console.log(isVerifyed);

