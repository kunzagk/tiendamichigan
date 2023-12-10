import express from 'express'
import * as productos from '../controllers/productos.controller.js'

const router = express.Router()

router.get('/products', productos.getProducts)

router.post('/newproduct', productos.newProduct)

export default router
