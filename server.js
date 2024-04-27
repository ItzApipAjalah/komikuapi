const express = require("express")
const cors = require("cors")
const komiku = require("./src/route")

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use("/komiku", komiku)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Unofficial Komiku APIs",
        data: {
            popular: "/komiku/popular",
            update: "/komiku/updated",
            manhwa: "/komiku/manhwa?page=1",
            manhua: "/komiku/manhua?page=1",
            manga: "/komiku/manga?page=1",
            comic: "/komiku/comic/solo-leveling",
            chapter: "/komiku/chapter/solo-leveling-chapter-56",
            genrelist: "/komiku/genres",
            genrelist: "/komiku/genres/action",
            search: "/komiku/search?query=solo+leveling",
        }        
    })
})

app.get("*", (req, res) => {
    res.status(404).json({
        message: "404 route not found"
    })
})

module.exports = app