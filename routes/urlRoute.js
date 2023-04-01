const express = require("express");
const createDB = require("../config/db");
const Urls = require("../models/urlsModel")
const {nanoid} = require("nanoid");
const router = express.Router();


const baseUrl = 'http://localhost:1221/urlapi/';


createDB.sync().then(()=>{console.log("DB is running")})

router.post("/",async(req,res)=>{
    try{

        const {longUrl} = req.body;
        
        const shortUrl = baseUrl+nanoid(4);
        console.log(longUrl,shortUrl)
        
        const storeUrls = await Urls.create({
            longUrl,
            shortUrl
        })
        
        return res.status(200).json({
            status: "ok",
            shortUrl : storeUrls.shortUrl
          });


    }catch(e){
        console.log(e);
        return res.send(e.message);

    }
});

router.get("/:shortid" , async(req,res)=>{
    let short = req.params.shortid;
    let urls = await Urls.findOne({
        where:{
            shortUrl: `${baseUrl}${short}`
        }
    });
    if(!urls){
        res.status(404).send("Enter valid code")
    }
    res.redirect(urls.longUrl)
})


module.exports = router