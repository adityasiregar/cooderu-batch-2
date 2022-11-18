console.log("\nPrint For")
for (let i=1; i<=10; i++) { // i=2
    console.log(i)
}

console.log("\nPrint For Array")
let cars = ["BMW", "Honda", "Tesla", "Toyota"]
cars.push("Wuling")
cars.pop()
cars.pop()

for(let i=0; i< cars.length; i++) {
    console.log(cars[i])
}

console.log("\nPrint Car For Of")
for (let car of cars) {
    console.log(car)
}

let user = {
    name: "fulan", 
    email: "email@email.com", 
    currency: "IDR",
    balance : "500000"
}

user["isValid"] = true

console.log("\nPrint Object")
let string = `Hi ${user.name} saldo anda skrng sebesar ${user.currency}. ${user.balance} `
console.log(string)

console.log("\nPrint For In")
for(let key in user) {
    console.log(user[key])
}

user["name"] = "Bambang"
console.log(user)
