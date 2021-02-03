import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../_actions";
import { store } from 'react-notifications-component'

const Activation = (props) => {
  let { key } = useParams();
  console.log(key)

  const auth = useSelector((state) => state.auth);
  const {success} = auth;
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(userActions.activationAction(key))

      if (success === true) {

        props.history.push("/signIn");

        store.addNotification({
          title: 'Success!',
          message: 'Activation Success .',
          type: 'success',                       
          container: 'top-left',               
          animationIn: ["animate__animated", "animate__fadeInRight"],   
          animationOut: ["animate__animated", "animate__fadeOutRight"],  
          dismiss: {
            duration: 8000
          }
        })
      }

  }, [success])




  return (
    <div>
      {/* {!activate ? (
        "Activating your account..."
      ) : (
        <Redirect to="/signin?activate=1" />
      )} */}
    </div>
  );
};

export default Activation;
