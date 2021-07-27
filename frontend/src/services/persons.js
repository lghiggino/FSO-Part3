import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return  axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const updateNumber = (id, newObject) => {
    return  axios.put(`${baseUrl}/${id}`, newObject)
}

async function remove(id) {
    await axios.delete(`${baseUrl}/${id}`)
    return await axios.get(baseUrl)
}

export default { getAll, create, updateNumber, remove }