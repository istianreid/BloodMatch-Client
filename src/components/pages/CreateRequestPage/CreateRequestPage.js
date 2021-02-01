import React, { useState,useEffect} from "react";
import { useDropzone } from "react-dropzone";
import { Form, Col, InputGroup } from "react-bootstrap";

import "./CreateRequestPage.css";

import { useDispatch, useSelector } from "react-redux";
import { requestPostActions } from "../../../_actions";
import {requestPostConstants} from '../../../_constants'
import {instance} from '../../../_helpers/axios'
import axios from "axios"

const CreateRequestPage = (props) => {
  
  //data
  const [title , setTitle] = useState("")
  const [story , setStory] = useState("")
  const [bloodType , setBloodType] = useState("")
  const [amount , setAmount] = useState("")
  const [location , setLocation] = useState("")
  const [phoneNumber , setPhoneNumber] = useState("")
  const [closingDate , setClosingDate] = useState("")
  const [hospital , setHospital] = useState("")
  const [photo, setPhoto] = useState('')

  //validation
  const [validated, setValidated] = useState(false);
  const [pageError, setPageError] = useState({});

  //upload
  const [uploading, setUploading] = useState(false)

  //files
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();


  //state
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  //initial state
  const {errors , success} = post;

  useEffect(() => {

    if(success) {
      props.history.push("/")
    }

    if (errors) {
      setPageError(errors);
    }
    
  }, [success, props.history, errors, props.location]);

  
  //upload handler
  const uploadFileHandler = async(e) => {

    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)

    console.log(formData)

    setUploading(true)
    
        try{
          const config = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }
          const {data} = await instance.post('requestPost/uploadPost', formData, config)
          setPhoto(data)

          setUploading(false)

      } catch(error){

         console.error(error)
         setUploading(false)
      }
  }


  // files data
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  //all data
  const details = {title , story , bloodType , amount , location , phoneNumber , closingDate , hospital , photo}

  // submit
  const handleSubmit = (event) => {
    const form = event.currentTarget;

      event.preventDefault();
      event.stopPropagation();

    dispatch(requestPostActions.addRequestPostAction(details))
  };


  return (
    <>
      <div className='CreateRequest'>
        <section>
          <div>
            <h2>Request Blood</h2>
            <p className='titlePara'>
              Share us your story and the world know why you need blood. dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est.
            </p>
          </div>

          <div>
            {/* loob */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md='12' controlId='validationTitle'>
                  <Form.Label className='formLabel'>Title</Form.Label>
                  <Form.Control type='text' required onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationYourStory'>
                  <Form.Label className='formLabel'>Your Story</Form.Label>
                  <Form.Control required as='textarea' rows={3}
                  onChange={(e) => setStory(e.target.value)}/>
                  <Form.Label className='.textLabel'>
                    Maximum of 1000 words
                  </Form.Label>
                </Form.Group>

                <Form.Group as={Col} md='12'>
                  <Form.Label className='formLabel'>
                    Upload Your Photo
                  </Form.Label>
                  <section className='dragNdrop'>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()}
                      onChange = {uploadFileHandler} />
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
                  <Form.Label className='textLabels'>
                    Recommended size: 600x600 pixles ( jpg or png format )
                  </Form.Label>
                  <aside>
                    <p>{files}</p>
                  </aside>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationBloodType'>
                  <Form.Label className='formLabel'>Blood Type</Form.Label>
                  <Form.Control required as='select' onChange={(e) => setBloodType(e.target.value)}>
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
                <Form.Group
                  as={Col}
                  md='6'
                  controlId='validationAmountBloodNeeded'
                >
                  <Form.Label className='formLabel'>
                    Amount of Blood Needed (Bag)
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder='Ex: 1 (Bag)'
                    type='number'
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom05'>
                  <Form.Label className='formLabel'>Mobile Number</Form.Label>
                  <Form.Control type='number' required onChange={(e) => setPhoneNumber(e.target.value)}/>
                  <Form.Control.Feedback type='invalid'>
                    Please provide 11 digit mobile number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationClosingDate'>
                  <Form.Label className='formLabel'>
                    Request Closing Date
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='date'
                      aria-describedby='inputGroupPrepend'
                      required
                      onChange={(e) => setClosingDate(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationHospital'>
                  <Form.Label className='formLabel'>Hospital</Form.Label>
                  <Form.Control required type='text' onChange={(e) => setHospital(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} md='12' controlId='validationLocation'>
                  <Form.Label className='formLabel'>Location</Form.Label>
                  <Form.Control required type='text' onChange={(e) => setLocation(e.target.value)}/>
                </Form.Group>
              </Form.Row>
              <div className='d-flex buttonGrp'>
                <button className='cancelButton' type='submit'>
                  CANCEL
                </button>
                <button className='saveButton' type='submit'>
                  REQUEST BLOOD
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

export default CreateRequestPage;
