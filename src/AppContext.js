import React, { Component } from 'react'

export const AppContext = React.createContext({
  name: '',
  userName: '',
  isLoggedin: false,
  updateName: () => {},
  updateUserName: () => {},
  updateLoggedIn: () => {}
})

export class AppProvider extends Component {
  state = {
    name: '',
    userName:'',
    isLoggedin: false,
    updateName: () => {},
    updateUserName: () => {},
    toggleLoggedIn: () => {}
  }

  updateName = name => {
    this.updateState({ name: name })
  }

  updateUserName = userName => {
    this.updateState({ userName: userName })
  }

  toggleLoggedIn = () => {
    this.updateState({ isLoggedin: !this.state.isLoggedin })
  }

  render() {
    const value = {
      name: this.state.name,
      userName: this.state.userName,
      isLoggedIn: this.state.isLoggedin,
      updateName: this.updateName,
      updateUserName: this.updateUserName,
      toggleLoggedIn: this.toggleLoggedIn
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}