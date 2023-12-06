import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'
import MichiContext from '../context/MichiContex.jsx'

const Product = () => {
  const { id } = useParams()
  const { productos, addCart } = useContext(MichiContext)
  const [producto, setProducto] = useState()

  const filterProducto = () => {
    const [findProducto] = productos.filter((producto) => producto.id === id)
    setProducto(findProducto)
  }

  useEffect(() => {
    filterProducto()
  }, [id])

  if (!producto) return <div>Producto no disponible</div>

  return (
    <Container fluid className='producto'>
      <Card className='galeria_one_card'>
        <Card.Img variant='top' src={producto?.img} />
        <Card.Body>
          <Card.Title>{producto?.titulo}</Card.Title>
          <Card.Text className='text-success'>
            Precio: $ {producto?.precio}
          </Card.Text>
          <p className='text-dark'>{producto.descripcion}</p>
          <Button
            variant='outline-danger'
            onClick={() => addCart(producto)}
          >
            Añadir 🛒
          </Button>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default Product
