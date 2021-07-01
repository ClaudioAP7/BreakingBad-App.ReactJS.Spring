import { useState } from 'react'
import { counterDeathsGet } from '../contants'
import axios from 'axios'

const useGetCounterDeaths = () => {
  const [counterDeaths, setCounterDeaths] = useState(0)
  const [doneFetchCounterDeaths, setDoneFetchCounterDeaths] = useState(false)
  const [counterDuration, setCounterDuration] = useState('')
  const [error, setError] = useState(false)

  async function getCounterDeaths () {
    try {
      const response = await axios.get(counterDeathsGet())
      const result = response.data[0]
      setDoneFetchCounterDeaths(true)
      setCounterDeaths(result.deathCount)
      setCounterDuration('2')
    } catch (error) {
      setDoneFetchCounterDeaths(true)
      setError(true)
      console.log(`GetCounterDeaths Service Error -> ${error}`)
    }
  }
  return { counterDeaths, doneFetchCounterDeaths, counterDuration, error, getCounterDeaths }
}

export default useGetCounterDeaths
