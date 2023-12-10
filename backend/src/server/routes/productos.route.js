import express from 'express'
import * as productos from '../controllers/productos.controller.js'

const router = express.Router()

router.get('/products', productos.getProducts)

router.post('/newproduct', productos.newProduct)

// En productos.route.js
router.get('/products/:id', productos.getProductById)

export default router
