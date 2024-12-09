
const HIGH_GUARD = 0
const LOW_GUARD = 1

const state0 = {
    warriors: [
        { position: 0, stance: HIGH_GUARD, wounds: 1},
        { position: 4, stance: LOW_GUARD, wounds: 0}
    ]
}

const state1 = {
    warriors: [
        { position: 2, stance: 0, wounds: 0},
        { position: 2, stance: 1, wounds: 1}
    ]
}

const getRandomState = () => ({
    warriors: [
        {
            position: Math.floor(Math.random() * 4),
            stance: Math.round(Math.random()),
            wounds: Math.round(Math.random())
        },
        {
            position: Math.floor(Math.random() * 4),
            stance: Math.round(Math.random()),
            wounds: Math.round(Math.random())
        }
    ]
})

///////////////////////////////////////////////////////////////////////////////

const stateToString = (stateObject) => {
    
    const battleGround = [...'.....']  
    const wounds = [...'     ']

    const [warrior_a, warrior_b] = stateObject.warriors

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

const getWarriorString = (warrior) => warrior.stance === 0 ? 'Λ' : 'V'
const getWoundString = (warrior) => warrior.wounds > 0 ? '•' : ' '

///////////////////////////////////////////////////////////////////////////////

// console.log('Λ...V')
console.log(stateToString(state0))

// console.log('..ΛV..')
console.log(stateToString(state1))

// console.log(???)
console.log(stateToString(getRandomState()))
