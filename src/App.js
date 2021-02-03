import React, {Fragment , useEffect} from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Switch from "react-bootstrap/esm/Switch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import { userConstants } from "./_constants";
import { useDispatch} from "react-redux";


//Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

//Pages
import SetupProfile from "./components/pages/SetupProfile/Index";
import CreateRequest from "./components/pages/CreateRequestPage/Index";
import SignIn from "./components/pages/SignIn/Index";
import ForgotPW from "./components/pages/ForgotPW/Index";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Index";
import EditProfile from "./components/pages/EditProfilePage/Index";
import Profile from "./components/pages/Profile/Index";
import Explore from "./components/pages/ExplorePage/Index"
import Activation from "./components/pages/Activation/Activation";

//notification
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  
      if (localStorage.jwtToken) {
          
        const token = localStorage.jwtToken;
        const decoded = jwt_decode(token);

        dispatch({
          type: userConstants.USER_LOGIN_SUCCESS,
          user: decoded,
        });
      }

  }, []);

    return (
      <Fragment>
        <ReactNotification />
          <Router basename={process.env.PUBLIC_URL}>
            <Header />
                <Switch className='switchLayout'>
                  <Route exact path='/' component={Home} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/register' component={Register} />
                  <Route path='/activate/:key' component={Activation} />
                  <Route path='/forgotPW' component={ForgotPW} />
                  <Route path='/setupProfile' component={SetupProfile} />
                  <Route path='/editProfilePage' component={EditProfile} />
                  <Route path='/createRequestPage' component={CreateRequest} />
                  <Route path='/profilePage' component={Profile} />
                  <Route path='/explorePage' component={Explore} />
                </Switch>
            <Footer />
          </Router>

        <script
          src='https://unpkg.com/react/umd/react.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
          crossorigin
        ></script>

        <script
          src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
          crossorigin
        ></script>
        
      </Fragment>
    );
    
};

export default App;

