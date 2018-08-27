import { lastFM } from '@/api-client/axios-clients'

export const fetchAlbumInfo = ({commit}, parameters) => {
  let artistName = parameters.artistName
  let albumName = parameters.albumName

  let query = `?method=album.getinfo&artist=${artistName}&album=${albumName}&autocorrect=0`

  return lastFM.get(`/${query}`)
    .then(response => {
      commit('setAlbumInfo', response.data.album)
    })
    .catch(error => {
      console.error(error)
    })
}
