const sorting = function(arr){
    let len = arr.length
    let count = 0
    for(let i=0;i<len;i++){
        if(arr[i] === 0){
            count++
        }

    }
    for(let i=0;i<count;i++){
        arr[i] = 0
    }

    for(let i=count;i<len;i++){
        arr[i] = 1
    }
    return arr

}

console.log(sorting([0,1,0,1,1,1]))