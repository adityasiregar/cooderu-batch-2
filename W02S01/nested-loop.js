
Arr = [
    [0,1,2,3,4], // 0
    [0,1,2,3,4], // 1
    [0,1,2,3,4], // 2
    [0,1,2,3,4]  // 3
]
 // A[0][0] A[1][0] A[2][0] A[3][0]
 // A[0][1] A[1][1] A[2][1] A[3][1]
 // A[0][2] A[1][2] A[2][2] A[3][2]

let col = 5
let row = 4

for(let i=0; i<col ; i++) { 
   let data = ''
   for(let j=0; j<row; j++) { 
        data = data + " " + Arr[j][i] 
   }
   console.log(data)
}


