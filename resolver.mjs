import * as fs from 'fs'

import { getRandomState, HIGH_GUARD, LOW_GUARD } from "./GameState.mjs"

const resolve = (state, plays) => {
    console.log(`warior in ${state.warriors[0].stance === HIGH_GUARD ? 'high guard' : 'low guard'
        } playing ${plays[0].name
        } ${resolutionOrderInWords(getResolutionOrder(state0, plays))
        } warior in ${state.warriors[1].stance === HIGH_GUARD ? 'high guard' : 'low guard'
        } playing ${plays[1].name
        }`)
}

///////////////////////////////////////////////////////////////////////////////

/**
 * @returns 0, 1 or 'S'
 */
const getResolutionOrder = (state, plays) => {

    if (areBothAttacks(plays)) return 'S'

    if (isMove(plays[0] && isAttack(plays[1]))) return 0

    if (isAttack(plays[0]) && isMove(plays[1])) return 1

    // both are moves

    if (
        state.warriors[0].stance === HIGH_GUARD &&
        state.warriors[1].stance === LOW_GUARD
    ) return 0
    if (
        state.warriors[1].stance === HIGH_GUARD &&
        state.warriors[0].stance === LOW_GUARD
    ) return 1

    // both are same stance

    // forward 2 > move forward/back 1 > change stance

    if (
        plays[0].action === 'forward 2' &&
        plays[1].action !== 'forward 2'
    ) return 0
    if (
        plays[1].action === 'forward 2' &&
        plays[0].action === 'forward 2'
    ) return 1
    
    // move forward/back 1 > change stance
    
    if (
        (plays[0].action === 'forward 1' || plays[0].action === 'back 1') &&
        (plays[1].action !== 'forward 1' && plays[1].action !== 'back 1')
    ) return 0
    if (
        (plays[1].action === 'forward 1' || plays[1].action === 'back 1') &&
        (plays[0].action !== 'forward 1' && plays[0].action !== 'back 1')
    ) return 1

    // both are same move action

    return 'S'

}

const isMove = ({ type }) => type === 'move'

const areBothAttacks = (plays) =>
    isAttack(plays[0]) && isAttack(plays[1])

const isAttack = ({ type }) => {
    return type === 'attack' || type === 'special attack'
}

///////////////////////////////////////////////////////////////////////////////

const allPlays = JSON.parse(fs.readFileSync('./melee.json')).plays

const getRandomPlaysFunction = (plays) => () =>
    [
        plays[Math.floor(Math.random() * plays.length)],
        plays[Math.floor(Math.random() * plays.length)]
    ]

const getRandomPlays = getRandomPlaysFunction(allPlays)

const state0 = {
    warriors: [
        { position: 0, stance: HIGH_GUARD, wounds: 1 },
        { position: 4, stance: HIGH_GUARD, wounds: 0 }
    ]
}

const resolutionOrderInWords = (resolutionOrderResult) => {
    switch (resolutionOrderResult) {
        case (0): return 'resolves before'
        case (1): return 'resolves after'
        case ('S'): return 'resolves simultaneously with'
        default: return 'ERROR: unknown resolutionOrder '
    }
}

const n = 60
for(let i = 0; i < n; i++)
{
    resolve(getRandomState(), getRandomPlays())
}
