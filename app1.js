const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'khushboo'

});

db.connect((err) => {
    if (err) {
        console.error('error connecting to database', err);
    }
    else {
        console.log('connecting to db');
    }
});

app.use(express.json());

//define crud routes and controllers

//create operation
app.post('/create', (req, res) => {
    const { PersonID, LastName, FirstName, City } = req.body;
    const query = 'insert into Persons (PersonID,LastName,FirstName,City) Values(?,?,?,?)';

    db.query(query, [PersonID, LastName, FirstName, City], (err, results) => {
        if (err) {
            console.error('Error creating data', err);
            res.status(500).send('error creating data');
        }
        else {
            res.status(201).json({ message: 'Data created successfully', id: results.insertId });
        }
    });
});


//read operatioon
app.get('/products', (req, res) => {
    const query = 'select * from Persons';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data: ', err);
            res.status(500).send('Error fetching data');
        }
        else {
            res.json(results);
        }

    })
});

//update operation
app.put('/products/:PersonID', (req, res) => {
    const { FirstName } = req.body;
    const { PersonID } = req.params;

    const query = 'update persons set FirstName = ? where PersonID = ?';
    db.query(query, [FirstName, PersonID], (err, results) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('error updating data');
        }
        else {
            res.json({ message: 'data updated successfully', PersonID });
        }
    });
})

//delete operation
app.delete('/products/:PersonID', (req, res) => {
    const { PersonID } = req.params;
    const query = 'delete from persons where PersonID = ?';
    db.query(query, [PersonID], (err, results) => {
        if (err) {
            console.error('Error deleting data:', err);
            res.status(500).send('Error deleting data');
        }
        else {
            res.json({ message: 'Data deleted successfully', PersonID });
        }
    })

});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
