import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import charactersIco from '../../assets/images/ico/characters.png'
import deathsIco from '../../assets/images/ico/deaths.png'
import quotesIco from '../../assets/images/ico/quotes.png'

const Card = ({ title, description }) => {
  const icoListOptions = {
    Characters: charactersIco,
    Deaths: deathsIco,
    Quotes: quotesIco
  }

  const icono = icoListOptions[title]

  return (
    <Link className='subcard' to={`/${title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
      <div className='face face1'>
        <div className='content'>
          <img src={icono} alt={`${title} ico`} />
          <h3>{title}</h3>
        </div>
      </div>
      <div className='face face2'>
        <div className='content'>
          <p className='sub-text'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Card
