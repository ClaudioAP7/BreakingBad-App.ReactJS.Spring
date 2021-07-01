import { useState } from 'react'
import axios from 'axios'
import { charactersGet } from '../contants'

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [doneFetchCharacters, setDoneFetchCharacters] = useState(false)
  const [error, setError] = useState(false)

  async function getCharacters () {
    try {
      const response = await axios.get(charactersGet())
      const result = response.data
      setDoneFetchCharacters(true)
      setCharacters(result)
    } catch (error) {
      setDoneFetchCharacters(true)
      setError(true)
      console.log(`GetCharacter Service Error -> ${error}`)
    }
  }
  return { characters, doneFetchCharacters, error, getCharacters }
}

export default useGetCharacters
