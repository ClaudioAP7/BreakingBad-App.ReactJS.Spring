import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/scss/quotes.scss'

const Quote = ({ quote, author }) => (
  <>
    <div className='bubble box'>
      <blockquote>{quote}</blockquote>
      <div />
      <cite>{author}</cite>{' '}
    </div>
  </>
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Quote
