const express = require("express");
const app = express()
const port =process.env.PORT || 8000;
var cors = require('cors')
const connecTOMongo = require("./db")
connecTOMongo();
app.use(express.json())
app.use(cors())
app.use("/api/auth" , require("./routes/auth"));
app.use("/api/body" , require("./routes/body"));
app.get("/" , (req ,res)=>{
   res.send("json")
})

app.listen(port ,()=>{
    console.log(`listning on ${port}`)
})