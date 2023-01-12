function Mutation(arr){
    const firstEntry = arr[0].toLowerCase().split("");
    const secondEntry = arr[1].toLowerCase().split("");

    let checkLetter = secondEntry.every(letter => {
        // console.log(firstEntry.includes(letter));
        return firstEntry.includes(letter);
    });

    return checkLetter
}

Mutation(["Roland", "Poland"])
