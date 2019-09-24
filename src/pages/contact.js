import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import {Form, Button} from "react-bootstrap"
export default () => (
<PrimaryLayout column="col-10">
    <div className="pt-5">
    <h1>Contact Us</h1>
        <Form >
        <Form.Group controlId="contactform.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email..." />
        </Form.Group>
        <Form.Group controlId="contactform.Subject">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactform.Message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactform.Submit">
            <Button>Submit</Button>
        </Form.Group>
        </Form>     
    </div>
</PrimaryLayout>


);
