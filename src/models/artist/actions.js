import { lastFM } from '@/api-client/axios-clients.js'

export const fetchTopAlbums = ({commit}, artist) => {
  let query = `?method=artist.gettopalbums&artist=${artist}`

  return lastFM.get(`/${query}`)
    .then(response => {
      commit('setTopAlbums', response.data.topalbums.album)
    })
    .catch(error => {
      console.error(error)
    })
}

export const searchArtist = ({commit}, artist) => {
  let query = `?method=artist.search&artist=${artist}`

  return lastFM.get(`/${query}`)
    .then(response => {
      commit('setSearchResult', response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
}
