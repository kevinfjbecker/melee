const state0 = {
    warriors: [
        { position: 0, stance: 0},
        { position: 4, stance: 1}
    ]
}

const state1 = {
    warriors: [
        { position: 2, stance: 0},
        { position: 2, stance: 1}
    ]
}

///////////////////////////////////////////////////////////////////////////////

const stateToString = (stateObject) => {
    
    const battleGround = [...'.....']    
    const [warrior_a, warrior_b] = stateObject.warriors

    if(warrior_a.position === warrior_b.position)
    {
        battleGround[warrior_a.position] =
            getWarriorString(warrior_a) + getWarriorString(warrior_b)
    }
    else
    {
        battleGround[warrior_a.position] = getWarriorString(warrior_a)
        battleGround[warrior_b.position] = getWarriorString(warrior_b)
    }

    return battleGround.join('')
}

const getWarriorString = (warrior) => warrior.stance === 0 ? 'Λ' : 'V'

///////////////////////////////////////////////////////////////////////////////

// console.log('Λ...V')
console.log(stateToString(state0))

// console.log('..ΛV..')
console.log(stateToString(state1))
