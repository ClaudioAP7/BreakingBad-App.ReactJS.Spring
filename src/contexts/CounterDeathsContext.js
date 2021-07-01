import React, { createContext, useEffect } from 'react'
import useGetCounterDeaths from '../custom-hooks/useGetCounterDeaths'

export const CounterDeathsContext = createContext()

const CounterDeathsContextProvider = ({ children }) => {
  const { counterDeaths, doneFetchCounterDeaths, counterDuration, error, getCounterDeaths } = useGetCounterDeaths()

  useEffect(() => getCounterDeaths(), [])

  return (
    <CounterDeathsContext.Provider value={{ counterDeaths, doneFetchCounterDeaths, counterDuration, error }}>
      {children}
    </CounterDeathsContext.Provider>
  )
}

export default CounterDeathsContextProvider
