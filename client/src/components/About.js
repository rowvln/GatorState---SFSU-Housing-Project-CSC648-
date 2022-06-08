import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Names = styled.h4`
    text-align:center;

`
class About extends Component{    
    render(){
        return(
            <Jumbotron > 
                <h1 style={{textAlign:"center"}}> About </h1>
                <p> </p>
                <h3 style={{textAlign:"center"}}> Meet The Team </h3>
                <Container style={{flexDirection: 'row'}}>
                <Container style={{flexDirection: 'column'}}>
                <Row style={{marginBottom: "10px"}}>
                    <Col >
                    <Card >
                        <Card.Header><Names>Team Lead</Names></Card.Header>
                        <Card.Img src="https://i.imgur.com/QSF2mEv.jpg"  />
                        <Names>Rowvin Dizon</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href= "mailto:rowvindizon@gmail.com">Email</Nav.Link>
                                <Nav.Link href= "https://github.com/r0wvin">Github</Nav.Link>
                                <Nav.Link href= "https://linkedin.com/in/rowvin">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col>
                    <Card >
                        <Card.Header><Names>Front End Lead</Names></Card.Header>
                        <Card.Img src="https://user-images.githubusercontent.com/25631925/57999956-1d792700-7a8c-11e9-840b-a6d6dbba9d2c.jpg"  />
                        <Names>Jonathan Gurdal</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href= "mailto:jgurdal@gmail.com">Email</Nav.Link>
                                <Nav.Link href= "https://github.com/jgurdal">Github</Nav.Link>
                                <Nav.Link href= "https://linkedin.com/in/jonathangurdal">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col>
                    <Card >
                        <Card.Header><Names>Back End Lead</Names></Card.Header> 
                        <Card.Img src="https://i.imgur.com/KPSQ3N8.jpg"  />
                        <Names>Marlon Johnson</Names>
                        <Card.Footer>
                            <Nav className="justify-content-center">
                                <Nav.Link href = "mailto:johnsonmarlon18@gmail.com">Email</Nav.Link>
                                <Nav.Link href = "https://github.com/Mvrs " >Github</Nav.Link>
                                <Nav.Link  href= "https://www.linkedin.com/in/marvj/">LinkedIn</Nav.Link>
                            </Nav>
                        </Card.Footer>
                    </Card>
                    </Col>
                        <Col>
                            <Card >
                                <Card.Header><Names>Github Master</Names></Card.Header> 
                                <Card.Img variant="top" src="https://i.imgur.com/TMd916g.jpg"  />
                                <Names>Kayla Musleh</Names>
                                <Card.Footer>
                                    <Nav className="justify-content-center">
                                        <Nav.Link href= "mailto:kayla.musleh@gmail.com">Email</Nav.Link>
                                        <Nav.Link href= "https://github.com/123kay12">Github</Nav.Link>
                                        <Nav.Link href= "https://www.linkedin.com/in/kayla-m-91a39999/">LinkedIn</Nav.Link>
                                    </Nav>
                                </Card.Footer>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                        <Container style={{flexDirection: 'column', width: '80%'}}> 
                     <Row style={{marginBottom: "10px"}}>

                    <Col>
                        <Card >
                            <Card.Header><Names>Full Stack</Names></Card.Header> 
                            <Card.Img variant="top" src="https://i.imgur.com/fGvtZsn.jpg"  />
                            <Names>Minho Cha</Names>
                            <Card.Footer>
                                <Nav className="justify-content-center">
                                        <Nav.Link href= "mailto:minhocha1004@gmail.com">Email</Nav.Link>
                                        <Nav.Link href= "https://github.com/minhoCHA">Github</Nav.Link>
                                        <Nav.Link href= "https://linkedin.com/in/minho-cha-17333a113">LinkedIn</Nav.Link>
                                    </Nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header><Names>Front End</Names></Card.Header> 
                            <Card.Img variant="top" src="http://www.simpleimageresizer.com/_uploads/photos/0c4f8132/53280177-2300e400-36cc-11e9-93c1-410b03231ccb_400x400.jpg"  />
                            <Names>Daisy Sun</Names>
                            <Card.Footer >
                                <Nav className="justify-content-center" >
                                    <Nav.Link href= "mailto:itsdaisysun@gmail.com">Email</Nav.Link>
                                    <Nav.Link href= "https://github.com/itsdsun">Github</Nav.Link>
                                    <Nav.Link href = "https://www.linkedin.com/in/daisy-sun-06388817b" >LinkedIn</Nav.Link>
                                </Nav >
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Header><Names>Full Stack</Names></Card.Header> 
                            <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/7273788?s=460&v=4"  />
                            <Names>Rene Elias</Names>
                            <Card.Footer>
                                <Nav className="justify-content-sm-around">
                                    <Nav.Link href= "mailto:reneelias03@gmail.com">Email</Nav.Link>
                                    <Nav.Link href= "https://github.com/reneelias">Github</Nav.Link>
                                    <Nav.Link href= "https://www.linkedin.com/in/rene-elias-3136ab3a/">LinkedIn</Nav.Link>
                                </Nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                    </Row>

                </Container>
                </Container>
            </Jumbotron>
        )
    }
}

export default About