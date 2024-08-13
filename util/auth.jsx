import axios from 'axios';

const API_KEY = 'AIzaSyACM0mVPbrvNt8H5Xo8LrXNXEgd6xq1fps';


async function authenticate(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url, {
       email : email,
       password : password,
       returnSecureToken : true 
    })

    const token = response.data.idToken;
    return token;
}


export function login(email, password){
    return authenticate('signInWithPassword', email, password) 
}

export function createUser(email, password){
    return authenticate('signUp', email, password)
}






