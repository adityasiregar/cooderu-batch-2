
const fs = require('fs')

function getAllProvince(req, res) {
    fs.readFile('./province.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server")
          return;
        }
        let dataJson = JSON.parse(data)
        res.status(200).send(dataJson)
    });
}

function getProvinceByID(req, res){
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
}

function createProvince(req, res) {
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
}

module.exports = {
    getAllProvince,
    getProvinceByID,
    createProvince
}