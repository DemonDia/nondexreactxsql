const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const mysql = require("mysql")

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"",
    database:"cruddbase"

})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
// app.get("/",(req,res)=>{
//     // const sqlInsert = 
//     // "INSERT INTO movie_reviews {movieName,movieReview} VALUES {'inception','good movie'}"
//     // db.query(sqlInsert,(err,result)=>{
//     //     res.send("Alt+f4")
//     // })
    
// })
app.get("/", async(req,res)=>{
    // alert(res.status())
    console.log("GG")
})
app.get("/api/get",(req,res)=>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect,(err,result) =>{
        res.send(result)
    })
})
app.post("/api/insert",(req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = "INSERT INTO movie_reviews {movieName,movieReview} VALUES {'inception','good movie'}"
    db.query(sqlInsert,[movieName,movieReview],
        (err,result)=>{

            
            res.send(result)
            // console.log(result)
            console.log("ok")
            // res.send(readFile('../client/index.js', 'utf8') );
    })
    // const sqlInsert = 
    // "INSERT INTO movie_reviews {movieName,movieReview} VALUES {'inception','good movie'}"
    // db.query(sqlInsert,(err,result)=>{
    //     res.send("Alt+f4")
    // })
    
})
app.listen(3306, () =>{
    console.log("running at this 3306")
})
