import 'dotenv/config'
import genericSqlQuery from '../databases/db.js'

export const getProducts = async () => await genericSqlQuery('SELECT * FROM productos;')
