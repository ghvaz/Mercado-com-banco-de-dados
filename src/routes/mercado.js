import e from "express"
const rt = e().Router()

import markt from "../controller/mercado.js"
rt.get("/", markt.list)
rt.get("/:nome", markt.show)
rt.post("/", markt.add)
rt.put("/:nome", markt.update)
rt.delete("/:nome", markt.delete)

export default rt