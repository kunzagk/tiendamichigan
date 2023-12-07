import express from 'express'
import * as productos from '../controllers/productos.controller.js'

const router = express.Router()

router.get('/products', productos.getProducts)

export default router
