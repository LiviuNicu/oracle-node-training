let counter = (function () {
    let privateConter = 0;

    function changedBy(value){
        privateConter += value;
    }

    return {
        increment : function() {
            changedBy(1)
        },
        decrement : function() {
            changedBy(-1)
        },
        value : function() {
            return privateConter;
        }
    }
})()

// console.log(counter);

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

let Student = function (name, age){
    let n=name;
    let a=age;
    let displayAge = function () {
        console.log(n+' has '+age);
    }
    let addToAge=function (nr){
        age+=nr
        return this;
    }
    let decreseTheAge=function (nr){
        age-=nr;
        return this;
    }
    return {
        addToAge,
        decreseTheAge,
        displayAge
    }
}

let student1 = Student('Patrik',30)
let student2 = Student('paul',30);

student1.addToAge(2).displayAge();
student2.addToAge(4).decreseTheAge(2).displayAge();