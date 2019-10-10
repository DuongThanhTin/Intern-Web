import React, {Component} from 'react';
import './PageBanner.css'
import {Button, CardDeck, Card, } from 'react-bootstrap';

class PageBanner extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  componentDidMount(){
  }
  render(){
      return(
        <div className="container-header">
          <div className = "PageBanner">   
            <div>        
                <div className="banner-image">
                    <div className="banner-text">OUT FIT OF THE WEEK</div>
                        <Button className="banner-button-1">
                            <div className="banner-button-text-1"> Shop Now</div>
                        </Button>
                </div>

                <div>
                    <CardDeck className="banner-card ">
                        <Card className="banner-card-element">
                            <Card.Img variant="top" src="images/example.jpg" />
                            <Card.ImgOverlay className="banner-ImgOverlay">
                                <div className="banner-card-edit-text">
                                <Card.Text className="banner-card-text">Men</Card.Text>
                                <div className="banner-card-border"></div>
                                </div>
                                <div className="banner-card-button-edit">
                                    <Button  className="banner-card-button">
                                        <div className="banner-card-button-text"> Shop Now</div>
                                    </Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="banner-card-element">
                            <Card.Img variant="top" src="images/example.jpg" />
                            <Card.ImgOverlay className="banner-ImgOverlay">
                                <div className="banner-card-edit-text">
                                <Card.Text className="banner-card-text">Men</Card.Text>
                                <div className="banner-card-border"></div>
                                </div>
                                <div className="banner-card-button-edit">
                                    <Button className="banner-card-button">
                                        <div className="banner-card-button-text"> Shop Now</div>
                                    </Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="banner-card-element">
                            <Card.Img variant="top" src="images/example.jpg" />
                            <Card.ImgOverlay className="banner-ImgOverlay">
                                <div className="banner-card-edit-text">
                                <Card.Text className="banner-card-text">Men</Card.Text>
                                <div className="banner-card-border"></div>
                                </div>
                                <div className="banner-card-button-edit">
                                    <Button className="banner-card-button">
                                        <div className="banner-card-button-text"> Shop Now</div>
                                    </Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="banner-card-element">
                            <Card.Img variant="top" src="images/example.jpg" />
                            <Card.ImgOverlay className="banner-ImgOverlay">
                                <div className="banner-card-edit-text">
                                <Card.Text className="banner-card-text">Men</Card.Text>
                                <div className="banner-card-border"></div>
                                </div>
                                <div className="banner-card-button-edit">
                                    <Button className="banner-card-button">
                                        <div className="banner-card-button-text"> Shop Now</div>
                                    </Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </CardDeck>
                </div>
                </div>
          </div>
        </div> 
      );
  }
};




export default PageBanner;
