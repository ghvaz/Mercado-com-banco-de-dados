import mg from "mongoose";
async function cnt () {
    try {
        await mg.connect(prcess.env.BD)
        console.log("foi conectado");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default mg