import { useState } from 'react'
import axios from 'axios'
import { quoteRandomGet } from '../contants'

const useGetQuoteRandom = () => {
  const [quoteRandom, setQuoteRandom] = useState([])
  const [doneFetchQuoteRandom, setDoneFetchQuoteRandom] = useState(false)
  const [error, setError] = useState(false)

  async function getQuoteRandom () {
    try {
      const response = await axios.get(quoteRandomGet())
      const result = response.data
      setDoneFetchQuoteRandom(true)
      setQuoteRandom(result)
    } catch (error) {
      setDoneFetchQuoteRandom(true)
      setError(true)
      console.log(`GetCounterDeaths Service Error -> ${error}`)
    }
  }
  return { quoteRandom, doneFetchQuoteRandom, error, getQuoteRandom }
}

export default useGetQuoteRandom
