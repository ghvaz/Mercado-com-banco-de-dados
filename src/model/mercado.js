import { Schema } from "mongoose"
import bd from "../config/banco.js"

const Schemamercado = new bd.Schema({
    nome:{
        type:String,
        required:true

    },
    endereco:{
        type: Schema.Types.Mixed,
        required:true
    }
})

const mercado = bd.model("mercado", Schemamercado)
export default mercado