import 'dotenv/config'
import genericSqlQuery from '../databases/db.js'

export const getProducts = async () => await genericSqlQuery('SELECT * FROM productos;')

export const createProduct = async (titulo, img, descripcion, precio) => await genericSqlQuery('INSERT INTO productos (id, titulo, img, descripcion, precio) VALUES (DEFAULT ,$1, $2, $3,$4) RETURNING *;', [titulo, img, descripcion, precio])

