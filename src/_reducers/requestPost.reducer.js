import { requestPostConstants } from "../_constants";

const initialState = {

  mypost: {},
  posts: {},
  success: false,
  loading: false,
  
  errors: {},
};


export const post = (state = initialState, action) => {

  switch (action.type) {

    case requestPostConstants.REQUESTPOST_LIST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      };
    case requestPostConstants.REQUESTPOST_LIST_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    /* falls through */
    case requestPostConstants.REQUESTPOST_CREATE_SUCCESS:
      return {
        ...state,
        success:true,
        loading: true,
      };
    case requestPostConstants.REQUESTPOST_CREATE_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    /* falls through */
    case requestPostConstants.REQUESTPOST_UPLOAD_SUCCESS:
      return {
        ...state,
        success:true,
        loading: true,
      };
    case requestPostConstants.REQUESTPOST_UPLOAD_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    /* falls through */
    case requestPostConstants.REQUESTPOST_UPDATE_SUCCESS:
      return {
        ...state,
        success:true,
        loading: true,
      };
    case requestPostConstants.REQUESTPOST_UPDATE_FAIL:
      return {
        ...state,
        errors: action.errors,
      };
    /* falls through */

    case requestPostConstants.REQUESTPOST_DETAILS_SUCCESS:
      return {
        ...state,
        myposts: action.post,
        success:true,
      };
    case requestPostConstants.REQUESTPOST_DETAILS_FAIL:
    /* falls through */
    case requestPostConstants.REQUESTPOST_DELETE_SUCCESS:
      return {
        ...state,
        success:true,
        loading: true,
      };
    case requestPostConstants.REQUESTPOST_DELETE_FAIL:
      return {
        ...state,
        errors: action.errors,
      }
      /* falls through */
    default: {
        return {
          ...state
        }
      }  
    }
};
