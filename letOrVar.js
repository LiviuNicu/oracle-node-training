// var, let and const

function addNumber(a,b){
    console.log(sum);
    var sum;
    sum = a+b;
    return sum;
}

function addNumber2(a,b){
    console.log(sum);
    let sum;
    sum = a+b;
    return sum;
}

// addNumber(2,3);
// addNumber2(3,4);

function scopedLet(){
    let arr = [20,30,40];
    let i = 30;
    for(let i=0;i<arr.length;i++){
        console.log('for i',i);
    }

    console.log('global i',i);
}
scopedLet();