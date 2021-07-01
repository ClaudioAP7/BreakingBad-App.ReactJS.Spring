import React, { createContext, useEffect } from 'react'
import useGetQuoteRandom from '../custom-hooks/useGetQuote'

export const QuoteContext = createContext()

const QuoteContextProvider = ({ children }) => {
  const { quoteRandom, doneFetchQuoteRandom, error, getQuoteRandom } = useGetQuoteRandom()

  useEffect(() => getQuoteRandom(), [])

  return (
    <QuoteContext.Provider value={{ quoteRandom, doneFetchQuoteRandom, getQuoteRandom, error }}>
      {children}
    </QuoteContext.Provider>
  )
}

export default QuoteContextProvider
