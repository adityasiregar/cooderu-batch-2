let student = {
    "name": "ABCD",
    "class": "",
    "courses": []
}

// let data = new Map()
// data.set("Gebby", {"name":"Gabriella", "address": "Sitoluama"})

// student["93"] = "Hello World"

// console.log(student["class"])

let data = [3, 2, 10, 20, 1, 5, 9] 
let k = 12

// O(N^2)
function isEquals(data, k) {
    for (let i=0; i < data.length; i++) {  
        for(let j=i+1; j < data.length; j++) {   
            if (data[i] + data[j] == k) {
                return true
            }
        }
    } 

    return false
}

// O(N)
function isEqualsOptimal(data, k) {
    let dictionary = {}
    for (let i=0; i < data.length; i++) {  
        dictionary[data[i]] = true
    } 

    for (let i=0; i < data.length; i++) {
        if(dictionary[k - data[i]]) {
            return true
        }
    }

    return false
}

console.log(isEqualsOptimal(data, k))