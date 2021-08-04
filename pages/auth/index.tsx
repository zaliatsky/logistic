import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Auth = () => {
  return (
    <Container className={'auth'}>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faCoffee} />
          this is auth page
        </Col>
      </Row>
    </Container>
  )
}

export default Auth
