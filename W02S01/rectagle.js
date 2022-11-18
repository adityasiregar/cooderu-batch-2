// *****
// *****
// *****
// *****
// *****

let N = 5
for(let i=0; i<N ; i++) {
    let data = ''
    for (let j=0; j<N; j++) {
        if (j==0 || i==0 || j == N-1 || i== N-1) {
            data += '*'
        } else {
            data += ' '
        }

    }
    console.log(data)
}