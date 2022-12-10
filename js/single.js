// function perInformation(fName, city, postCode) {
//     const pi = {
//         firstName : fName,
//         birthPlace: city,
//         postalCode: postCode
//     }
//     return object.values(pi);
// }
// console.log(perInformation(prompt('please entet your first name'),prompt('please entery your birth province'),prompt('please enter your postal code')))
const address = addressA('hii', 'hoooy', 'heere');
const address1 = addressA('hiei', 'hoooy', 'heere');
function addressA(aa, bb, cc) {
    return {
        a: aa,
        b: bb,
        c: cc
    }
}
console.log(address);
console.log(address1);
function compare(address, address1) {
    let comparson = JSON.stringify(address) === JSON.stringify(address1);
    let noting = 'dont be compeletly same got step 2';
    if (comparson === true) {
        return comparson;
    }else {
      return noting
    }
};
console.log(compare(address, address1));
function deepCompare(params) {
    for (let i = 0; i < address.length; i++) {
         array[i]; 
    }
};
