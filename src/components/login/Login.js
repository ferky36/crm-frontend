import React from 'react'
import { Container,Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Form>
                        <h1 className='text-info text-center'>Client Login</h1>
                        <hr/>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-2"
                        >
                            <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="name@example.com"
                            required />
                        </FloatingLabel>
                        <FloatingLabel 
                            controlId="floatingPassword" 
                            label="Password"
                            className="mb-2">
                            <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            required />
                        </FloatingLabel>
                        
                        <Button variant="primary" className="mb-2" type="submit">
                            Login
                        </Button>
                        <Link to="/register">
                            <Button variant="outline-primary" className="mb-2">
                                Register
                            </Button>
                        </Link>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!">Forget Password?</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
