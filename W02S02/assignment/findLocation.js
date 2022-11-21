const {regencies, provinces} = require('./location')

class Province {
    regencies = []

    constructor(id, name, alt_name, lat, long){
        this.id = id
        this.name = name 
        this.alt_name = alt_name
        this.lat = lat 
        this.long = long

        this.loadRegencies()
    }

    provinceName() {
        console.log(`Province Name : ${this.name}`)
    }

    loadRegencies() {
        for (let reg of regencies) {
            if (reg.province_id == this.id) {
                let newRegency = new Regency(
                    reg.id,
                    reg.name,
                    reg.alt_name,
                    reg.latitude,
                    reg.longitude,
                    this,
                )
                this.regencies.push(newRegency)
            }
        }
    }

    findRegenciesByName(name) {
        for(let reg of this.regencies) {
            if(reg.name == name) {
                return true
            }
        }
        return false
    }
}

class Regency {
    constructor(id, name, alt_name, lat, long, province){
        this.id = id
        this.name = name 
        this.alt_name = alt_name
        this.lat = lat 
        this.long = long
        this.province = province
    }   
}

class Location {
    provinceList = {}
    regencyList = {}

    constructor() {
        this.loadProvince()
        this.loadRegencies()
    }

    loadProvince() {
        for (let province of provinces) {
            let newProvince = new Province(
                province.id,
                province.name,
                province.alt_name,
                province.latitude,
                province.longitude
            )   
            this.provinceList[province.id] = newProvince
        }
    }

    loadRegencies() {
        for (let regency of regencies) {
            let newRegency = new Regency(
                regency.id,
                regency.name,
                regency.alt_name,
                regency.latitude,
                regency.longitude,
                this.provinceList[regency.province_id],
            )   

            this.regencyList[regency.id] = newRegency
        }
    }

    findRegenciesByProvinceName(str) {
        for(let province of this.provinceList) {
            if(province.name == str) {
                let myRegencies = province.regencies
                for(let reg of myRegencies) {
                    console.log(reg.province.name)
                }
            }
        }
    }

    getProvinceByID(id) {
        console.log(this.provinceList[id].regencies)
    }

    findProvinceByRegencyID(id) {
        // input : ID Regency
        // output : Province Name 
        return this.regencyList[id].province.name
    }

    findProvinceNameByRegencyID(id) {
        return this.regencyList[id].province.name
    }

    findProvinceByRegencyName(name) {
        // input : jakarta
        // output : DKI Jakarta
        for(let prov of this.provinceList) {
                   
        }

    }

    findRegencyWithSizeWords(length) {
        // input : 3
        // output : list of Regency with length of words is equal 3
        // KABUPATEN ACEH SINGKIL
        // - KABUPATEN ACEH SELATAN
        // - KABUPATEN ACEH TENGGARA
        // - KABUPATEN ACEH TIMUR
        // - KABUPATEN ACEH TENGAH
        // - KABUPATEN ACEH BARAT
        // - KABUPATEN ACEH BESAR
    }

}

let location = new Location()  

console.log(location.findProvinceNameByRegencyID("1102"))

location.getProvinceByID("16")