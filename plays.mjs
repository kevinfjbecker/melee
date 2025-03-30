import * as fs from 'fs'

///////////////////////////////////////////////////////////////////////////////

const allPlays = JSON.parse(fs.readFileSync('./melee.json')).plays

///////////////////////////////////////////////////////////////////////////////

export const listPlays = () =>
    [... new Set(
        allPlays.map(p =>
        {
            return p.actions.map(a =>
            {
                if(a === 'attack')
                    return `${a} ${p.locations.join(' ')}`
                return a
            })
        }).flat()
    )]

///////////////////////////////////////////////////////////////////////////////

export const getRandomPlays = () =>
    [
        allPlays[Math.floor(Math.random() * allPlays.length)],
        allPlays[Math.floor(Math.random() * allPlays.length)]
    ]

///////////////////////////////////////////////////////////////////////////////

export const  getPlayByName = (name) =>
{
    return allPlays.find(p => p.name === name)
}