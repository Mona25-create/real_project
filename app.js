let express = require('express');
let app = express();
let mongoose = require('mongoose');
let msg = require('./models/msgs').msg;

mongoose.connect("mongodb://localhost/messages", { useNewUrlParser: true });

app.use(express.static('public'));
app.use(express.json());
app.get('/mesage',async (req,resp)=> {
    let message = await msg.find();
    resp.send(message);
})
app.post('/mesage', async (req,resp)=>{
    let reqBody = req.body;
    let newMsg = new msg({
        msg: reqBody.msg
    })
    await newMsg.save();
})
app.listen(3000, ()=>{
    console.log("listening port 3000");
})
