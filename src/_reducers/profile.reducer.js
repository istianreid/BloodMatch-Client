import { profileConstants } from "../_constants";

const initialState = {

  profile: {},
  success: false,
  loading: false,
  errors: false,
  valid: false,

};

export const profile = (state = initialState, action) => {

  switch (action.type) {
    case profileConstants.PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        // success:true,
        profile: action.profile
      };
    case profileConstants.PROFILE_DETAILS_FAIL:
      return {
        ...state,
        errors: true,
      };
      /* falls through */
    case profileConstants.PROFILE_UPLOAD_SUCCESS:
      return {
        ...state,
        valid: false,
      };
    case profileConstants.PROFILE_UPLOAD_FAIL:

      /* falls through */
    case profileConstants.PROFILE_UPDATE_SUCCESS:
      return {
         ...state,
        valid: true,
        profile: action.profile,
      }
    case profileConstants.PROFILE_UPDATE_FAIL:
      return {
        ...state,
        errors: true,
      };
      /* falls through */
    case profileConstants.PROFILE_LIST_SUCCESS:
    case profileConstants.PROFILE_LIST_FAIL:
      return {
        ...state,
        errors: true,
      };
      /* falls through */
    case profileConstants.PROFILE_DELETE_SUCCESS:
      return {
        ...state,
       success:true,
       profile: action.profile,
       loading: true,
     }
    case profileConstants.PROFILE_DELETE_FAIL:
      return {
        ...state,
        errors: true,
      };
      /* falls through */
    default: {
      return {
        ...state

      }
    }
  }
};
