import axios from 'axios'

export default class TodoService {
    static async create(data) {
        const token = localStorage.getItem("JwtToken")
        const res = await axios.post("http://localhost:8000/api/todo/create",
        data, {headers: {Authorization: token}}
        )
        return res.data
    }

    static async update(data, todoId) {
        const token = localStorage.getItem("JwtToken")
        const res = await axios.put(`http://localhost:8000/api/todo/${todoId}`,
        data,
        {headers: {Authorization: token}}
        )
        return res.data
    }

    static async delete(todoId) {
        const token = localStorage.getItem("JwtToken")
        const res = await axios.delete(`http://localhost:8000/api/todo/delete/${todoId}`,
        {headers: {Authorization: token}}
        )
        return res.data
    }

    static async list() {
        const token = localStorage.getItem("JwtToken")
        const res = await axios.get('http://localhost:8000/api/todo/list',
        {headers: {Authorization: token}}
        )
        return res.data
    }
}