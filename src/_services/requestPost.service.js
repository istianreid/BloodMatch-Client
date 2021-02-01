import {instance} from '../_helpers/axios';


const addRequestPost = async (details) => {

  const result = instance
    .post("/requestPost", details)
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        return {
          type: "success" 
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


//need to add Request id 
// not needed

const updateRequestPost = async () => {
  const result = instance

    .put("/requestPosts")
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

const findAllRequestPost = async () => {
  const result = instance
    .get("/requestPost")
    .then((res) => {

      console.log(res)

     if (res.status === 200) {
        return {
          type: "success" ,
          posts: res.data.data
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

//need to add Request id 
const findOneRequestPost = async () => {
  const result = instance
    .get("/requestPosts")
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

//need to add Request id 
const deleteRequestPost = async () => {
  const result = instance
    .get("/requestPosts")
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







export const RequestPostService = {
  addRequestPost,
  updateRequestPost,
  findAllRequestPost,
  findOneRequestPost,
  deleteRequestPost
};
