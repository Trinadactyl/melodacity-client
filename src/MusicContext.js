import React, { Component } from 'react'

const MusicContext = React.createContext({
  key:'',
  tonic: '',
  prog: '',
  melody: [],
  setKey: () => {},
  setToic: () => {},
  setProg: () => {},
  setMelody: () => {},
})
export default MusicContext

export class MusicProvider extends Component {
  state = {
    key: '',
    tonic: '',
    prog: '',
    melody: []
  }

  setKey = key => {
    this.setState({ key: key })
  }

  setTonic = tonic => {
    this.setState({ tonic: tonic })
  }

  setprog = prog => {
    this.setState({ prog: prog })
  }

  setMelody = melody => {
    this.setState({ melody: melody})
  }

  render() {
    const value = {
      key: this.key,
      tonic: this.tonic,
      prog: this.prog,
      melody: this.melody,
      setKey: this.setKey,
      setToic: this.setTonic,
      setProg: this.setProg,
      setMelody: this.setMelody
    }
    return (
      <MusicContext.Provider value={value}>
        {this.props.children}
      </MusicContext.Provider>
    )
  }
}