import axios from "axios"
import Characters from './characters'

export const api = () => {

  const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    },
    timeout: 45000
  })

  const characters = Characters(axiosConfig)

  return {
    characters
  }

}