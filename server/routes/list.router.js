const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET shopping items
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM shopping_list ORDER BY name ASC`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});


//POST shopping items
router.post('/', (req, res) => {
  const newItem = req.body;
  const sqlText = `INSERT INTO students (name, quantity, unit) VALUES ($1, $2, $3)`;
  pool.query(sqlText, [newItem.name], [newItem.qunatity], [newItem.unit])
     .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      })
});

//Delete shopping item
router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Dete route called with id of', id);

    let queryText = `DELETE FROM shopping_list WHERE id=$1;`
    pool.query(queryText, [id])
    
    .then(result => {
        res.send.Status(201);
    })
    .catch(error => {
        console.log(`Error adding new book`, error);
       res.setStatus(500); 
    });
    

})



module.exports = router;
