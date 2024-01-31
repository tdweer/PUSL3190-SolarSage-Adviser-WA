const express = require('express')
const { getSales,
         getSale,
         createSale,
         deleteSale,
         updateSale 
} = require('../controllers/salesController')

const router = express.Router()

//Get all sales
router.get('/', getSales)

//Get a single sale
router.get('/:id', getSale)

//Create a new sale
router.post('/',createSale)

//Delete a sale
router.delete('/:id',deleteSale)    

//Update a sale
router.patch('/:id',updateSale)


module.exports = router
