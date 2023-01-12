function Mutation(arr){
    const firstEntry = arr[0].toLowerCase().split("");
    const secondEntry = arr[1].toLowerCase().split("");

    let checkLetter = secondEntry.every(letter => {
        // console.log(firstEntry.includes(letter));
        return firstEntry.includes(letter);
    });

    console.log(checkLetter)
}

Mutation(["Roland", "Poland"])
Mutation(["Roland", "Poland"])
Mutation(["Fed", "Feeding"])
Mutation(["Atiss", "Satis"])
