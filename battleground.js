const state = {
    warriors: [
        { position: 0, stance: 0},
        { position: 4, stance: 1}
    ]
}

const stateToString = (stateObject) => {
    
    const battleGround = [...'.....']    
    const [warrior_a, warrior_b] = stateObject.warriors

    battleGround[warrior_a.position] = warrior_a.stance === 0 ? 'Λ' : 'V'
    battleGround[warrior_b.position] = warrior_b.stance === 0 ? 'Λ' : 'V'
    
    return battleGround.join('')
}

// console.log('Λ...V')
console.log(stateToString(state))


