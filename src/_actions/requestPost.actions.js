
import {RequestPostService} from "../_services";
import {requestPostConstants} from "../_constants"


const addRequestPostAction = (details) => {
  
  return (dispatch) => {

    RequestPostService.addRequestPost(details).then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_CREATE_SUCCESS,
          errors: {
            type: "warning",
            message: "success",
          }
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_CREATE_FAIL,
          errors: {
            type: "warning",
            message: "error",
          }
        });
      } 
    })
  }
}

const allRequestPostAction = () => {
  
  return (dispatch) => {

    RequestPostService.findAllRequestPost().then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_LIST_SUCCESS,
          posts : res.posts
        });
      }

      else if (res.type === "error") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_LIST_FAIL,
        });
      } 
    })
  }
}


export const requestPostActions = {
  addRequestPostAction ,
  allRequestPostAction
};
