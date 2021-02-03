import axios from "axios"


// http://localhost:8080/api/v1

// https://bloodmatch.herokuapp.com/

const imgProfileURL = 'https://bloodmatch.herokuapp.com/uploads/profile/'
const imgRequesPostURL = 'https://bloodmatch.herokuapp.com/uploads/'
const baseURL = 'https://bloodmatch.herokuapp.com/api/v1'

let headers = {};

if (localStorage.jwtToken) {
    headers.authorization = `Bearer ${localStorage.jwtToken} `
}

const instance = axios.create({
    baseURL: baseURL, 
    headers,
})

const imgProfile = imgProfileURL
const imgRequestpost = imgRequesPostURL


export {instance , imgProfile , imgRequestpost }
