import { http, HttpResponse } from 'msw'

const newProduct = http.post('/newproduct', () => {
  return HttpResponse.json(
    {
      id: '26587',
      titulo: 'New product',
      img: 'https://ramenparados.com/wp-content/uploads/2019/06/ataque-a-los-titanes-3x18-5-1000x600.jpg',
      descripcion: 'Levi Ackerman'
    },
    { status: 200 }
  )
})

const filter = http.get('/filter', () => {
  return HttpResponse.json(
    [
      'Disfraz',
      'Ropa de gatita',
      'Ropa de gatito'
    ],
    { status: 200 }
  )
})

const products = http.get('/products', () => {
  return HttpResponse.json(
    [
      {
        id: 'asdasdas.asdasd.asdas',
        titulo: 'Vestido de princesa',
        precio: '200',
        descripcion: 'esta es la descripcion',
        img: 'https://ae01.alicdn.com/kf/H914957c16b5e4e7eb5e7dd149385ddecb/Ropa-bonita-para-gato-vestido-c-lido-y-agradable-a-la-piel-para-Oto-o-e.jpg',
        categoria: 'Ropa de gatita'
      },
      {
        id: 'asdasdas.asdasd.jjjjj',
        titulo: 'Traje de principe',
        precio: '190',
        descripcion: 'esta es la descripcion',
        img: 'https://m.media-amazon.com/images/I/71RcUCvadhL.jpg',
        categoria: 'Ropa de gatito'
      },
      {
        id: 'asdasdas.asdasd.aaaaa',
        titulo: 'Disfraz de abeja',
        precio: '190',
        descripcion: 'esta es la descripcion',
        img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5fac673316782c9121c351332429ae63.jpg?imageView2/2/w/500/q/60/format/webp',
        categoria: 'Disfraz'
      }
    ],
    { status: 200 }
  )
})

export default [
  newProduct,
  filter,
  products
]
