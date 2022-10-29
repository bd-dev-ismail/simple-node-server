const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('express');
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Simple node server is running');

});
app.use(cors());
app.use(express.json());
const users = [
    {id:1, name:"Tushar", email: 'tushar@gmail.com'},
    {id:2, name:"Sabbir", email: 'sabbir@gmail.com'},
    {id:3, name:"Nishat", email: 'nishat@gmail.com'},
]
app.get('/users', (req, res)=>{
    res.send(users)
})
app.post('/users', (req, res)=>{
    console.log('Post api calling');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user);
})
app.listen(port, ()=>{
    console.log(`Simple Node server is running on port ${port}`);
})