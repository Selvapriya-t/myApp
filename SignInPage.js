import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SignInPage.css';
//import { AiFillEyeInvisible } from 'react-icons/ai';
import bgimg from '../Authentication/assets/bglogin.jpeg';
import Logo from '../Navigation/Images/hospital.png';
//import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { AuthContext } from './../../../Context/authContext';

//import { AppAxios } from './../../../Helpers/axios';
import axios from 'axios';

const SignInPage = (props) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const authContext = useContext(AuthContext);

  let history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //clear any error
    if (!!errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
  };
  const login = () => {
    axios.post('http://localhost:8080/auth/login',formData)
    // axios({
    //   method: 'post',
    //   url: '/auth/login',
    //   data: formData,
    //   'content-type': 'application/json',
    // })
      .then((response) => {
        if (response.status === 201) {
          //save the jwt token
          if (response && response.data && response.data.authToken) {
            // console.log(response.data.authToken);
          }
          authContext.login();
          history.push('/home');
        }
      })
      .catch((error) => {
        // console.log(error);
        history.push('/');
      });
  };

  const findFormErrors = () => {
    const { email, password } = formData;
    const newErrors = {};
    // name errors
    const expression = /\S+@\S+/;
    var inValidEmail =
      !email || email === '' || !expression.test(String(email).toLowerCase());
    if (inValidEmail) {
      newErrors.email = 'Please add valid email';
    }

    // password errors
    if (!password || password === '') {
      newErrors.password = 'Please add valid password';
    }

    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    login();
  };

  return (
    <div>
      <Form className="form-align" onSubmit={onSubmit} noValidate>
        <div
          className="bg-images"
          style={{
            backgroundImage: 'url(' + bgimg + ')',
          }}
        >
          <div className="login-logo">
            <span className="app-logo">HELLO PHYSIO</span>
            <img className="logo-name" src={Logo} alt="logo" />
          </div>
          <div className="loginpage-box">
            <div className="login-title">Login Page</div>
            <Form.Group>
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                placeholder="email@example.com"
                aria-label="email@example.com"
                name="email"
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Please add correct email id
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ marginBottom: 'auto' }}>Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                isInvalid={!!errors.password}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <button className="login-sub" type="submit">
              Login
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default SignInPage;