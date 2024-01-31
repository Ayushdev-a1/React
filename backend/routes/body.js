const express = require('express');
const router = express.Router();
const json = require("../modals/imagesData")

// router.get('/men',async (req,res)=>{
//     try {
//         res.send(json.map((img)=>{`<img src=${img.img} alt="" srcset="" />`}))
//     } catch (error) {
//         console.log(error)
//     }

// })
module.exports = router;
