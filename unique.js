var numbers = [1,2,2,4,4,6,7]

const removeDuplicate = (arr)=>{
    let obj = {}
    let result = []

    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            result.push(arr[i])
        }

        obj[arr[i]] = true
    }
    return result
}
console.log(removeDuplicate(numbers))
