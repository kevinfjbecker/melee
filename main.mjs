import { GameState, getRandomState } from './GameState.mjs'
import { stateToString } from './StringViewer.mjs'

///////////////////////////////////////////////////////////////////////////////

// console.log('Λ...Λ')
console.log(stateToString(new GameState()))

// console.log(???)
console.log(stateToString(new GameState(getRandomState())))