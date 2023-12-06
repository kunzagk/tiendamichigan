import express from 'express'
import * as usuarios from '../controllers/usuarios.controller.js'
import verifyToken from '../middlewares/usuarios.middleware.js'

const router = express.Router()

router.post('/register', usuarios.register)
router.post('/login', usuarios.login)

router.get('/profile', verifyToken, usuarios.returnUser)

export default router
