import e from "express";
const app = e();

app.use(e.json())

import markt from "./routes/mercado.js"
app.use("/mercado", markt)


app.listen(process.env.PORT, () => console.log('Servidor Rodando'))