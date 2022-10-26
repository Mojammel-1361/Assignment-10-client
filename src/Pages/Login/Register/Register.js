import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updatUserProfile    } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handelSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
       

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            form.reset();
            handelUpdateProfile(name, photoURL);
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
    }

    const handelUpdateProfile = (name, photoURL) =>{
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        updatUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    }
    return (
      <div>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control name="name" type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="photo URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <span className="text-danger">{error}</span>
          </Form.Group>
          <p>
            <Link to="/login">Already Have account</Link>{" "}
          </p>
          <Button variant="primary" type="submit">
            Reguster
          </Button>
        </Form>
      </div>
    );
};

export default Register;