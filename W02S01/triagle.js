// *      i=0  j=1
// **     i=1  j=2
// ***    i=2  j=3
// ****   i=3  j=4
// *****  i=4  j=5
let N = 5

// for(let i=0; i<N; i++) { // i = 0
//     let data = ''
//     for(let j=0; j<=i; j++) { // 
//         data += '*'
//     }
//     console.log(data)
// }

//     *   j=4 5
//    **   j=3 4
//   ***   j=2 3
//  ****   j=1 2
// *****   j=0 1
// for(let i=0; i<N; i++) { // i = 0
//     let data = ''
    
//     for(let j=1; j<N-i; j++) { // 
//         data += ' '
//     }

//     for(let j=0; j<=i; j++) { // 
//         data += '*'
//     }
//     console.log(data)
// }

// *****
//  ****
//   ***
//    **
//     *

// *****
// ****
// ***
// **
// *

// xxxx*  i=0 j=1  i*2 + 1 
// xxx*** i=1 j=3
// xx***** i=2 j=5
// x******* i=3 j=7
// ********* i=4 j=9

for(let i=0; i< N; i++) {
    let data = ''
    data += ' '.repeat(N-1-i)
    // data += '*'.repeat(i*2+1)
    for (let j=0; j< i*2+1; j++) {
        if (j==0 || j == (i*2+1)-1) {
            data += '*'
        } else {
            data += ' '
        }
    }
    console.log(data)
}
for(let i=0; i< N-1; i++) {
    let data = ''
    data += ' '.repeat(i+1)
    // data += '*'.repeat((N-i-1)*2-1)
    for (let j=0; j < (N-i-1)*2-1; j++) {
        if (j==0 || j == (N-i-1)*2-2 ) {
            data += '*'
        } else {
            data += ' '
        }
    }
    console.log(data)
}

// *********
//  *******
//   *****
//    ***
//     *

//     *   
//    * *
//   *   *
//  *     *
// *********
//  *******  i=0 j=7 => (N-i-1) * 2 - i => 7 
//   *****   i=1 j 5 => (N-i-1) * 2 - i => 5
//    ***    i=2 j 3
//     *     i=3 j 1