import 'dotenv/config'
import genericSqlQuery from '../databases/db.js'

export const createUser = async (nombre, email, password) => await genericSqlQuery('INSERT INTO usuarios (id, nombre, email, password) VALUES (DEFAULT ,$1, $2, $3) RETURNING *;', [nombre, email, password])

export const verifyUser = async (email) => await genericSqlQuery('SELECT * FROM usuarios WHERE email = $1;', [email])

export const getUser = async (email) => await genericSqlQuery('SELECT * FROM usuarios WHERE email = $1 ;', [email])
