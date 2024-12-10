
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