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
    provinceList = []

    constructor() {
        this.loadProvince()
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
            this.provinceList.push(newProvince)
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
        // Print Province Name and List of 
        // Regencies based on Province ID
        // ACEH 
        // - Kab X
        // - Kab Y
        // cari province object berdasarkan id
        province.provinceName()
        province.regencies()
    }

    findProvinceByRegencyID(id) {
        // input : ID Regency
        // output : Province Name 
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

location.findRegenciesByProvinceName("DKI JAKARTA")