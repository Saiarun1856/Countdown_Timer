// let str ="sai arun vakacherla"
// value = str.split('').reverse().join('')
// console.log(value)



// function reverse(str){
//     let rev = ''
//     for(let i=str.length -1; i>=0; i--){
//         rev += str[i]
//     }
//     return rev

// }
// console.log(reverse('sai'))


function reversestring(str) {
    let rev = ''
    for(let i=str.length - 1;  i >=0 ; i-- ){
        rev += str[i]
    }
    return rev
}
console.log(reversestring("hello"))