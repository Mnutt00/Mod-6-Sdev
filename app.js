const express = require("express");
const Song = require("./models/song");

var cors = require('cors');

const app = express();
app.use(cors());


app.use(express.json());

const router = express.Router();

//grab all the song in a database
router.get("/songs", async(req,res) =>{
    try{
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
})

router.post("/songs", async(req,res) =>{
    try{
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch(err){
        res.status(400).send(err)
    }});
    
app.use("/api", router);

app.listen(3000);
