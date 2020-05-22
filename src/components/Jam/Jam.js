import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext';
//import musicStore from '../../musicStore';
import './Jam.css'

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

export default class Jam extends Component {
  static contextType = MusicProvider

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

  getNoteIndexes(scale, prog) {
    const result = []

    for (let i = 0; i < prog.length; i++) {
      const el = scale[prog[i]-1]

      result.push(el)
    }
    return result
  };

  getKeySpecificProgression(key, tonic, prog) {
    const keyTonic = tonic === 'major' ? majorScales : minorScales
    const scale = keyTonic[key]

    return this.getNoteIndexes(scale, prog)
  }

  renderChordButtons(key, tonic, prog) {
    // const key = this.context.key
    // const tonic = this.context.tonic
    // const prog = this.context.prog

    const chordArr = this.getKeySpecificProgression(key, tonic, prog)
    const chordList = chordArr.map((chord, i) => 
      <li key={i}> 
        <button className='chord-btn'>
          {chord}
        </button>
      </li> )
    console.log('chordArr: ',chordArr)
    console.log("rendering chord buttons")
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

    //console.log(key, tonic, prog)
    //const chords = this.getKeySpecificProgression(key, tonic, prog)
    //{this.renderChordButtons(key, tonic, prog)}
    return (
      <>
      <div className='jam-header'>
        <h1>Let's Jam!</h1>
        <h2>Key: {this.displayKey()}</h2>
        <h2>Tonic: {this.displayTonic()}</h2>
        <h2>Progression: {this.displayProg()}</h2>        
      </div>
      
      <div className='chords'>
        <h2>SHOW YOURSELF DAMMIT</h2>
        {this.renderChordButtons(key, tonic, prog)}
      </div>

      <div className='controls'>
        <p>Coming Soon!</p>
        <button className='ctrls'>Record</button>
        <button className='ctrls'>Stop</button>
        <button className='ctrls'>Play</button>
      </div>

      <nav>
        <Link to='/select-progression'>
          <button className='nav'>Back</button>
        </Link> 
        <Link to='/save'>
        <button className='nav'>Save</button>
        </Link>        
      </nav>
      </>
    )
  }
}