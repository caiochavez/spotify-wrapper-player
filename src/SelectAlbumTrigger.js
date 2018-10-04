import spotify from './Spotify'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTracks'

const listAlbums = document.getElementById('album-list')
const albumInfo = document.getElementById('album-info')
const albumTrack = document.getElementById('album-tracks')

const makeRequest = albumId => {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTrack))
}

export default function selectAlbumTrigger () {
  listAlbums.addEventListener('click', e => {
    e.preventDefault()
    const target = e.target
    makeRequest(target.getAttribute('data-album-id'))
  })
}