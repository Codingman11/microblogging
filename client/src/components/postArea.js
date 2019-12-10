import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';


class PostArea extends Component {


    render() {

        return (
            <div>
                <h1 id="header">Welcome to microTwitter! Please register</h1>
            
            <Form id ="form">
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={150}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={150}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>


            </Form>

            </div>
        );

    }





}

export default PostArea;