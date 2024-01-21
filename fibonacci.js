// const fibonacci = function(n){
//     let arr = [0,1]
//     for (let i = 2; i <=n; i++) {
//         arr.push(arr[i-1]+arr[i-2])
        
//     }
//     console.log(arr)
// }
// fibonacci(5)


const fibonaccis = function(n){
    if(n<=1) return n;

    return fibonaccis(n-1)+fibonaccis(n-2)
}
console.log(fibonaccis(3))