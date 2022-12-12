const Model = require('../models')
const { Province } = require('../models')

class RegencyController {
    static async create (req, res) {
        const {province_id, name, alt_name, latitude, longitude} = req.body
        try{
          const createRegency = await Model.Regency.create({province_id : province_id, name : name, alt_name : alt_name, latitude : latitude, longitude : longitude})
          if(createRegency) return res.status(200).json({
            message : 'Regency successfully created',
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async update (req, res) {
        const {id} = req.params
        const {name, alt_name, latitude, longitude} = req.body
         try{
          const updateRegency= await Model.Regency.update({name : name, alt_name : alt_name, latitude : latitude, longitude : longitude}, {where : {id : id}})
          if(updateRegency) return res.status(200).json({
            message : 'Regency successfully updated',
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async delete (req, res) {
        const {id} = req.params
         try{
          await Model.Regency.destroy({where : {id : id}})
          return res.status(200).json({
            message : 'Regency successfully delete',
          }) 
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getAll (req, res) {
         try{
          const Regency = await Model.Regency.findAll(
              {
                  include : {
                      model : Province,
                      as : "province"
                  }
              }
          )
          return res.status(200).json({
            data : Regency,
          })  
        } catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }

    static async getById (req, res) {
        const {id} = req.params
         try{
          const Regency = await Model.Regency.findOne({where : {id : id}})
          if(Province) return res.status(200).json({
            data : Regency,
          })  
        }catch(err){
            console.log(err)
            res.status(500).json({
                message : 'INTERNAL SERVER ERROR'
            })
        }
    }
}

module.exports = RegencyController