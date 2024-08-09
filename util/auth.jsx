import axios from 'axios';

const API_KEY = 'AIzaSyACM0mVPbrvNt8H5Xo8LrXNXEgd6xq1fps';

export async function createUser(email, password) {
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
        return response.data; // Devolver la respuesta para poder usarla en otra parte del código
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Lanzar el error para que se pueda manejar en otra parte del código si es necesario
    }
}
