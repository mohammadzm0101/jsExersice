// function perInformation(fName, city, postCode) {
//     const pi = {
//         firstName : fName,
//         birthPlace: city,
//         postalCode: postCode
//     }
//     return object.values(pi);
// }
// console.log(perInformation(prompt('please entet your first name'),prompt('please entery your birth province'),prompt('please enter your postal code')))
const address = addressA('hii', 'heee', 'heere');
const address1 = addressA('hii', 'hoooy', 'heee');
function addressA(aa, bb, cc) {
    return {
        a : aa,
        b : bb,
        c : cc
    }   
}
console.log(address);
// console.log(address1);
// let comparson = JSON.stringify(address) === JSON.stringify(address1);
// console.log(comparson);
let samePro = {};
for (const key in address) {
    if (Object.hasOwnProperty.call(address, key)) {
    const element = address[key];
        console.log(element);
        // for (const key1 in address1) {
        //     if (Object.hasOwnProperty.call(address1, key1)) {
        //         const element1 = address1[key1];
        //         console.log(element1)
                
        //     }
        // }
        for (let index = 0; index < address1.length; index++) {
            const element1 = address1[index];  
            if 
        } 
    }
}
