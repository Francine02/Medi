import axios from 'axios'

const API = 'https://medi-f3fk.onrender.com';

const token = localStorage.getItem('token');

const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
}

export const getMedicines = async () => {
    try {
        const response = await axios.get(`${API}/medi/all`, config)
        console.log("Sucesso ao pegar todos os medicamentos!");
        return response
    } catch (error) {
        console.log("Ocorreu um erro ao pegar todos os medicamentos!")
    }
}

export const postMedicine = async (data) => {
    try {
        const response = await axios.post(`${API}/medi/create`, data, config)
        console.log("Sucesso ao criar medicamento!");
        return response.data
    } catch (error) {
        console.log("Ocorreu um erro ao ao criar medicamento!")
    }
}

export const updateMedicine = async (id, data) => {
    try {
        const response = await axios.put(`${API}/medi/${id}`, data, config)
        console.log("Sucesso ao atualizar medicamento!");
        return response.data
    } catch (error) {
        console.log("Ocorreu um erro ao ao atualizar medicamento!")
    }
}

export const deleteMedicine = async (id) => {
    try {
        const response = await axios.delete(`${API}/medi/${id}`, config)
        console.log("Sucesso ao excluir medicamento!");
        return response.data
    } catch (error) {
        console.log("Ocorreu um erro ao ao excluir medicamento!")
    }
}