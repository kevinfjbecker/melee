import { HIGH_GUARD, LOW_GUARD } from "./GameState.mjs"

const resolve = (state, plays) =>
{
    console.log(`warior in ${
        state.warriors[0].stance === HIGH_GUARD ? 'high guard' : 'low guard'
    } playing ${
        plays[0].name
    } ${
        resolutionOrderInWords(getResolutionOrder(state0, plays0))
    } warior in ${
        state.warriors[1].stance === HIGH_GUARD ? 'high guard' : 'low guard'
    } playing ${
        plays[1].name
    }`)
}

///////////////////////////////////////////////////////////////////////////////

/**
 * @returns 0, 1 or 'S'
 */
const getResolutionOrder = (state, plays) =>
{
    if(areBothAttacks(plays)) return 'S'
    if(isMove(plays[0] && isAttack(plays[1]))) return 0
    if(isAttack(plays[0]) && isMove(plays[1])) return 1

    // both are moves

    if(
        state.warriors[0].stance === HIGH_GUARD &&
        state.warriors[1].stance === LOW_GUARD
    ) return 0
    if(
        state.warriors[1].stance === HIGH_GUARD &&
        state.warriors[0].stance === LOW_GUARD
    ) return 1
}

const isMove = ({type}) => type === 'move' 

const areBothAttacks = (plays) =>
    isAttack(plays[0]) && isAttack(plays[1])

const isAttack = ({type}) =>
{
    return type === 'attack' || type === 'special attack'
}

///////////////////////////////////////////////////////////////////////////////

const plays0 = [
    {
        "name": "low attack",
        "actions": [
            "attack"
        ],
        "locations": [
            "+1"
        ],
        "position": "low guard",
        "type": "attack"
    },
    {
        "name": "advance",
        "actions": [
            "forward 1"
        ],
        "type": "move"
    }
]

const state0 = {
    warriors: [
        { position: 0, stance: HIGH_GUARD, wounds: 1},
        { position: 4, stance: LOW_GUARD, wounds: 0}
    ]
}

// const resolutionOrder = getResolutionOrder(state0, plays0)
// console.log(`${resolutionOrderInWords(resolutionOrder)}`)

const resolutionOrderInWords = (resolutionOrderResult) =>
{
    switch(resolutionOrderResult)
    {
        case(0): return 'resolves before'
        case(1): return 'resolves after'
        case('S'): return 'resolves simultaneously with'
        default: return 'ERROR: unknown resolutionOrder '
    }
}

resolve(state0, plays0)
