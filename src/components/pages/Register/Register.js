import React, { useState, useEffect } from "react";
import { Form, Button, Col, InputGroup , Alert} from "react-bootstrap";
import { BrowserRouter as Router,Link } from "react-router-dom";
import "./Register.css";

// import UserContext from "../../context/UserContext";
// import ErrorNotice from "../misc/ErrorNotice";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../_actions";
import { store } from 'react-notifications-component'

const Register = (props) => {
  const [details, setDetails] = useState({ email: "", password: "" , firstName: "" , lastName: "" , city: "" , mobileNumber: "" });
  const auth = useSelector((state) => state.auth);
  const [pageError, setPageError] = useState({});
  const {errors , success} = auth;
  const dispatch = useDispatch();

  useEffect(() => {

    if (success) {
      props.history.push("/signIn");

      store.addNotification({
        title: 'Success!',
        message: 'Activate Your Account by Email .',
        type: 'success',                       
        container: 'top-left',               
        animationIn: ["animate__animated", "animate__fadeInRight"],   
        animationOut: ["animate__animated", "animate__fadeOutRight"],  
        dismiss: {
          duration: 8000
        }
      })
      
    }
    if (errors) {
      setPageError(errors);
    }

  }, [success, props.history, errors, props.location]);
  

  const handleSubmit = async (e) => {

    e.preventDefault();
    e.stopPropagation();

    dispatch(userActions.registerAction(details))

  };
  
  return (
    <> 
      <div className='registerPage'>
        <section>
          <div>
            <h2>Create an account</h2>
          </div>
          <div>
            {/* loob */}

            <Form noValidate onSubmit={handleSubmit}>
            {pageError.type === "warning" ? (<Alert variant={pageError.type}>{pageError.message}</Alert>) : ("")}

              <Form.Row>
                <Form.Group
                  as={Col}
                  md='12'
                  controlId='validationCustomEmailAddress'
                >
                  <Form.Label className='formLabel'>Email </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='email'
                      placeholder='Ex: samsmith@gmail.com'
                      aria-describedby='inputGroupPrepend'
                      required
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      Invalid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom04'>
                  <Form.Label className='formLabel'>Password</Form.Label>
                  <Form.Control
                    type='password'
                    required
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                  />
                  <Form.Label className='passwordLabel'>
                    Password must Contain between 8–36 characters, at least 1
                    upper-case letter and at least 1 number
                  </Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md='12' controlId='validationCustom01'>
                  <Form.Label className='formLabel'>First Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Ex: Sam'
                    onChange={(e) =>
                      setDetails({ ...details, firstName: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Label className='formLabel'>Last Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Ex: Smith'
                    onChange={(e) =>
                      setDetails({ ...details, lastName: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Label className='formLabel'>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ex: Quezon City'
                    required
                    onChange={(e) =>
                      setDetails({ ...details, city: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    Invalid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Ex: 09123456789'
                    required
                    onChange={(e) =>
                      setDetails({ ...details, mobileNumber: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Router>
                  <Form.Label className='termsLabel'>
                    By creating an account, you agree to our
                    <Link to='/about'> Privacy Policy</Link> and{" "}
                    <Link to='/about'> Terms of use</Link>.
                  </Form.Label>
                </Router>
              </Form.Group>
              <Button className='btn-danger customButton' type='submit'>
                CREATE ACCOUNT
              </Button>
            </Form>
            {/* loob */}

            <Router>
              <p className='hasAccount'>
                Already have an account? <Link to='.#'>Sign in</Link>
              </p>
            </Router>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
