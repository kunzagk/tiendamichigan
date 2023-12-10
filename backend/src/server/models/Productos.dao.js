// En productos.dao.js
import 'dotenv/config'
import genericSqlQuery from '../databases/db.js'

// Obtener todos los productos
export const getProducts = async () => {
  return await genericSqlQuery('SELECT * FROM productos;')
}

// Crear un nuevo producto
export const createProduct = async (titulo, img, descripcion, precio) => {
  return await genericSqlQuery('INSERT INTO productos (titulo, img, descripcion, precio) VALUES ($1, $2, $3, $4) RETURNING *;', [titulo, img, descripcion, precio])
}

// Obtener un producto por su ID
export const getProductById = async (id) => {
  const query = 'SELECT * FROM productos WHERE id = $1;'
  return await genericSqlQuery(query, [id])
}
