import React, { Component } from 'react'

const MusicContext = React.createContext({
  key:'',
  tonic: '',
  prog: [],
  melody: [],
  setKey: () => {},
  setTonic: () => {},
  setProg: () => {},
  setMelody: () => {},
})
export default MusicContext

export class MusicProvider extends Component {
  state = {
    key: '',
    tonic: '',
    prog: [],
    melody: [],
    setKey: ()=>{},
    setTonic: ()=>{},
    setProg: ()=>{},
    setMelody: ()=>{}
  }

  setKey = key => {
    this.setState({ key: key })
  }

  setTonic = tonic => {
    this.setState({ tonic: tonic })
  }

  setProg = prog => {
    this.setState({ prog: prog })
  }

  setMelody = melody => {
    this.setState({ melody: melody })
  }

  render() {
    const value = {
      key: this.state.key,
      tonic: this.state.tonic,
      prog: this.state.prog,
      melody: this.state.melody,
      setKey: this.setKey,
      setTonic: this.setTonic,
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