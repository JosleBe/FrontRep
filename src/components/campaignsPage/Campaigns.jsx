import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../campaignsPage/Campaign.css'
import image from '../../assets/img/voluntarios.jpg'
const Campaigns = () => {
  return (
    <div>
      <div className="container-card">
        <div style={{width:'18rem', height:'15rem'}}>
          <Card style={{ width: '18rem',height:'17rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Nombre de la campaña</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{background: '#E0E2CB' , border:'none'}}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{width:'18rem'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>Nombre de la campaña</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{background: '#E0E2CB' , border:'none'}} >Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{width:'18rem'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>Nombre de la campaña</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{background: '#E0E2CB', border:'none'}} >Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{width:'18rem'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>Nombre de la campaña</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{background: '#E0E2CB', border:'none'}}s >Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>


      </div>
    </div>

  )
}

export default Campaigns
