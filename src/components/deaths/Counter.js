import React, { useContext } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import { CounterDeathsContext } from '../../contexts/CounterDeathsContext'

const Counter = () => {
  const { counterDeaths } = useContext(CounterDeathsContext)
  return (
    <Spring
      from={{ number: 0 }}
      to={{ number: counterDeaths }}
      delay='1000'
      config={config.molasses}
    >
      {props => <div>{props.number.toFixed()}</div>}
    </Spring>
  )
}

export default Counter
