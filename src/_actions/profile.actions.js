
import {ProfileService} from "../_services";
import {profileConstants} from "../_constants"


const GetprofileAction = () => {
  return (dispatch) => {

    ProfileService.findOneProfile().then((res) => {

    console.log(res)

      if (res.type === "success") {
        dispatch({
          type: profileConstants.PROFILE_DETAILS_SUCCESS,
          profile: res.profile
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: profileConstants.PROFILE_DETAILS_FAIL,
        });
      } 
    })
  }
}

const updateProfileAction = (profileDetails) => {
  return (dispatch) => {

    ProfileService.updateProfile(profileDetails).then((res) => {

    console.log(res)

      if (res.type === "success") {
        dispatch({
          type: profileConstants.PROFILE_UPDATE_SUCCESS,
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: profileConstants.PROFILE_UPDATE_FAIL,
        });
      } 
    })
  }
}

export const profileActions = {
  GetprofileAction,
  updateProfileAction,

};
