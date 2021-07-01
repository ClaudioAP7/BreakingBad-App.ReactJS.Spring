import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ key, image, name, portrayed }) => (
  <div key={key} className='content-info'>
    <div className='card'>
      <div className='img-box'>
        <img src={image} alt={name} />
      </div>
      <div className='content'>
        <h2>
          {name}
          <br />
          <span>{portrayed}</span>
        </h2>
      </div>
    </div>
  </div>
)

Character.propTypes = {
  key: PropTypes.number,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  portrayed: PropTypes.string.isRequired
}

export default Character
