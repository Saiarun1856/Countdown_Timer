// const anagram = function(s,t){
//     s = s.split('').sort().join('')
//     t = t.split('').sort().join('')

//     return s === t
// }
// console.log(anagram('anagram','nagaram'))



const anagram = function(s,t){
   if(s.length != t.length){
    return false
   }

   else{
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    return s === t
   }
}
console.log(anagram('sai','ias'))
