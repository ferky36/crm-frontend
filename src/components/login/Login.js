import React from 'react'
import { Container,Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";

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
                            className="mb-3"
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
                            className="mb-3">
                            <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            required />
                        </FloatingLabel>
                        <Button className="mb-2" type="submit">
                            Login
                        </Button>
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
