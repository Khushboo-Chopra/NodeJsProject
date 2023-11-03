const express = require('express');
const app = express();
const port = 3000;

//sample data (in-memory database)
const items = [
    {id:1,name:'Item 1'},
    {id:2,name:'Item 2'},
    {id:3,name:'Item 3'},
    {id:4,name:'Item 4'},
]

//define a route to get list of items
app.get('/api/items',(req,res)=>{
    res.json(items);
})

//start the server
app.listen(port, ()=>{
    console.log(`Api server is running on port ${port}`);
})
