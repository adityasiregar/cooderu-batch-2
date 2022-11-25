async function rendam() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Mulai rendam. Setelah ini kucek")
            resolve()
        }, 100);
    })  
}

async function kucek() {
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Sedang kucek. Setelah ini bilas")
        resolve()
        }, 2500);
    })
}

async function bilas() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
        console.log("Sedang bilas. Setelah ini jemur")
        resolve()
        }, 1000);
    })
}

async function jemur() {
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Sedang jemur. Setelah ini setrika")
        resolve()
     }, 5000);
    })
}

async function setrika() {
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Sedang setrika. Setelah ini selesai")
         resolve()
        }, 4000);
    })
}

// 1
// rendam().then(() => kucek().then(()=> bilas()))

// rendam().
//     then(kucek).
//     then(bilas).
//     then(jemur). 
//     then(setrika)


async function nyuci() {
    rendam()
    kucek()
    bilas()
    jemur()
    setrika()
}

nyuci()

 // Sedang bilas. Setelah ini jemur
 // Sedang kucek. Setelah ini bilas
 // Mulai rendam. Setelah ini kucek
 // Sedang setrika. Setelah ini selesai
 // Sedang jemur. Setelah ini setrika
 
 
 // expect
 // Mulai rendam. Setelah ini kucek
 // Sedang kucek. Setelah ini bilas
 // Sedang bilas. Setelah ini jemur
 // Sedang jemur. Setelah ini setrika
 // Sedang setrika. Setelah ini selesai
 

 // Using Promise 
 // Using callback
 // Async Await