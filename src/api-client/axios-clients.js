import axios from 'axios'

const APIVersion = '2.0'

export const lastFM = axios.create({
  baseURL: `https://ws.audioscrobbler.com/${APIVersion}`,
  params: {
    api_key: '2c102b4788201ecc99aef740d130356e',
    format: 'json'
  }
})
