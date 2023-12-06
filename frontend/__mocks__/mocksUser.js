import { http, HttpResponse } from 'msw'

const login = http.post('/login', async ({ request }) => {
  const user = await request.json()

  if (!user.email || !user.password) {
    return HttpResponse.json(
      { message: 'Completa todos los campos' },
      { status: 404 }
    )
  }

  return HttpResponse.json(
    {
      token: 'esteesmitoken.gtrtg.etgrtg'
    },
    { status: 200 }
  )
})

const register = http.post('/register', async ({ request }) => {
  const user = await request.json()

  if (!user.nombre || !user.email || !user.password) {
    return HttpResponse.json(
      { message: 'Completa todos los campos' },
      { status: 404 }
    )
  }

  return HttpResponse.json(
    { id: 1, email: 'fernanda.nunez55@gmail.com' },
    { status: 201 }
  )
})

const newProduct = http.post('/newproduct', async ({ request }) => {
  const product = await request.json()

  if (!product.titulo || !product.img || !product.descripcion) {
    return HttpResponse.json(
      { message: 'Completa todos los campos' },
      { status: 404 }
    )
  }

  return HttpResponse.json(
    {
      titulo: 'Gatito',
      img: 'https://ih1.redbubble.net/image.4807963915.9934/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      descripcion: 'Gato en vidrio'
    },
    { status: 201 }
  )
})

export default [
  login,
  register,
  newProduct
]
