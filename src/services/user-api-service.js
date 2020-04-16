import config from "../config"

const UsersApiService = {
  getUsers() {
    fetch(`${config.API_ENDPOINT}/users`, {
   })
   .then(res => 
    (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  }

}
