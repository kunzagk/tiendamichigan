import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container fluid className='notFound'>
      <h2 className='m-5'>La página que solícito no existe</h2>
      <img src='./public/gatito2.png' alt='NotFound' />
    </Container>
  )
}

export default NotFound
