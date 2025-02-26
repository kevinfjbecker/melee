import { readFileSync } from 'fs'

const melee = JSON.parse(readFileSync('./melee.json'))

console.log(
    [... new Set(
        melee.plays.map(p =>
        {
            return p.actions.map(a =>
            {
                if(a === 'attack')
                    return `${a} ${p.locations.join(' ')}`
                return a
            })
        }).flat()
    )]
)