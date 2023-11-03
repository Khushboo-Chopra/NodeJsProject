const mySql = require('mysql2');
const connection = mySql.createConnection(
    {
        host:localhost,
        user:root,
        password:root,
        database:mydb
    }
);

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to mysql:',err);
        return;
    }
    else{
        console.log('connected to mysql');
    }
})