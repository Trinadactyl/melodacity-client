import React, { Component } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext';
import './JamPage.css'

    //each key and its major scale
    const majorScales = { 
      'A': ['A','B','Db','D','E','Gb','Ab','A'],
      'Ab': ['Ab','Bb','C','Db','Eb','F','G','Ab'],
      'B': ['B','Db','Eb','E','Gb','Ab','Bb','B'],
      'Bb': ['Bb','C','D','Eb','F','G','A','Bb'],
      'C': ['C','D','E','F','G','A','B','C'],
      'D': ['D','E','Eb','G','A','B','Bb','D'],
      'Db': ['Db','Eb','F','Gb','Ab','Bb','C','Db'],
      'E': ['E','Gb','Ab','A','B','Db','Fb','E'],
      'Eb': ['Eb','F','G','Ab','Bb','C','D','Eb'],
      'F': ['F','G','A','Bb','C','D','E','F'],
      'G': ['G','A','B','C','D','E','Gb','G'],
      'Gb': ['Gb','Ab','Bb','Cb','Db','Eb','F','Gb'],
    }

    //each key and its minor scale
    const minorScales = { 
    'A': ['A','B','Db','D','E','Gb','Ab','A'],
    'Ab': ['Ab','Bb','C','Db','Eb','F','G','Ab'],
    'B': ['B','Db','Eb','E','Gb','Ab','Bb','B'],
    'Bb': ['Bb','C','D','Eb','F','G','A','Bb'],
    'C': ['C','D','E','F','G','A','B','C'],
    'D': ['D','E','Eb','G','A','B','Bb','D'],
    'Db': ['Db','Eb','F','Gb','Ab','Bb','C','Db'],
    'E': ['E','Gb','Ab','A','B','Db','Fb','E'],
    'Eb': ['Eb','F','G','Ab','Bb','C','D','Eb'],
    'F': ['F','G','A','Bb','C','D','E','F'],
    'G': ['G','A','B','C','D','E','Gb','G'],
    'Gb': ['Gb','Ab','Bb','Cb','Db','Eb','F','Gb'],
  }

  // const notes = {
  //   'A': new Audio('/notes/A.mp3'),
  //   'Ab': new Audio('/notes/Ab.mp3'),
  //   'B': new Audio('/notes/B.mp3'),
  //   'Bb': new Audio('/notes/Bb.mp3'),
  //   'C': new Audio('/notes/C.mp3'),
  //   'D': new Audio('/notes/D.mp3'),
  //   'Db': new Audio('/notes/Db.mp3'),
  //   'E': new Audio('/notes/E.mp3'),
  //   'Eb': new Audio('/notes/Eb.mp3'),
  //   'F': new Audio('/notes/F.mp3'),
  //   'G': new Audio('/notes/G.mp3'),
  //   'Gb': new Audio('/notes/Gb.mp3'),
  // }

export default class Jam extends Component {
  static contextType = MusicProvider

  //PLAY SOUNDS IN HERE!!!!!!!!!!!!!!!!!!-------------------------------------------------------------------------------------
  //find value of note played...
  handleClick(val) {
    // alert('This feature is coming soon!')
    //new Audio('/notes/G.mp3').play();

    //console.log(val)
  }

  componentDidMount() {
    //redirect user to main page if no selections were made
    //why doesn't it work?
    if (this.context.key === '' && this.context.tonic === '' && this.context.prog === []) {
      this.props.history.push('/')
    }
  }

  displayProg() {
    const prog = this.context.prog
    if(prog.length < 1) {
      return 'No progression is selected'
    }
    return prog.join('-')
  };

  displayTonic() {
    const tonic = this.context.tonic
    if (tonic === '') {
      return 'No tonic is selected'
    }
    return tonic
  }

  displayKey() {
    const key = this.context.key
    if (key === '') {
      return 'No key is selected'
    }
    return key
  };

  //Get the correct index values of scale array based on selected progression
  getNoteIndexes(scale, prog) {
    const result = []

    for (let i = 0; i < prog.length; i++) {
      const el = scale[prog[i]-1]

      result.push(el)
    }
    return result
  };

  //get the chords from the correct scale based on the indicied provided 
  getKeySpecificProgression(key, tonic, prog) {
    const keyTonic = tonic === 'major' ? majorScales : minorScales
    const scale = keyTonic[key]

    return this.getNoteIndexes(scale, prog)
  }

  renderChordButtons(key, tonic, prog) {
    const chordArr = this.getKeySpecificProgression(key, tonic, prog)

    const chordList = chordArr.map((chord, i) => 
      <li key={i}> 
        <button className='chord-btn' value={chord} onClick={() => this.handleClick(chord)}>
          {chord}
        </button>
      </li> )

    return (
      <ul className='chordlist'>
        {chordList}
      </ul>
    )
  }

  // handleSetMelody() {
  //   // const prog = this.context.prog
  //   // const key = this.context.key
  //   // const melody = [majorScales.key[prog]]
  //   // console.log('melody', melody)
  //   // this.context.setMelody(melody)
  //   return
  // }

  render() {
    const key = this.context.key
    const tonic = this.context.tonic
    const prog = this.context.prog

    return (
      <>
      <div className='jam-header'>
        <h1>Let's Jam!</h1>
        <h2>Key: {this.displayKey()}</h2>
        <h2>Tonic: {this.displayTonic()}</h2>
        <h2>Progression: {this.displayProg()}</h2>        
      </div>
      
      <div className='chord-container'>
        {this.renderChordButtons(key, tonic, prog)}
      </div>

      <div className='controls'>
        <p>Coming Soon!</p>
        <button className='purple-btn' onClick={this.handleClick}>Record</button>
        <button className='purple-btn' onClick={this.handleClick}>Stop</button>
        <button className='purple-btn' onClick={this.handleClick}>Play</button>
      </div>

      <nav>
        {/* <Router> */}
          <Link to='/select-progression'>
            <button className='purple-btn'>Back</button>
          </Link> 
          <Link to='/save'>
            <button className='purple-btn'>Save</button>
          </Link> 
        {/* </Router> */}
      </nav>
      </>
    )
  }
}