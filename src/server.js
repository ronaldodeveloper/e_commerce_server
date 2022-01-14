const express = require("express");
const app = express();
const port= process.env.PORT || 3005;
const cors= require("cors");
const {router} = require("./routers/router")

// set app
app.use(cors({origin:"*"}))
app.use(express.json())

// app router
app.use('/api', router)


app.listen(port, (err)=>{
    if(!err){
        console.log(`Server On https://localhost:${port}`)
    }else{
        console.log(`Erro: ${err}`)
    }
})