let str = "Tofay, Is the last day of 2025";

function countFreq(str) {
    let map = new Map();

    for (let char of str) {
        // if (char !== " ") { // space will not be count
        //     if (map.has(char)) {
        //         let oldFreq = map.get(char);
        //         let newFrq = oldFreq + 1;
        //         map.set(char, newFrq);
        //     } else {
        //         map.set(char, 1);
        //     }
        // }

        map.set(char, (map.get(char) || 0) + 1);
    }
    console.log(map)
}

countFreq(str);

//? https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/

