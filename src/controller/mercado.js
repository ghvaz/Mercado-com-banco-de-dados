import model from "../model/mercado.js"

export default {
    async add (req, res) {
        try {
            let markt = await model.create(req.body)
            res.status(200).json(markt)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async list (req, res) { 
        try {
            let markts = await model.find()
            res.status(200).json(markts)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async show(req, res) {
        try {
            let markt = await model.find({nome: req.params.nome})
            res.status(200).json(markt)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    async update (req, res) {
        try {
            let markt = model.findAndUpdate({nome: req.params.nome}, req.body)
            res.status(200).json(markt)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    
    async delete (req, res) {
        try {
            let markt = model.findAndDelete({nome: req.params.nome})
            res.status(200).json(markt)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}