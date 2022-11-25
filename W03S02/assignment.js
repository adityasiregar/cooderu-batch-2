  async function rendam(cb) {
    await setTimeout(function() {
      console.log("Mulai rendam. Setelah ini kucek")
      cb()
    }, 3000);
  }

  async function kucek(cb) {
    setTimeout(function() {
      console.log("Sedang kucek. Setelah ini bilas")
      cb()
    }, 2000);
  }

  async function bilas(cb) {
    setTimeout(function() {
      console.log("Sedang bilas. Setelah ini jemur")
      cb()
    }, 1000);
  }

  async function jemur(cb) {
    setTimeout(function() {
      console.log("Sedang jemur. Setelah ini setrika")
      cb()
    }, 5000);
  }

  async function setrika() {
    setTimeout(function() {
      console.log("Sedang setrika. Setelah ini selesai")
    }, 4000);
  }

function myCallback() {
    kucek(function() {
        bilas(function(){
            jemur(function() {
                setrika()
            })
        })
    })
}

rendam(myCallback)

//  nyuci()
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