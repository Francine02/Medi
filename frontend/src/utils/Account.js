import axios from 'axios'

const API = 'https://medi-f3fk.onrender.com';

export const createAccount = async (data) => {
    try {
        const response = await axios.post(`${API}/auth/register`, data)
        console.log("Sucesso no cadastro!");
        alert("Usuário registrado com sucesso!")
        return response
    } catch (error) {
        alert("Ocorreu um erro! Tente com outro E-mail ou volte mais tarde.")
        console.error('Erro ao registrar usuário:', error)
    }
}

export const loginAccount = async (data) => {
    try {
        const response = await axios.post(`${API}/auth/login`, data)
        console.log("Sucesso no login!")

        const token = response.data.token

        if (token) {
            localStorage.setItem('token', token)
        } else {
            console.error("Token não encontrado na resposta:", response.data)
        }

        return response
    } catch (error) {
        alert("Ocorreu um erro! Verifique os dados novamente ou volte mais tarde.")
        console.error('Erro ao realizar login: ', error)
    }
}

export const validateForm = (email, password) => {
    if (!email || !password) {
        return 'Por favor, preencha todos os campos.'
    }
    return ''
}