// function perInformation(fName, city, postCode) {
//     const pi = {
//         firstName : fName,
//         birthPlace: city,
//         postalCode: postCode
//     }
//     return object.values(pi);
// }
// next train
// console.log(perInformation(prompt('please entet your first name'),prompt('please entery your birth province'),prompt('please enter your postal code')))
// let address = addressA('hii', 'hoooy', 'hoooy');
// let address1 = addressA('hii', 'hoooy', 'heere');
// function addressA(aa, bb, cc) {
//     return {
//         a: aa,
//         b: bb,
//         c: cc
//     }
// }


// function compare(address, address1) {
//     let comparson = JSON.stringify(address) === JSON.stringify(address1);
//     if (comparson === true) {
//         return 'yeh';
//     } else {
//         return 'no'
//     }
// };
// console.log(compare(address, address1));
// function deepCompare(address, address1) {
//     let h = [];
//     let h1 = [];
//     for (const key1 in address1) {
//         const element1 = address1[key1];

//         for (let key in address) {

//             if (address[key] == element1) {
//                 h1.push(address[key])
//                 delete address[key]

//             };
//         };
//     };
//     console.log(h1);
//     let uniquechars = [... new Set(h1)];
//     console.log(uniquechars);
//     console.log(address);
//     console.log(address1);
// }
// console.log(deepCompare(address, address1));
// next example
// let post = {
//     title : "i dont know",
//     text : "empty",
//     viwes : 10000000000000000000000000000000,
//     Comment : [
//         {custumer: 'i hate you', author: 'but i love you'},
//         {custumer: 'i hate you', author: 'but i love you'}
//     ],
//       isLive : true,
// }
// function ConstructorF (title, text, viwes, isLive) {
//       this.title = title,
//       this.text = text,
//       this.viwes = viwes,
//       this.isLive = isLive
// }
// let post2 = new ConstructorF('ok', 'yeh')
// console.log(post2);
function a(a = 0, b =  1) {
    console.log(`${ }`)
}