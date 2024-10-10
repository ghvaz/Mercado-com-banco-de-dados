import bd from "../config/banco.js"
const SchemaFornecedor = new bd.Schema({
    nome:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
})

const fonr = new bd.model("fornecedor", SchemaFornecedor)
export default fonr