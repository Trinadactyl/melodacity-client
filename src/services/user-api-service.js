import config from "../config"


const UsersApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
   })
   .then(res => 
    (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  }
}

export default UsersApiService