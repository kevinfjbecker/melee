import { HIGH_GUARD, GameState } from "./GameState.mjs"

///////////////////////////////////////////////////////////////////////////////

export const stateToString = (GameState) => {
    
    const battleGround = [...'.....']  
    const wounds = [...'     ']

    const [warrior_a, warrior_b] = GameState.state.warriors

    if(warrior_a.position === warrior_b.position)
    {
        battleGround[warrior_a.position] =
            getWarriorString(warrior_a) + getWarriorString(warrior_b)
        wounds[warrior_a.position] =
            getWoundString(warrior_a) + getWoundString(warrior_b)
    }
    else
    {
        battleGround[warrior_a.position] = getWarriorString(warrior_a)
        wounds[warrior_a.position] = getWoundString(warrior_a)
        battleGround[warrior_b.position] = getWarriorString(warrior_b)
        wounds[warrior_b.position] = getWoundString(warrior_b)
    }

    return battleGround.join('') + '\n' + wounds.join('')
}

const getWarriorString = (warrior) =>
    warrior.stance === HIGH_GUARD ? 'Λ' : 'V'

const getWoundString = (warrior) =>
    warrior.wounds > 0 ? '•' : ' '
