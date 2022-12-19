const { Photo } = require('../models')

const createPhoto = async (req, res) => {
    const body = req.body
    
    Photo.create({
        caption: body.caption,
        url: body.url,
        user_id: req.id,
    }).then(photo => {
            res.status(200).json({
                message: "Photo created",
                data: photo,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

module.exports = {
    createPhoto
}