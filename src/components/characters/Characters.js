import React, { Fragment, useContext } from 'react'
import { CharactersContext } from '../../contexts/CharactersContext'
import Loader from '../common/Loader'
import Character from './Character'
import { withError } from '../error/ErrorBoundary'

import '../../assets/scss/characters.scss'

const Characters = () => {
  const { characters, doneFetchCharacters } = useContext(CharactersContext)
  return (
    <>
      <h1>Characters / Cast</h1>
      <br />
      {doneFetchCharacters
        ? (
          <div className='container'>
            {characters.map((character) => (
              <Character
                key={character.char_id}
                image={character.img}
                name={character.name}
                portrayed={character.portrayed}
              />
            ))}
          </div>
          )
        : (
          <Loader />
          )}
    </>
  )
}

export default withError(Characters)
