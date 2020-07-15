const doubleEXP = function(num){
    return num*2;
}

const doubleEXP = (num) => {
    return num*2;
}
const doubleEXP = num => num*2;


let obj1 = {
    id:42,
    counter : function counter() {
        console.log(this.id);
        setTimeout(function(){
            console.log(this.id);
        }.bind(this), 1000)
    }
}

obj1.counter();

let obj2 = {
    id:42,
    counter : function counter() {
        setTimeout(()=>{
            console.log(this.id);
        }, 1000);
    }
}

obj2.counter();