'use strict';

// let friends = ["James","Lily","Jack","Randy"];
// for (let i = 0; i < friends.length; i ++){
//     console.log(friends[i])
// }

const number = [-12.5,-6,-29.23,-89,-4.3,-34.6];
const calmax = function(usernumber){
    // let maxNumber = Number.MIN_SAFE_INTEGER;
    // let minNumber = Number.MAX_SAFE_INTEGER;
    let maxNumber = usernumber[0];
    let minNumber = usernumber[0];
    for (let i = 1; i < usernumber.length; i ++){
        let currentnumber = usernumber[i];
        if (currentnumber > maxNumber){
            maxNumber = usernumber[i];
        }
        if (currentnumber < minNumber ){
            minNumber = usernumber[i];
        }
    }
    console.log(maxNumber,minNumber);
}

calmax(number)