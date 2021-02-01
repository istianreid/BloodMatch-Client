import React from 'react'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

import QuestionMark from '../../../media/icons/QuestionMark.svg'
import Arrow from '../../../media/icons/ArrowUpWhite.svg'

import "./FAQsSection.css";

function FAQsSection() {
    return (
        <>
        <Container className="faq-section">
            <Row>
                <Col className="mr-3">
                    <Accordion defaultActiveKey="3">
                        <Card className="toggle-info">
                            <Accordion.Toggle className="toggle-header" as={Card.Header} eventKey="0">
                                <div className="title-container"> 
                                <Card.Img className="toggle-icon" src={QuestionMark} />
                                <Card.Text className="toggle-title">Level 1 Normal</Card.Text>
                                </div>
                                <Card.Img className="toggle-arrow" src={Arrow} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="toggle-body">Content pellentesque non fusce pulvinar eu 
                                    sodales dignissim augue ut. Vitae, parturient placerat 
                                    consectetur eleifend massa faucibus. Lobortis morbi 
                                    donec nec, cursus mattis cursus cursus scelerisque eu. 
                                    Netus massa, habitasse nulla congue eget id ac leo. 
                                    Placerat sed faucibus iaculis in lectus molestie rutrum 
                                    vestibulum. Nunc sit suspendisse pellentesque volutpat 
                                    ultrices pulvinar leo. Tristique elit risus, tincidunt 
                                    adipiscing orci urna. </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="toggle-info">
                            <Accordion.Toggle className="toggle-header" as={Card.Header} eventKey="1">
                                <div className="title-container"> 
                                <Card.Img className="toggle-icon" src={QuestionMark} />
                                <Card.Text className="toggle-title">Level 1 Normal</Card.Text>
                                </div>
                                <Card.Img className="toggle-arrow" src={Arrow} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="toggle-body">Content pellentesque non fusce pulvinar eu 
                                    sodales dignissim augue ut. Vitae, parturient placerat 
                                    consectetur eleifend massa faucibus. Lobortis morbi 
                                    donec nec, cursus mattis cursus cursus scelerisque eu. 
                                    Netus massa, habitasse nulla congue eget id ac leo. 
                                    Placerat sed faucibus iaculis in lectus molestie rutrum 
                                    vestibulum. Nunc sit suspendisse pellentesque volutpat 
                                    ultrices pulvinar leo. Tristique elit risus, tincidunt 
                                    adipiscing orci urna. </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card className="toggle-info">
                            <Accordion.Toggle className="toggle-header" as={Card.Header} eventKey="2">
                                <div className="title-container"> 
                                <Card.Img className="toggle-icon" src={QuestionMark} />
                                <Card.Text className="toggle-title">Level 1 Normal</Card.Text>
                                </div>
                                <Card.Img className="toggle-arrow" src={Arrow} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="toggle-body">Content pellentesque non fusce pulvinar eu 
                                    sodales dignissim augue ut. Vitae, parturient placerat 
                                    consectetur eleifend massa faucibus. Lobortis morbi 
                                    donec nec, cursus mattis cursus cursus scelerisque eu. 
                                    Netus massa, habitasse nulla congue eget id ac leo. 
                                    Placerat sed faucibus iaculis in lectus molestie rutrum 
                                    vestibulum. Nunc sit suspendisse pellentesque volutpat 
                                    ultrices pulvinar leo. Tristique elit risus, tincidunt 
                                    adipiscing orci urna. </Card.Body>
                            </Accordion.Collapse>
                        </Card> 
                    </Accordion>    
                </Col>

                <Col className="ml-3">

                <div className="info-container">
                    <h6>Frequently Asked Questions</h6>
                    <h2>Anything you need to know about Blood Match.</h2>
                    <p className="faq-desc">From first seed divide had make. Deep abundantly tree tree 
                        don't don't won't face spirit stars them. Years god spirit 
                        tree their beast created fruit living said green can't is 
                        firmament them fifth gathered.
                    </p>
                    <p className="faq-question">Still have questions?</p>
                    <a className="button-red" href="/email">Send us an email</a>
                </div>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FAQsSection
