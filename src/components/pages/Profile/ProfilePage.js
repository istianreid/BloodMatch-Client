import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import axios from "axios";
import {imgProfile} from "../../../_helpers/axios.js"
import {
  Modal,
  Button,
  Form,
  Col,
  Nav,
  Table,
  Pagination,
} from "react-bootstrap";

import {profileActions , userActions} from '../../../_actions'
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

const ProfilePage = () => {

  //state
  const profileData = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);
  const {user} = auth;
  const {profile} = profileData;
  const dispatch = useDispatch();

  let pages = [];
  let items = [];
  let active = 1;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const [showTable, setShowTable] = useState(true);

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  // fetching axios

  useEffect(() => {


    dispatch(profileActions.GetprofileAction())
    dispatch(userActions.findOneUserAction())

    const fetchData = async () => {

      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(res.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  //get current data (pagination)
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTable = userData.slice(indexOfFirstData, indexOfLastData);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const status = "complete";
  let result;
  if (status !== "complete") {
    result = (
      <div className='pending'>
        <span> Pending </span>
      </div>
    );
  } else {
    result = (
      <div className='complete'>
        <span> Complete </span>
      </div>
    );
  }

  currentTable.forEach((user) => {
    items.push(
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
        <td>{result}</td>
      </tr>
    );
  });

  for (
    let number = 1;
    number <= Math.ceil(userData.length / dataPerPage);
    number++
  ) {
    pages.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  console.log(userData.length / dataPerPage);

  const paginationBasic = (
    <div>
      <Pagination>
        <Pagination.Prev />
        {pages}
        <Pagination.Next />
      </Pagination>
    </div>
  );

  const selectedKey = (event) => {
    event === "table1" ? setShowTable(true) : setShowTable(false);
  };

  const tableData = showTable ? (
    <>
      <Table striped bordered hover id='firstTable'>
        <thead>
          <tr>
            <th> tb1 Reference Number</th>
            <th> tb1 Pledge Blood</th>
            <th> tb1 Donated Blood</th>
            <th> tb1 Hospital</th>
            <th> tb1 Date</th>
            <th> tb1 Status</th>
          </tr>
        </thead>
        <tbody> {items} </tbody>
      </Table>
      <div>{paginationBasic}</div>
    </>
  ) : (
    <>
      <Table striped bordered hover id='secondTable'>
        <thead>
          <tr>
            <th> tb2 Reference Number</th>
            <th> tb2 Pledge Blood</th>
            <th> tb2 Donated Blood</th>
            <th> tb2 Hospital</th>
            <th> tb2 Date</th>
            <th> tb2 Status</th>
          </tr>
        </thead>
        <tbody> {items} </tbody>
      </Table>
      <div>{paginationBasic}</div>
    </>
  );

  return (
    <>
      <div className='ProfilePage'>
        <section>
          <div>
            <div className='profileInfo d-flex'>
              <div className='topLabel d-flex'>
                <h5>Profile</h5>
              </div>
              <div className='profileInfoBody d-flex'>
                <img
                  className='profilePic'
                  src = {imgProfile+profile.photo}
                  alt='profilepic'
                />
                <h3>{user.firstName} {user.lastName}</h3>

                <h4></h4>
                <p>
                {profile.userAbout}
                </p>
              </div>
              <Link to = {`/EditprofilePage/${profile._id}`}>
                <Button className='editButton' >EDIT PROFILE</Button>
            </Link>
            </div>
          </div>

          <div className='profileDetails'>
            <div className=' d-flex'>
              <div className=' bloodDonation d-flex '>
                <div className='topLabel  d-flex'>
                  <h5>Total of Blood Donation</h5>
                </div>
                <div>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M29.4624 41.7813C26.4565 40.7791 23.7702 38.9977 21.6773 36.6187C19.5844 34.2397 18.1598 31.3482 17.5489 28.2392C16.9379 25.1301 17.1623 21.9145 18.1994 18.9205C19.2364 15.9264 21.0489 13.261 23.452 11.1958C23.63 11.0425 23.7509 10.8336 23.7952 10.6029C23.8394 10.3722 23.8044 10.1333 23.6958 9.925C22.1229 6.77201 20.3512 3.72211 18.3916 0.793754C18.1767 0.553697 17.9135 0.361667 17.6193 0.230198C17.3251 0.0987292 17.0065 0.030777 16.6843 0.030777C16.3621 0.030777 16.0435 0.0987292 15.7493 0.230198C15.4551 0.361667 15.192 0.553697 14.977 0.793754C11.902 4.82709 0.0166016 27.6792 0.0166016 34.35C0.0166016 42.5271 7.96035 49.975 16.6833 49.975C19.2398 49.9262 21.754 49.3135 24.0463 48.1805C26.3385 47.0475 28.3523 45.4222 29.9437 43.4208C30.0487 43.29 30.1205 43.1357 30.1531 42.9711C30.1857 42.8065 30.178 42.6365 30.1308 42.4755C30.0835 42.3145 29.9981 42.1673 29.8817 42.0464C29.7653 41.9256 29.6215 41.8346 29.4624 41.7813ZM16.1291 43.8396C16.0511 44.1851 15.8578 44.4939 15.581 44.715C15.3042 44.9361 14.9604 45.0564 14.6062 45.0563C14.4892 45.056 14.3726 45.0434 14.2583 45.0188C12.6753 44.6605 11.1922 43.9533 9.91741 42.9488C8.64258 41.9443 7.60812 40.6678 6.88952 39.2125C6.78943 39.0281 6.72751 38.8254 6.70747 38.6165C6.68742 38.4076 6.70965 38.1968 6.77284 37.9967C6.83602 37.7966 6.93887 37.6113 7.07524 37.4518C7.2116 37.2923 7.3787 37.1619 7.56655 37.0684C7.75441 36.9749 7.95917 36.9202 8.16863 36.9076C8.37809 36.8949 8.58795 36.9246 8.78569 36.9948C8.98343 37.065 9.16501 37.1744 9.31958 37.3163C9.47414 37.4582 9.59854 37.6298 9.68535 37.8208C10.1987 38.8612 10.938 39.7737 11.8492 40.4917C12.7604 41.2097 13.8205 41.7151 14.952 41.9708C15.3553 42.0632 15.7055 42.3119 15.9254 42.6624C16.1454 43.0128 16.2171 43.4362 16.1249 43.8396H16.1291Z'
                      fill='#D73728'
                    />
                    <path
                      d='M35.1562 9.95C32.2238 9.95 29.3572 10.8195 26.9189 12.4487C24.4807 14.0778 22.5802 16.3933 21.458 19.1025C20.3357 21.8117 20.0419 24.7928 20.6139 27.6689C21.1858 30.5451 22.5977 33.187 24.6711 35.2607C26.7445 37.3344 29.3863 38.7467 32.2623 39.319C35.1383 39.8914 38.1195 39.598 40.8288 38.4761C43.5382 37.3542 45.854 35.4541 47.4834 33.0161C49.1129 30.5781 49.9829 27.7116 49.9833 24.7792C49.9789 20.8479 48.4154 17.079 45.6358 14.299C42.8562 11.519 39.0874 9.95496 35.1562 9.95ZM35.1562 36.4792C32.8416 36.4792 30.5791 35.7928 28.6546 34.5069C26.7302 33.2209 25.2303 31.3932 24.3447 29.2548C23.459 27.1164 23.2274 24.7634 23.6791 22.4934C24.1308 20.2233 25.2455 18.1382 26.8823 16.5017C28.5191 14.8652 30.6044 13.7509 32.8745 13.2996C35.1446 12.8483 37.4976 13.0803 39.6358 13.9664C41.7741 14.8524 43.6015 16.3526 44.8871 18.2773C46.1727 20.2019 46.8587 22.4646 46.8583 24.7792C46.8544 27.8814 45.6202 30.8554 43.4264 33.0488C41.2326 35.2422 38.2584 36.4759 35.1562 36.4792Z'
                      fill='#94ADBE'
                    />
                    <path
                      d='M37.9476 18.2937C37.5556 17.9028 37.0243 17.6837 36.4707 17.6844C35.9171 17.6852 35.3865 17.9059 34.9955 18.2979C34.6046 18.6899 34.3855 19.2212 34.3862 19.7748C34.387 20.3284 34.6077 20.8591 34.9997 21.25L37.083 23.3333C37.476 23.7128 38.0022 23.9228 38.5485 23.9181C39.0947 23.9133 39.6172 23.6942 40.0035 23.308C40.3898 22.9217 40.6089 22.3992 40.6136 21.8529C40.6184 21.3067 40.4084 20.7804 40.0289 20.3875L37.9476 18.2937Z'
                      fill='#94ADBE'
                    />
                    <path
                      d='M28.75 22.4604L26.6667 24.5438C26.2747 24.9347 26.054 25.4653 26.0532 26.0189C26.0524 26.5726 26.2716 27.1038 26.6625 27.4958C27.0535 27.8879 27.5841 28.1085 28.1377 28.1093C28.6913 28.1101 29.2226 27.8909 29.6146 27.5L31.698 25.4167C31.8921 25.2231 32.0461 24.9932 32.1514 24.7401C32.2567 24.487 32.311 24.2156 32.3114 23.9415C32.3118 23.6674 32.2582 23.3958 32.1537 23.1424C32.0491 22.889 31.8957 22.6587 31.7021 22.4646C31.5086 22.2705 31.2787 22.1164 31.0255 22.0111C30.7724 21.9059 30.5011 21.8515 30.2269 21.8511C29.9528 21.8507 29.6813 21.9043 29.4279 22.0089C29.1745 22.1134 28.9441 22.2669 28.75 22.4604Z'
                      fill='#94ADBE'
                    />
                    <path
                      d='M36.4749 26.0167C35.9224 26.0167 35.3925 26.2362 35.0018 26.6269C34.6111 27.0176 34.3916 27.5475 34.3916 28.1V31.225C34.3916 31.7775 34.6111 32.3075 35.0018 32.6982C35.3925 33.0889 35.9224 33.3083 36.4749 33.3083C37.0275 33.3083 37.5574 33.0889 37.9481 32.6982C38.3388 32.3075 38.5583 31.7775 38.5583 31.225V28.1C38.5583 27.5475 38.3388 27.0176 37.9481 26.6269C37.5574 26.2362 37.0275 26.0167 36.4749 26.0167Z'
                      fill='#94ADBE'
                    />
                  </svg>
                  <h2># Bags</h2>
                </div>
              </div>
              <div className='bloodRequested d-flex '>
                <div className='topLabel d-flex'>
                  <h5>Total of Blood Requested</h5>
                </div>
                <div>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0)'>
                      <path
                        d='M30.4375 25.4875C28.4426 24.9331 26.5892 23.959 25.0012 22.6304C23.4132 21.3019 22.1273 19.6495 21.2294 17.7838C20.3316 15.9181 19.8426 13.8822 19.7951 11.8123C19.7476 9.74233 20.1428 7.68613 20.9542 5.78126C21.0175 5.63307 21.0455 5.47221 21.0361 5.31134C21.0267 5.15048 20.9801 4.99398 20.9 4.85417C20.1336 3.46294 19.2899 2.11569 18.3729 0.818756C18.1592 0.576979 17.8966 0.383373 17.6025 0.250769C17.3083 0.118165 16.9893 0.0495911 16.6667 0.0495911C16.344 0.0495911 16.025 0.118165 15.7309 0.250769C15.4367 0.383373 15.1741 0.576979 14.9604 0.818756C11.8854 4.85001 0 27.7083 0 34.375C0 42.5521 7.94375 50 16.6667 50C25.3896 50 33.3333 42.5521 33.3333 34.375C33.0262 31.5264 32.2836 28.7419 31.1313 26.1188C31.073 25.9666 30.9799 25.8303 30.8594 25.7206C30.739 25.611 30.5944 25.5312 30.4375 25.4875ZM16.1063 43.8646C16.061 44.0653 15.9766 44.2551 15.8577 44.4231C15.7388 44.591 15.5879 44.7338 15.4136 44.8432C15.2394 44.9526 15.0452 45.0265 14.8423 45.0605C14.6393 45.0946 14.4317 45.0882 14.2313 45.0417C12.6507 44.6819 11.1703 43.9743 9.89774 42.9702C8.62519 41.9662 7.59255 40.691 6.875 39.2375C6.7818 39.0536 6.72591 38.8531 6.71056 38.6475C6.69522 38.4418 6.72072 38.2352 6.78559 38.0395C6.85046 37.8438 6.95343 37.6629 7.08855 37.5072C7.22367 37.3514 7.38827 37.224 7.57288 37.1322C7.75748 37.0403 7.95843 36.986 8.16415 36.9722C8.36986 36.9584 8.57628 36.9854 8.77149 37.0518C8.9667 37.1181 9.14686 37.2224 9.30157 37.3587C9.45628 37.495 9.58249 37.6606 9.67292 37.8458C10.1862 38.886 10.9256 39.7982 11.8368 40.5159C12.748 41.2336 13.8081 41.7385 14.9396 41.9938C15.3419 42.088 15.6905 42.3377 15.9092 42.6883C16.1278 43.0389 16.1987 43.4619 16.1063 43.8646Z'
                        fill='#D73728'
                      />
                      <path
                        d='M49.2332 23.1667L44.2582 18.1667C44.0999 18.008 43.9969 17.8025 43.9646 17.5807C43.9324 17.3589 43.9725 17.1326 44.0791 16.9354C44.9769 15.2713 45.4452 13.4095 45.4416 11.5187C45.4416 9.24014 44.7659 7.01271 43.5 5.11812C42.234 3.22352 40.4347 1.74687 38.3296 0.874886C36.2244 0.00290137 33.908 -0.22525 31.6731 0.219284C29.4383 0.663818 27.3855 1.76107 25.7743 3.37229C24.1631 4.98351 23.0658 7.03632 22.6213 9.27114C22.1767 11.506 22.4049 13.8224 23.2769 15.9276C24.1489 18.0327 25.6255 19.832 27.5201 21.098C29.4147 22.3639 31.6421 23.0396 33.9207 23.0396C35.8115 23.0428 37.6732 22.5745 39.3374 21.6771C39.5344 21.571 39.7602 21.5311 39.9816 21.5634C40.203 21.5957 40.4081 21.6984 40.5666 21.8562L45.5666 26.8312C45.8052 27.0753 46.0902 27.2693 46.4049 27.4017C46.7195 27.5341 47.0575 27.6024 47.3989 27.6024C47.7402 27.6024 48.0782 27.5341 48.3928 27.4017C48.7075 27.2693 48.9925 27.0753 49.2312 26.8312C49.4739 26.5919 49.6666 26.3067 49.7983 25.9922C49.9299 25.6778 49.9978 25.3403 49.998 24.9994C49.9982 24.6585 49.9307 24.321 49.7994 24.0063C49.6681 23.6917 49.4757 23.4063 49.2332 23.1667ZM33.9207 18.875C32.4662 18.875 31.0444 18.4437 29.835 17.6356C28.6256 16.8275 27.683 15.6789 27.1264 14.3352C26.5698 12.9914 26.4241 11.5127 26.7079 10.0861C26.9916 8.65954 27.6921 7.34915 28.7206 6.32065C29.7491 5.29215 31.0594 4.59174 32.486 4.30797C33.9126 4.02421 35.3913 4.16985 36.7351 4.72647C38.0789 5.28309 39.2274 6.22569 40.0355 7.43508C40.8436 8.64446 41.2749 10.0663 41.2749 11.5208C41.2711 13.4701 40.495 15.3384 39.1167 16.7168C37.7383 18.0951 35.87 18.8711 33.9207 18.875Z'
                        fill='#94ADBE'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <rect width='50' height='50' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2># Bags</h2>
                </div>
              </div>
            </div>
            <div className='basicInfo d-flex '>
              <div className='topLabel d-flex'>
                <h5>Basic Information</h5>
              </div>
              <div className='d-flex justify-content-around'>
                <div className='d-flex'>
                  <div className='basicInfoLabels'>
                    <ul>
                      <li>Location</li>
                      <li>Email</li>
                      <li>Mobile Number</li>
                      <li>Blood Type</li>
                      <li>Last Time Donated</li>
                    </ul>
                  </div>
                  <div className='basicInfoData'>
                    <ul>
                      <li>{user.city}   </li>
                      <li>{user.email}   </li>
                      <li>{user.mobileNumber}   </li>
                      <li>{profile.bloodType}   </li>
                      <li>{profile.lasTimeDonated}   </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Button
                    className='buttonCustom changePassword '
                    variant='light'
                    onClick={handleShow}
                  >
                    <svg
                      width='17'
                      height='18'
                      viewBox='0 0 17 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.2 8.2V5C4.2 2.79086 5.99086 1 8.2 1C10.4091 1 12.2 2.79086 12.2 5V8.2M2.6 17H13.8C14.6837 17 15.4 16.2837 15.4 15.4V9.8C15.4 8.91634 14.6837 8.2 13.8 8.2H2.6C1.71634 8.2 1 8.91634 1 9.8V15.4C1 16.2837 1.71634 17 2.6 17Z'
                        stroke='#8C94A4'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    CHANGE PASSWORD
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header className='modalHeader .topLabel' closeButton>
                      <Modal.Title className='modalTitle'>
                        Change Password
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalBody'>
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <Form.Group
                          as={Col}
                          md='12'
                          controlId='validationCustom01'
                        >
                          <Form.Label className='formLabel'>
                            Old Password
                          </Form.Label>

                          <Form.Control required type='password'></Form.Control>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md='12'
                          controlId='validationCustom01'
                        >
                          <Form.Label className='formLabel'>
                            New Password
                          </Form.Label>
                          <Form.Control required type='password'></Form.Control>
                          <Form.Label className='passwordLabel'>
                            Password must Contain between 8–36 characters, at
                            least 1 upper-case letter and at least 1 number
                          </Form.Label>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md='12'
                          controlId='validationCustom01'
                        >
                          <Form.Label className='formLabel'>
                            Confirm New Password
                          </Form.Label>
                          <Form.Control required type='password'></Form.Control>
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-between modalFooter'>
                      <Button
                        className='buttonCustom'
                        variant='light'
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        className='buttonCustom redButton '
                        variant='danger'
                        onClick={handleSubmit}
                      >
                        Change Password
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}

        <section>
          <div>
            <div>
              <Nav
                variant='tabs'
                defaultActiveKey='table1'
                onSelect={selectedKey}
              >
                <Nav.Item>
                  <Nav.Link eventKey='table1'>Requested Blood</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='table2'>Donated Blood</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div>
              <div className='tableSize'>{tableData}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
