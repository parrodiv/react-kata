import axios from 'axios'

const BASE_URL = 'http://localhost:2000'

const getServices = async () => {
  const API_URL = `${BASE_URL}/services`

  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    alert(error)
  }
}

const getAppointments = async (id) => {
  const API_URL = `${BASE_URL}/appointments/${id}`

  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    alert(error)
  }
}

const postAppointment = async (id, data) => {
  const API_URL = `${BASE_URL}/appointments/${id}`

  try {
    const response = await axios.post(API_URL, data)
    return response.data
  } catch (error) {
    alert(error)
  }
}

export { getServices, getAppointments, postAppointment }
