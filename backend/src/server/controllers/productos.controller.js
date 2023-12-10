import * as sql from '../models/Productos.dao.js'
import HTTP_STATUS from '../../config/constans.js'

// devolver todos los productos
export const getProducts = (req, res) => {
  sql.getProducts()
    .then((products) => {
      console.log(products)
      products.length > 0
        ? res.status(HTTP_STATUS.ok.code).json(products)
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}


// crear un nuevo producto
export const newProduct = (req, res) => {
  const {titulo, img, descripcion, precio } = req.body
  console.log(titulo, img, descripcion, precio)
  sql.createProduct(titulo, img, descripcion, precio)
    .then(([product]) => res.status(HTTP_STATUS.created.code).json({ id: product.id,titulo: product.titulo, precio: product.precio }))
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}