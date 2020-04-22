import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext';
//import musicStore from '../../musicStore'

export default class Jam extends Component {
  static contextType = MusicProvider

  renderChordButtons() {
    const chordProg = toString(this.context.prog)
    return chordProg
  }

  renderProgDisplay() {
    console.log('this.context.prog', this.context.prog)
    const prog = this.context.prog
    //console.log('this.contex.state.prog',this.contex.state.prog )
    return prog
  }

  

  render(){
    return (
      <div className='jam-page'>
        <h1>Let's Jam!</h1>
        <h2>Progression: {this.renderProgDisplay()}</h2>
        <h2>In the key of: {this.context.key}</h2>

        <div className='chords'>
          {'chords of selected key go here'}
        </div>
        <div className='notes'>
          {'corresponding notes alligned with chords'}
        </div>

        <div className='controls'>
          <button>Record</button>
          <button>Stop</button>
          <button>Play</button>
        </div>
        <div>
          <button>Save</button>
          <Link to='/progression'>
            <button>Back</button>
          </Link>
        </div>
      </div>
    )
  }
}