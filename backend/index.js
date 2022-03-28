const express=require("express");
const app=express();
const notes=require("./data/notes");
const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id)
    res.send(note);
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
