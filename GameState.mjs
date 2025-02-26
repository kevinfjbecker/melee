
export const HIGH_GUARD = 0
export const LOW_GUARD = 1

export class GameState
{
    constructor(stateObject = getBasicStartState())
    {
        this.state = stateObject
    }
}

export const getBasicStartState = () =>
({
    warriors: [
        {
            position: 0,
            stance: HIGH_GUARD,
            wounds: 0
        },
        {
            position: 4,
            stance: HIGH_GUARD,
            wounds: 0
        }
    ]
})

export const getRandomState = () => ({
    warriors: getRandomPositions().map((p)=>
    ({
        position: p,
        stance: Math.round(Math.random()),
        wounds: Math.round(Math.random())
    }))
})

/**
 * Random warrior positions
 * @returns [int, int]
 * Contraint array[0] <= array[1]
 */
const getRandomPositions = () =>
{
    let x = 4
    let y = 0
    while(x > y)
    {
        x = Math.floor( Math.random( ) * 5 )
        y = Math.floor( Math.random( ) * 5 )
    }
    return [x, y]
}