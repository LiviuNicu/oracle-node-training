//map() filter() reduce()

let obj=[{
   name:'John',
   math:8,
   science:5
},
{
    name:'Paul',
    math:10,
    science:3
 },
 {
    name:'Nick',
    math:5,
    science:10
 }];

 for(let i=0;i<obj.length;i++){
     obj[i].math+=1;
 }
 
 let sum=0;
 let newArr = obj.map((currentElement,index,initialArray)=>{
     sum+=currentElement.math;
     return currentElement;
 })
 console.log(sum)


 for(let i=0;i<obj.length;i++){
     if(obj[i]<8){
        obj[i].math+=1;
     }
}

 let lessThan8 = currentElement => currentElement.math <8;
 console.log(obj.filter(lessThan8));
 console.log(obj.find(lessThan8));

 const mathSum = obj.reduce((accumulator,currentElement,index,initialArray)=>{
     return accumulator+=currentElement.math;
 },0)

 console.log(mathSum);

 