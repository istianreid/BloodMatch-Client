import React from 'react'
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import FeaStories1 from '../../../media/feaStories1.jpg'
import FeaStories2 from '../../../media/feaStories2.jpg'
import FeaStories3 from '../../../media/feaStories3.jpg'
import FeaStories4 from '../../../media/feaStories4.jpg'

import "./FeatureSection.css";

function FeatureSection() {
    return (
        <>
        <Container className="mt-5 mb-5 pt-5 pb-5">
            <Row>
                <Col className="d-flex flex-row justify-content-between">
                <h6>Featured Stories</h6>
                <a className="all-stories" href="/">VIEW ALL STORIES</a>
                </Col>
            </Row>
            <Row>
                <Col>

                <Card className="feature-one d-flex flex-col align-content-center mt-3">
                        <Card.Img className="feature-one-image" src={FeaStories1} />
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between mb-3">
                                <small className="feature-date">Aug 24, 2019</small>
                                <small className="feature-city">Quezon City</small>
                            </div>
                            <Card.Title className="feature-title mb-1">Safe a Life Initiative</Card.Title>
                            <Card.Text className="feature-content">
                            From first seed divide had make. Deep abundantly tree tree 
                            don't don't won't face spirit stars them. Years god spirit 
                            tree their beast created fruit living said green abundantly 
                            <span><a href="/">Read more...</a></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>

                <CardDeck className="d-flex flex-column mt-3">
                    <Card className="story-card d-flex flex-row mb-4">
                        <Card.Img className="feature-image" src={FeaStories2} />
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between mb-3">
                                <small className="feature-date">Aug 24, 2019</small>
                                <small className="feature-city">Quezon City</small>
                            </div>
                            <Card.Title className="feature-title mb-1">Voluntary Blood Donation</Card.Title>
                            <Card.Text className="feature-content">
                            From first seed divide had make. Deep abundantly tree  
                            won't face spirit stars them.   
                            <span><a href="/">Read more...</a></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="story-card d-flex flex-row mb-4">
                        <Card.Img className="feature-image" src={FeaStories3} />
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between mb-3">
                                <small className="feature-date">Aug 24, 2019</small>
                                <small className="feature-city">Quezon City</small>
                            </div>
                            <Card.Title className="feature-title mb-1">Save me from Leukemia</Card.Title>
                            <Card.Text className="feature-content">
                            From first seed divide had make. Deep abundantly tree  
                            won't face spirit stars them.   
                            <span><a href="/">Read more...</a></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="story-card d-flex flex-row mb-4">
                        <Card.Img className="feature-image" src={FeaStories4} />
                        <Card.Body>
                            <div className="d-flex flex-row justify-content-between mb-3">
                                <small className="feature-date">Aug 24, 2019</small>
                                <small className="feature-city">Quezon City</small>
                            </div>
                            <Card.Title className="feature-title mb-1">Help me on my operation</Card.Title>
                            <Card.Text className="feature-content">
                            From first seed divide had make. Deep abundantly tree  
                            won't face spirit stars them.   
                            <span><a href="/">Read more...</a></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>

                </Col>
            </Row>
        </Container>


            
        </>
    )
}

export default FeatureSection
