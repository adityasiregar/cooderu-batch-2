const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

// sample 
// localhost:3000?id=1&name=Aceh
app.get('/', (req, res) => {
    let data = req.query
    console.log("hello world")
    
    res.status(200).send(`Your Quey Data is ${data}`)
});

app.get('/province', (req, res) => {
    fs.readFile('./province.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let dataJson = JSON.parse(data)
        res.status(200).send(dataJson)
    });
})

// get by params
// localhost:3000/province/1
app.get('/province/:id', (req, res) => {
    let id = req.params.id

    fs.readFile('./province.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let provinceList = JSON.parse(data)

        for(let province of provinceList) {
            if (province.id == id) {
                return res.status(200).send(province)
            } 
        }
    
        res.status(400).send("Data Not Found")
    });
});
  
app.post('/province', (req, res) => {
    let newData = req.body

    fs.readFile('./province.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }

        let provinceList = JSON.parse(data)
        provinceList.push(newData)

        fs.writeFile('./province.json', JSON.stringify(provinceList), err => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server")
            }

            res.status(200).send("Success to Add Province")
        });    
    });

});

app.put('/', (req, res) => {
    console.log("Hello World");
    res.send('Hello World Put')
});

app.delete('/', (req, res) => {
    console.log("Hello World");
    res.send("Hello World Delete")
});
  
console.log("App running on port 3000")

app.listen(3000);

// http status
// 200 success
// 4xx Bad Request, kesalahan user/ client
// 5xx Server Error, terkait kesalahan dalam server

// Assignment
// CRUD API Province
// CRUD API Regency
// Get API Regency by Province ID
// Get API Regency By Province Name
// Get API Province Name by Regency Name