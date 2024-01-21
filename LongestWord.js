function longestSentence(sent){
    let longestWord = ''
    const words = sent.split(' ')
    console.log(words)
    for(let word of words){
        if(word.length > longestWord.length ){
            longestWord = word
        }
    }
    return longestWord
}
console.log(longestSentence('my name is saiarun'))