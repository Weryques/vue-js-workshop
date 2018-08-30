import qs from 'qs'
import { lastFM } from '@/api-client/axios-clients.js'

export const fetchTopAlbums = ({commit}, artist) => {
  let query = qs.stringify({
    method: 'artist.gettopalbums',
    artist: artist.replace(/\//g, '%2F').replace(/#/g, '%23'),
    autocorrect: 1
  })

  return lastFM.get(`/?${query}`)
    .then(response => {
      commit('setTopAlbums', response.data.topalbums.album)
    })
    .catch(error => {
      console.error(error)
    })
}

export const searchArtist = ({commit}, artist) => {
  let query = qs.stringify({
    method: 'artist.search',
    artist: artist.replace(/\//g, '%2F').replace(/#/g, '%23')
  })

  return lastFM.get(`/?${query}`)
    .then(response => {
      commit('setSearchResult', response.data.results)
    })
    .catch(error => {
      console.error(error)
    })
}

export const fetchArtistInfo = ({commit}, artist) => {
  let query = qs.stringify({
    method: 'artist.getinfo',
    artist: artist.replace(/\//g, '%2F').replace(/#/g, '%23')
  })

  return lastFM.get(`/?${query}`)
    .then(response => {
      commit('setArtistInfo', response.data.artist)
    })
    .catch(error => {
      console.error(error)
    })
}
