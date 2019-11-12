import React, { Component } from 'react';
import imgTeam from './img_team.jpeg';
import logoAds from './logo_ads.png'
import './App.css';
import { Button, Container, Col, Row } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  goToSocmed(typeSocmed) {
    if (typeSocmed === 'wa') {
      window.location.href = "https://chat.whatsapp.com/B9fSwR3Bzpq3UHM9tx3gF8"

    } else {
      window.location.href = "https://www.instagram.com/androdev.serang"
    }
  }

  render() {
    const { windowWidth } = this.state;

    return (
      <Row
        style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: 'space-around' }}
      >
        <Col>
          <Container className="App-header" fluid={true}>
            <img src={logoAds} style={{ height: 300, width: 200 }}></img>
            <h1 className="Text-Color-Primary">Android Developer Serang</h1>
            <h2 className="Tagline">#SerangDenganKode</h2>
            <h4 className="Text-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend iaculis tellus, sit amet fringilla erat molestie sed. </h4>
            <Container style={{ marginTop: 10 }} >
              <Row
                style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: 'center' }}
              >
                <Button style={{ marginRight: 50 }} variant="success" onClick={() => this.goToSocmed('ig')}>Instagram</Button>

                <Button style={{ marginLeft: 50 }} variant="success" onClick={() => this.goToSocmed('wa')}>Whatsapp</Button>
              </Row>
            </Container>
          </Container>
        </Col>

        <Col>
          <Container className="App-header" fluid={true}>
            <img className="Image-Illustration" src={imgTeam} alt="imgTeam" />
          </Container>
        </Col>
      </Row >

    )
  }
}


export default App;
