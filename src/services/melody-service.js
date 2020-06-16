import config from '../config'
import TokenService from './token-service'


const MelodyService = {
  getMelodies() {
    return fetch(`${config.API_ENDPOINT}/melodies`, {
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  },
  getUserSpecificMelodies(userId) {
    return fetch(`${config.API_ENDPOINT}/melodies/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postMelody(details) {
    return fetch (`${config.API_ENDPOINT}/melodies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },
  deleteMelody(userId) {
    return fetch (`${config.API_ENDPOINT}/melodies/${userId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      //console.log('res', res)
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
    })
    .catch(error => {
      console.error({ error })
    })
  }
  //end of melody service
}

export default MelodyService