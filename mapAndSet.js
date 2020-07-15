// Map and Set

//var obj = {name:'Patrik'};// { {person:true}:'Patrik'}

var obj = {};
var a = {};

a[obj]="a";
console.log(a);

var obj2 = {'mapsAreAwesome':true}
var b = new Map();
b.set(obj2,"yes");
console.log(b);

for(let [key,value] of b.entries()){
    console.log(key.mapsAreAwesome,value);
}

var map = new Map();
map.set(0,"a").set(1,"b").set(2,"b").set(3,"c");

var uniqvalues = new Set(map.values());
console.log(uniqvalues);
console.log(Array.from(uniqvalues));


let arr = ['a','a','b','a','c','a'];

var uniqvaluesArr = new Set(arr);
console.log(Array.from(uniqvaluesArr));