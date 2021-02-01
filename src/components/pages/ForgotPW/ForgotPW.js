import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./ForgotPW.css";

function ForgotPW() {

    return (
        <>
        <Container className="ForgotPWPage">
            <Row>
                <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                    <div className="ForgotPWBox">
                        <h1>Forgot Password</h1>

                        <Form className="mt-4">
                            <Form.Group>
                                <Form.Label className="formLabel">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Label className="formLabel">New password will be sent to your email address.</Form.Label>

                            <Button className="mt-4 customButton" type="submit">
                                RESET PASSWORD
                            </Button>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ForgotPW;
