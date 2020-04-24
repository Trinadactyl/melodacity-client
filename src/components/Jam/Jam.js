import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MusicProvider from '../../MusicContext';
//import musicStore from '../../musicStore';
import './Jam.css'

export default class Jam extends Component {
  static contextType = MusicProvider

  displayProg() {','
    const prog = this.context.prog
    if(prog.length < 1) {
      return 'Please choose a progression'
    }
    return prog.join('-')
  };

  displayKey() {
    const key = this.context.key
    if (key === '') {
      return 'Please choose a key'
    }
    return key
  }

  // renderChordButtons() {
  //   const majorScales = { 
  //     'A': ['A','B','Db','D','E','Gb','Ab','A'],
  //     'Ab': ['Ab','Bb','C','Db','Eb','F','G','Ab'],
  //     'B': ['B','Db','Eb','E','Gb','Ab','Bb','B'],
  //     'Bb': ['Bb','C','D','Eb','F','G','A','Bb'],
  //     'C': ['C','D','E','F','G','A','B','C'],
  //     'D': ['D','E','Eb','G','A','B','Bb','D'],
  //     'Db': ['Db','Eb','F','Gb','Ab','Bb','C','Db'],
  //     'E': ['E','Gb','Ab','A','B','Db','Fb','E'],
  //     'Eb': ['Eb','F','G','Ab','Bb','C','D','Eb'],
  //     'F': ['F','G','A','Bb','C','D','E','F'],
  //     'G': ['G','A','B','C','D','E','Gb','G'],
  //     'Gb': ['Gb','Ab','Bb','Cb','Db','Eb','F','Gb'],
  //   }
  //   const minorScales = { 
  //   'A': ['A','B','Db','D','E','Gb','Ab','A'],
  //   'Ab': ['Ab','Bb','C','Db','Eb','F','G','Ab'],
  //   'B': ['B','Db','Eb','E','Gb','Ab','Bb','B'],
  //   'Bb': ['Bb','C','D','Eb','F','G','A','Bb'],
  //   'C': ['C','D','E','F','G','A','B','C'],
  //   'D': ['D','E','Eb','G','A','B','Bb','D'],
  //   'Db': ['Db','Eb','F','Gb','Ab','Bb','C','Db'],
  //   'E': ['E','Gb','Ab','A','B','Db','Fb','E'],
  //   'Eb': ['Eb','F','G','Ab','Bb','C','D','Eb'],
  //   'F': ['F','G','A','Bb','C','D','E','F'],
  //   'G': ['G','A','B','C','D','E','Gb','G'],
  //   'Gb': ['Gb','Ab','Bb','Cb','Db','Eb','F','Gb'],
  // }
  //   if (this.context.tonic === 'minor') {
  //     const prog = minorScales.toArray()

  //     console.log(prog)
  //     return prog
  //   } else {
  //     const prog = majorScales.toArray()
  //     console.log(prog)
  //     return prog
  //   }
  //   return
  // }

  handleSetMelody() {
    const prog = this.context.prog
    const someScale = ['C','D','E','F','G','A','B','C']
    const someMelody = someScale[1]
    console.log('current prog', prog, typeof(prog))
    console.log('scale', someScale)
    console.log('melody', someMelody)
    this.context.setMelody(someMelody)
    //return
  }

    render() {
      //const melody = ['A', 'B', 'C']
      return (
        <>
        <div className='jam-header'>
          <h1>Let's Jam!</h1>
            <h2>Progression: {this.displayProg()}</h2>
            <h2>Key: {this.displayKey()}</h2>
        </div>
        <div className='chords'>
          {}
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