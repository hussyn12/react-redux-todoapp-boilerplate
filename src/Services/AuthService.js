import axios from 'axios'

export default class AuthService {
    static async register(data) {
        const res = await axios.post("http://localhost:8000/api/user/create", data)
        return res.data
    }

    static async signIn(data) {
        const res = await axios.post("http://localhost:8000/api/auth/login", data)
        const token = await res.data
        if (token) {
            localStorage.setItem("JwtToken", token)
        }
        return res.data
    }
}