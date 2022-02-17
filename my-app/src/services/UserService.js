const axios = require('axios');

export async function createNewShift(data) {
    const response = await axios.post(`/createNewShift`, {user: data})
}

export async function getLog() {
    const response = await axios.get(`/log`)
    .then ( response => {
    return response.data})
}

