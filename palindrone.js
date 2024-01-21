function palindrone(x){
    const value = x.split('').reverse().join('')
    return x === value
}
console.log(palindrone('sas'))