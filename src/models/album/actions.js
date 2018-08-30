import qs from 'qs'
import { lastFM } from '@/api-client/axios-clients'

export const fetchAlbumInfo = ({commit}, parameters) => {
  let query = qs.stringify({
    method: 'album.getinfo',
    artist: parameters.artistName.replace(/\//g, '%2F').replace(/#/g, '%23'),
    album: parameters.albumName.replace(/\//g, '%2F').replace(/#/g, '%23'),
    autocorrect: 1
  })

  return lastFM.get(`/?${query}`)
    .then(response => {
      commit('setAlbumInfo', response.data.album)
    })
    .catch(error => {
      console.error(error)
    })
}
