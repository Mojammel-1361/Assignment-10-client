import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error,  setError] = useState('');
    const { user, signIn, googleLogin, gitLogin } = useContext(AuthContext);

    const gitProvider = new GithubAuthProvider();
    const handelGitleLogin = () => {
      gitLogin(gitProvider)
        .then((result) => {
          console.log(user);
        })
        .catch((error) => console.error(error));
    };
    
    const googleProvider = new GoogleAuthProvider();
     const handelGoogleLogin = () => {
       googleLogin(googleProvider)
         .then((result) => {
           console.log(user);
         })
         .catch((error) => console.error(error));
     };
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate(from, {replace: true});
          })
        .catch(error => {
            console.error(error)
            setError(error.message);
        });
    }
    return (
      <div>
        <Form onSubmit={handelSubmit}>
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
            No-Account <Link to="/register">Register Now</Link>{" "}
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button
            onClick={handelGoogleLogin}
            variant="outline-warning"
            type="submit"
          >
            Google
          </Button>{" "}
          <Button
            onClick={handelGitleLogin}
            variant="outline-success"
            type="submit"
          >
            GitHub
          </Button>{" "}
        </Form>
      </div>
    );
};

export default Login;