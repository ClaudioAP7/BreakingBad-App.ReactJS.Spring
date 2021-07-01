/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { QuoteContext } from '../../contexts/QuoteContext'
import Quote from './Quote'
import Loader from '../common/Loader'

import '../../assets/scss/quotes.scss'

const Quotes = () => {
  const { quoteRandom, doneFetchQuoteRandom, getQuoteRandom } = useContext(QuoteContext)

  return (
    <>
      <h1>Random Quotes</h1>
      <div id='buttons' onClick={() => getQuoteRandom()}>
        <a className='btn yellow'>Random Quotes</a>
      </div>

      {doneFetchQuoteRandom
        ? (
            quoteRandom.map((random) => {
              const { quote_id, quote, author } = random
              return <Quote key={quote_id} quote={quote} author={author} />
            })
          )
        : (
          <Loader />
          )}
    </>
  )
}

export default Quotes
