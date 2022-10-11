function LongestWord(sentence){

    sentence = sentence.replace(/[^a-zA-Z0-9 ]/g, "")
    words = sentence.split(" ");
    longestWord = words[0]
    for (i = 0; i<words.length; i ++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]	
        }
    }
   return longestWord
}

console.log(LongestWord("The boy is very brilliant"));
console.log(LongestWord("fun&!! time"));

