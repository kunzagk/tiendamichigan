import { describe, expect, test } from 'vitest'
import app from './index'
import request from 'supertest'
import HTTP_STATUS from '../config/constans'

describe('Server de tienda Michigan', () => {
  test('[GET] /products | debe devolver un status code 200 y el tipo de dato recibido es un arreglo.', async () => {
    const response = await request(app).get('/products').send()

    expect(response.statusCode).toEqual(HTTP_STATUS.ok.code)
    expect(response.body).toBeInstanceOf(Array)
  })
  test('[GET] /products/:id | debe devolver un status code 200 al solicitar un producto por id', async () => {
    const tokenTest = 'token'
    const idTest = '1'

    const response = await request(app).get(`/products/${idTest}`).set('authorization', tokenTest).send()

    expect(response.statusCode).toEqual(HTTP_STATUS.ok.code)
    expect(response.body).toBeInstanceOf(Array)
  })
  test('[GET] /login | debe devolver un status code 200 al iniciar sesion', async () => {
    const tokenTest = 'token'

    const response = await request(app).get('/products').set('authorization', tokenTest).send()

    expect(response.statusCode).toEqual(HTTP_STATUS.ok.code)
    expect(response.body).toBeInstanceOf(Array)
  })
  test('[POST] /register | registra un nuevo usuario y devuelve un código 201.', async () => {
    const usuario = { id: 15, email: 'lala@gmail.com' }
    const response = await request(app).post('/cafes').send(usuario)

    expect(response.statusCode).toEqual(HTTP_STATUS.created.code)
    expect(response.body).toEqual(expect.arrayContaining([usuario]))
  })
  test('[POST] /products | agrega un nuevo producto y devuelve un código 201.', async () => {
    const idTest = 651982
    const producto = {
      idTest,
      titulo: 'disfraz gatubela',
      img: 'https://www.guinnessworldrecords.es/Images/nala%20header_tcm29-606154.jpg',
      descripcion: 'gatita',
      precio: '4500'
    }
    const response = await request(app).post('/products').send(producto)

    expect(response.statusCode).toEqual(HTTP_STATUS.created.code)
    expect(response.body).toEqual(expect.arrayContaining([producto]))
  })
})
