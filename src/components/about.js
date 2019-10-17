import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
// import Button from 'react-bootstrap/Button';




class about extends Component {
  render() {
    return (
      <div>
        {/* <Carousel>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://www.bk.mufg.jp/global/newsroom/featuredarticle/imgs/2018_01_main.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bk.mufg.jp/global/newsroom/featuredarticle/imgs/2018_01_main.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.honeywell.com/content/dam/honeywell/en-us/images/connected-building/C8B-content-carousel/ConnectedBuildingThoughtLeadership1424x950.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://seeklogo.net/wp-content/uploads/2016/01/mufg-logo-vector-download.jpg"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Our All-in-one Banking Application</h2>
            <hr style={{ borderTop: '3px solid #da2026', width: '50%' }} />
            <p>Multiple Banking functions, One Mufg App</p>
            <hr style={{ borderTop: '3px solid #da2026', width: '50%' }} />

            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #da2026', width: '50%' }} />
          </Cell>
          <Cell className="about-right-col" col={8}>
            <h2>About</h2>
            <h5>Mitsubishi UFJ Financial Group, Inc. is a Japanese bank holding and financial services company headquartered in Chiyoda, Tokyo, Japan. MUFG holds assets of around US$2,459 billion as of 2016, making it the world's fifth largest bank by total assets and is one of the main companies of the Mitsubishi Group.</h5>


            <hr style={{ borderTop: '3px solid #fefbfc' }} />

            <h2>Tour Dates</h2>
            <h5>I can link a google calendar here with your events, whatever you want we can get creative</h5>






          </Cell>
        </Grid>
      </div>
    )
  }
  
}


export default about;


