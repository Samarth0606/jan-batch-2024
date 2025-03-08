


function privateCounter(){
    let count = 0;

    function getCount(){
        console.log(count); 
    }
    function incCount(){
        count+=1
    }
    function decCount(){
        count-=1
    }
    function resetCount(){
        count=0
    }
    return {getCount,incCount,decCount,resetCount}
}

let returnedVal = privateCounter();
// let {getCount,incCount,decCount,resetCount} = returnedVal; //vinay
// let {getCount} = returnedVal; //vinay



returnedVal.getCount()
returnedVal.incCount()
returnedVal.incCount()
returnedVal.incCount()
returnedVal.getCount()
returnedVal.decCount()
returnedVal.getCount()
returnedVal.resetCount()
returnedVal.getCount()

// console.log(count);

