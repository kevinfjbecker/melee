import * as fs from 'fs'

import { getRandomArrayElementFunction } from './util.mjs'

///////////////////////////////////////////////////////////////////////////////

const allPlays = JSON.parse(fs.readFileSync('./melee.json')).plays

///////////////////////////////////////////////////////////////////////////////

export const allActions = [... new Set(
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

const getRandomPlay = getRandomArrayElementFunction(allPlays)

export const getRandomPlays = () =>
    [
        getRandomPlay(),
        getRandomPlay()
    ]

///////////////////////////////////////////////////////////////////////////////

export const  getPlayByName = (name) =>
{
    return allPlays.find(p => p.name === name)
}