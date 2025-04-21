//setup.. this is similar to when we use our default tags in html
const express = require("express")
var cors = require('cors')
//activate or tell this app variable to be an express server
const app = express()
app.use(cors()npm )
const router = express.Router()


//making an API using routes
//Routes are used to handle browser requests. They look like URLs. The difference is that when a browser
//requests a route, it is dynamically handled by using a function.

router.get("/songs", function(req,res){
    const songs = [
    {
        title: "We Found Love",
        artist: "Rihanna",
        popularity: 10,
        releaseDate: new Date(2001, 9, 22),
        genre: ["electro house"]
    },
    {
        title: "Happy",
        artist: "Pharell Williams",
        popularity: 10,
        releaseDate: new Date(2013, 11, 21),
        genre: ["soul", "new soul"]

    }
    ];

    res.json(songs)
})

//all requests that usally usen an api start with /api... so th url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)