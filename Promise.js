const returnAPromise = function(string){
    return new Promise((resolve,reject)=>{
        if(typeof string === 'string'){
            resolve(string+' suceess!')
        }else{
            reject('Not a string');
        }
    })
}

returnAPromise('test').then((response)=>{
    console.log(response);
}).catch(err=>{
    console.log(err);
});

returnAPromise(1).then((response)=>{
    console.log(response)
}).catch(err=>{
    console.log(err);
});

const checkPromise = async (str)=>{
    try{
        const res = await returnAPromise(str);
        const res2 = await otherPromise(str);
    } catch(err){
        console.log(err);
    }
}
checkPromise('test');
checkPromise(1);
