import { userConstants } from "../_constants";
import { userService } from "../_services";
import jwt_decode from "jwt-decode";


const loginAction = (details) => {
  return (dispatch) => {
    userService.login(details).then((res) => {

      console.log(res)

      if (res.type === "loginSuccess") {

        localStorage.setItem("jwtToken", res.token);
        const decoded = jwt_decode(res.token);

        dispatch({
          type: userConstants.USER_LOGIN_SUCCESS,
          user: decoded,
        });

        localStorage.setItem("isLoggedIn", true);
      }
      else if (res.type === "Invalid") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "You're not registered.",
          }
        });
      }else if (res.type === "notActivated") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "not yet activated",
          }
        });
      }else {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "password is incorrect",
          },
        });
      }
    });
  };
};

const registerAction = (details) => {
  return (dispatch) => {
    
    userService.register(details).then((res) => {

      console.log(details)

      if (res.type === "registerSuccessful") {
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          errors: {
            type: "warning",
            message: "Register Successful",
          }
        });
      }
      else if (res.type === "emailExists") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "Mail exists",
          }
        });
      } else if (res.type === "invalidPassword") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "All fields are required",
          }
        });
      }else {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "Register failed",
          }
        })
      }
    })
  }
}

// for admin page
const findAllUserAction = () => {
  return (dispatch) => {
    
    userService.findAllUser().then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: userConstants.USER_LIST_ALL_SUCCESS,
          users: res.users
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "error",
          }
        });
      } 
    })
  }
}

const findOneUserAction = () => {
  return (dispatch) => {
    
    userService.findOneUser().then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: userConstants.USER_DETAILS_SUCCESS,
          user: res.users
        });
        console.log(res.users)
      }
      else if (res.type === "error") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "error",
          }
        });
      } 
    })
  }
}

const activationAction = (key) => {
  return (dispatch) => {
    
    userService.activation(key).then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: userConstants.USER_ACTIVATION_SUCCESS,
          errors: {
            type: "warning",
            message: "Activation Successful",
          }
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: userConstants.USER_ACTIVATION_FAIL,
        });
      } 
    })
  }
}

const updateUserAction = (userDetails) => {
  return (dispatch) => {
    
    userService.updateUser(userDetails).then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: userConstants.USER_UPDATE_SUCCESS,
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: userConstants.USER_SET_ERRORS,
          errors: {
            type: "warning",
            message: "error",
          }
        });
      } 
    })
  }
}

export const userActions = {
  loginAction,
  registerAction,
  activationAction,
  findAllUserAction,
  findOneUserAction,
  updateUserAction
};
