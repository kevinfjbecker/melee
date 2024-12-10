const { platform } = require("os")

const resolve = (state, plays) =>
{
    
}

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
        state.wariors[0].stance === HIGH_GUARD &&
        state.wariors[1].stance === LOW_GUARD
    ) return 0
    if(
        state.wariors[1].stance === HIGH_GUARD &&
        state.wariors[0].stance === LOW_GUARD
    ) return 1
}

const isMove = ({type}) => type === 'move' 

const areBothAttacks = (plays) =>
    isAttack(plays[0]) && isAttack(plays[1])

const isAttack = ({type}) =>
{
    return type === 'attack' || type === 'special attack'
}