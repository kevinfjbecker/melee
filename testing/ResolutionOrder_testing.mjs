import { getPlayByName, getRandomPlays } from '../plays.mjs'
import { getRandomState, HIGH_GUARD, LOW_GUARD } from '../GameState.mjs'
import { getResolutionOrder } from '../resolver.mjs'

const resolutionOrderInWords = (resolutionOrderResult) => {
    switch (resolutionOrderResult) {
        case (0): return 'resolves before'
        case (1): return 'resolves after'
        case ('S'): return 'resolves simultaneously with'
        default: return 'ERROR: unknown resolutionOrder '
    }
}

const printResolutionOrder = (state, plays) => {
    console.log(`warior in ${
        state.warriors[0].stance === HIGH_GUARD ? 'high guard' : 'low guard'
    } playing ${plays[0].name
    } ${
        resolutionOrderInWords(getResolutionOrder(state, plays))
    } warior in ${
        state.warriors[1].stance === HIGH_GUARD ? 'high guard' : 'low guard'
    } playing ${
        plays[1].name
    }`)
}

///////////////////////////////////////////////////////////////////////////////

/**
 * Staged example
 */
// const state0 = {
//     warriors: [
//         { position: 0, stance: LOW_GUARD, wounds: 1 },
//         { position: 4, stance: HIGH_GUARD, wounds: 0 }
//     ]
// }
// const plays0 = [
//     getPlayByName('dash'),
//     getPlayByName('change position'),
// ]
// printResolutionOrder(state0, plays0)

/**
 * n random examples
 */
// const n = 60
// for(let i = 0; i < n; i++)
// {
//     printResolutionOrder(getRandomState(), getRandomPlays())
// }

/**
 * One random example
 */
printResolutionOrder(getRandomState(), getRandomPlays())

///////////////////////////////////////////////////////////////////////////////
