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
