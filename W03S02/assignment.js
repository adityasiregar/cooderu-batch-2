async function rendam() {
    await setTimeout(function() {
      console.log("Mulai rendam. Setelah ini kucek")
    }, 3000);
  }
  async function kucek() {
    setTimeout(function() {
      console.log("Sedang kucek. Setelah ini bilas")
    }, 2000);
  }
  async function bilas() {
    setTimeout(function() {
      console.log("Sedang bilas. Setelah ini jemur")
    }, 1000);
  }
  async function jemur() {
    setTimeout(function() {
      console.log("Sedang jemur. Setelah ini setrika")
    }, 5000);
  }
  async function setrika() {
    setTimeout(function() {
      console.log("Sedang setrika. Setelah ini selesai")
    }, 4000);
  }
 rendam()
 kucek();
 bilas();
 jemur();
 setrika();
 
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