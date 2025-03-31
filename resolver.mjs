import { stat } from "fs"
import { GameState, getRandomState, HIGH_GUARD, LOW_GUARD } from "./GameState.mjs"
import { allActions } from "./plays.mjs"
import { stateToString } from "./StringViewer.mjs"
import { getRandomArrayElementFunction } from "./util.mjs"

export const resolve = (state, plays) => {}

///////////////////////////////////////////////////////////////////////////////

export const resolveAction = (state, action, warrior) =>
{
    console.log(stateToString(state))
    console.log(action)
    const nextState = resolveMove(state, action, warrior)
    console.log(stateToString(nextState))
}

const resolveMove = (state, action, warrior) =>
{
    const warriorIndex = state.state.warriors.indexOf(warrior0)
    console.log(JSON.stringify(state)) // debug
    state.state.warriors[warriorIndex].position += 2
    return state
}

const getRandomAction = getRandomArrayElementFunction(allActions)

const state0 = new GameState()
const action0 = 'forward 2'
const warrior0 = state0.state.warriors[0]
resolveAction(state0, action0, warrior0)

///////////////////////////////////////////////////////////////////////////////

/**
 * @returns 0, 1 or 'S'
 */
export const getResolutionOrder = (state, plays) => {

    if (areBothAttacks(plays)) return 'S'

    if (isMove(plays[0]) && isAttack(plays[1])) return 0

    if (isAttack(plays[0]) && isMove(plays[1])) return 1

    ///////////////////////////////////////////////////////// both are moves //

    if (
        state.warriors[0].stance === HIGH_GUARD &&
        state.warriors[1].stance === LOW_GUARD
    ) return 0

    if (
        state.warriors[1].stance === HIGH_GUARD &&
        state.warriors[0].stance === LOW_GUARD
    ) return 1

    /////////////////////////////////////////////////// both are same stance //

    ////////////////////// forward 2 > move forward/back 1 > change position //

    if (
        plays[0].actions[0] === 'forward 2' &&
        plays[1].actions[0] !== 'forward 2'
    ) return 0

    if (
        plays[1].actions[0] === 'forward 2' &&
        plays[0].actions[0] !== 'forward 2'
    ) return 1

    ////////////////////////////////// move forward/back 1 > change position //

    if (
        (plays[0].actions[0] === 'forward 1' || plays[0].actions[0] === 'back 1') &&
        (plays[1].actions[0] !== 'forward 1' && plays[1].actions[0] !== 'back 1')
    ) return 0

    if (
        (plays[1].actions[0] === 'forward 1' || plays[1].actions[0] === 'back 1') &&
        (plays[0].actions[0] !== 'forward 1' && plays[0].actions[0] !== 'back 1')
    ) return 1

    ////////////////////////////////////////////// both are same move action //

    return 'S'

}

const isMove = ({ type }) => type === 'move'

const areBothAttacks = (plays) =>
    isAttack(plays[0]) && isAttack(plays[1])

const isAttack = ({ type }) => {
    return type === 'attack' || type === 'special attack'
}

///////////////////////////////////////////////////////////////////////////////
