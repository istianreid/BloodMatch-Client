import React, { useState , useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Col, InputGroup , Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {profileActions , userActions , requestPostActions} from'../../../_actions'
import jwt_decode from "jwt-decode";
import {profileConstants} from '../../../_constants'
import { useDispatch, useSelector} from "react-redux";
import {instance} from '../../../_helpers/axios'


import "./EditProfilePage.css";

const EditProfilePage = (props) => {

  //Global State
  const profileData = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  
  const {user,isValid} = auth;
  const {valid} = profileData;

  //user data
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [city, setCity] = useState(user.city);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  // // profile data
  const [bloodType, setBloodType] = useState();
  const [userAbout, setUserAbout] = useState();

  // validation
  const [validated, setValidated] = useState(false);

  //file
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const file = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(userActions.findOneUserAction())
    dispatch(profileActions.GetprofileAction())

    if (valid || isValid === true) {
      props.history.push("/")
    }

  }, [valid, isValid ,  props.history, props.location])


  const uploadFileHandler = async(e) => {

    const token = localStorage.jwtToken;
    const decoded = jwt_decode(token)
    const profileId = decoded.profileId

    console.log(profileId)

    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    
    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const result = instance.post('/profile/upload/'+profileId, formData, config).then((res) => {

          console.log(res)
          if (res.status === 200) {
            dispatch({
              type: profileConstants.PROFILE_UPLOAD_SUCCESS,
            });
          } 
        })
        .catch((err) => {
          if (err.response.status === 400) {
            dispatch({
              type: profileConstants.PROFILE_UPLOAD_FAIL,
            });
          } 
        });

        console.log(result)
    } catch(error){
       console.error(error)
    }
  }



  //combination of data
  const userDetails = {email , firstName , lastName , city , mobileNumber }
  const profileDetails = {bloodType , userAbout }

  console.log(userDetails)
  console.log(profileDetails)


  const handleSubmit = (event) => {

    const form = event.currentTarget;

      event.preventDefault();
      event.stopPropagation();
    

    dispatch(profileActions.updateProfileAction(profileDetails))
    dispatch(userActions.updateUserAction(userDetails))


  };


  return (
    <>
      <div className='EditProfilePage'>
        <section>
          <div>
            <h2>Edit Profile</h2>
          </div>

          <div>
            {/* loob */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md='12'>
                  <Form.Label className='formLabel'>Profile Photo</Form.Label>
                  <section className='dragNdrop'>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()}
                      onChange = {uploadFileHandler}
                       />
                      <div>
                        <svg
                          width='14'
                          height='16'
                          viewBox='0 0 14 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.26519 12.2353H9.91225V6.58824H13.677L7.08872 0L0.500488 6.58824H4.26519V12.2353ZM0.500488 14.1176H13.677V16H0.500488V14.1176Z'
                            fill='#8C94A4'
                          />
                        </svg>

                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </div>
                  </section>
                  <Form.Label className='passwordLabel'>
                    Recommended size: 300x300 pixles ( jpg or png format )
                  </Form.Label>
                  <aside>
                    <p>{file}</p>
                  </aside>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label className='formLabel'>First Name</Form.Label>
                  <Form.Control required value={firstName} type='text' onChange={(e) => setFirstName(e.target.value)}
                       />
                </Form.Group>
                <Form.Group as={Col} md='6' controlId='validationCustom02'>
                  <Form.Label className='formLabel'>Last Name</Form.Label>
                  <Form.Control required type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationAboutMe'>
                  <Form.Label className='formLabel'>About Me</Form.Label>
                  <Form.Control required as='textarea' value={userAbout} rows={3} onChange={(e) => setUserAbout(e.target.value)} />
                  <Form.Label className='passwordLabel'>
                    Maximum of 100 characters
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationBloodType'>
                  <Form.Label className='formLabel'>Blood Type</Form.Label>
                  <Form.Control required as='select' value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>B+</option>
                    <option>B-</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Label className='formLabel'>City</Form.Label>
                  <Form.Control type='text' value={city} required onChange={(e) => setCity(e.target.value)} />
                  <Form.Control.Feedback type='invalid'>
                    Invalid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md='6'
                  controlId='validationCustomEmailAddress'
                >
                  <Form.Label className='formLabel'>Email </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='email'
                      value={email}
                      aria-describedby='inputGroupPrepend'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      Invalid email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control type='number' required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <div className='d-flex buttonGrp'>
              <Link to = {`/profilePage/${user.profileId}`}>
                  <Button className='cancelButton' >CANCEL</Button>
                </Link>
                {/* <button className='cancelButton' type='submit'>
                  CANCEL
                </button> */}
                <button className='saveButton' type='submit'>
                  SAVE
                </button>

              </div>
            </Form>
            {/* loob */}
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProfilePage;
