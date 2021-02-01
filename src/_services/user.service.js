import {instance} from '../_helpers/axios'
import jwt_decode from "jwt-decode";



//local storage not yet working 

const login = async (details) => {
  const result = instance.post("/auth/login", details)
    .then((res) => {
      console.log(res)
      // Save to localStorage
      // Set token to localStorage

      const { token } = res.data.data;

      if (res.status === 200) {
        return {
          type: "loginSuccess",
          token,
        };
      }
    })
    .catch((err) => {

      if (err.response.status === 406) {
        return {
          type: "Invalid" 
        }
      }else if (err.response.status === 426) {
        return {
          type: "notActivated" 
        }
      }else if (err.response.status === 401) {
        return {
          type: "loginError",
        };
      }
    });

  return result;
};

const register = async (details) => {
  const result = instance
    .post("/auth/register", details)
    .then((res) => {

      console.log(res)

     if (res.status === 201) {
        return {
          type: "registerSuccessful" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 500) {
        return {
          type: "registeFailed"
        };
      } else if (err.response.status === 409) {
        return {
          type: "emailExists" 
        }
      } else if (err.response.status === 417) {
        return {
          type: "invalidPassword" 
        }
      }
    });

  return result;
};

const activation = async (key) => {

  const result = instance
    .get("/auth/activate/" + key)
    .then((res) => {
      console.log(res)
     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
  })
    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};

// for admin page
const findAllUser = async () => {
  const result = instance.get("/auth/users")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" ,
          users: res.data.users
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 500) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};

// need user id and token
const findOneUser = async () => {

  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token)
  const userId = decoded.userId
  console.log(userId)
  const result = instance


    .get("/auth/users/"+userId)
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" , 
          users: res.data.data
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};
// need user id 
const updateUser = async (userDetails) => {

  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token)
  const userId = decoded.userId
  console.log(userId)

  const result = instance
    .put("/auth/users/"+userId , userDetails)
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};
// need user id and token
const deleteUser = async () => {
  const result = instance
    .delete("/auth/users")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" 
        } 
      } 
    })

    .catch((err) => {
      if (err.response.status === 400) {
        return {
          type: "error"
        };
      } 
    });

  return result;
};


export const userService = {
  login,
  register,
  activation,
  findAllUser,
  findOneUser,
  updateUser,
  deleteUser
};
