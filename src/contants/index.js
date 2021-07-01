const baseUrl = 'https://www.breakingbadapi.com/api/'
const characters = 'characters'
const quoteRandom = 'quote/random'
const counterDeath = 'death-count'

export const charactersGet = () => `${baseUrl}${characters}`
export const quoteRandomGet = () => `${baseUrl}${quoteRandom}`
export const counterDeathsGet = () => `${baseUrl}${counterDeath}`
