import React, { createContext, useEffect } from 'react'
import useGetCharacters from '../custom-hooks/useGetCharacters'

export const CharactersContext = createContext()

const CharactersContextProvider = ({ children }) => {
  const { characters, doneFetchCharacters, error, getCharacters } = useGetCharacters()

  useEffect(() => getCharacters(), [])

  return (
    <CharactersContext.Provider value={{ characters, doneFetchCharacters, error }}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
