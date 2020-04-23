import config from '../config'


const MelodyService = {
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
  }
  //end of melody service
}

export default MelodyService