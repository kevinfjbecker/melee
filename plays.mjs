const fs = require('fs')

const melee = JSON.parse(fs.readFileSync('./melee.json'))

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