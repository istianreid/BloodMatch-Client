import { userConstants } from "../_constants";

const initialState = {
  isAuthenticated: false,
  isValid:false,

  success:false,
  loading: false,
  user: {},
  userInfo: {},
  users: {},
  
  errors: {},

};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        success:true
      };
    case userConstants.USER_REGISTER_FAIL:
      /* falls through */
    case userConstants.USER_ACTIVATION_SUCCESS:
      return {
        ...state,
        success:true,
      };
    case userConstants.USER_ACTIVATION_FAIL:
      /* falls through */
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        success:true, 
        errors: {}
      };
    case userConstants.USER_LOGIN_FAIL:
      /* falls through */
    case userConstants.USER_LOGOUT:
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("jwtToken");
      return {
        isAuthenticated: false,
        user: {},
        errors: {}
      };
    case userConstants.USER_DETAILS_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        success:true, 
        errors: {}
      };
    case userConstants.USER_DETAILS_FAIL:
      /* falls through */
    case userConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        isValid:true,
        user: action.user,
        errors: {}
      };
    case userConstants.USER_UPDATE_FAIL:
      /* falls through */
    case userConstants.USER_LIST_ALL_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case userConstants.USER_LIST_ALL_FAIL:
      /* falls through */
    case userConstants.USER_DELETE_SUCCESS:
      return {
        ...state,
        user: action.user,
        errors: {},
      };
    case userConstants.USER_DELETE_FAIL:
      /* falls through */
    case userConstants.USER_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userConstants.USER_SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
      default: {
        return {
          ...state
        }
      }
  }
};
