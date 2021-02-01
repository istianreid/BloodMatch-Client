import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

import slide1 from '../../../media/testim.jpg'
import ArrowLeft from '../../../media/icons/ArrowLeft.svg'
import ArrowRight from '../../../media/icons/ArrowRight.svg'

import './TestimonialsSection.css'

function Testimonials() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="test-col">

                        <h6 className="mb-3">Testimonials</h6>
                        <h2>Our Happy Clients</h2>
            
                        <Carousel className="test-main d-flex flex-row">
                            
                            <Carousel.Item className="test-item d-flex flex-row mt-5">
                                <div aria-hidden="true" className="test-arrows carousel-control-prev-icon">
                                    <img
                                        src={ArrowLeft}
                                        alt="previous"
                                    />
                                </div>
                                <div className="d-flex flex-row">

                                <img
                                    className="d-block w-260px"
                                    src={slide1}
                                    alt="First slide"
                                />
                                <div className="client-details">
                                    <p className="client-statement">If I could keep donating regularly to save 
                                        other lives, I would, because there needs 
                                        to be a contribution in life. I encourage 
                                        young people, like me, to give away something 
                                        that is very useful (for life) through loving 
                                        gestures to contribute for a better world.</p>
                                    <h6 className="client-name">Vihn Ramos</h6>
                                    <p className="client-class">DONOR</p>
                                </div>

                                </div>
                                
                                <div aria-hidden="true" className="test-arrows carousel-control-next-icon">
                                <img
                                    src={ArrowRight}
                                    alt="next"
                                />
                            </div>
                            </Carousel.Item> 
                            
                        </Carousel>
        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Testimonials
