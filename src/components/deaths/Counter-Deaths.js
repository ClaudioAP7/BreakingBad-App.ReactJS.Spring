import React from 'react'
import Counter from './Counter'

import styled from 'styled-components'

import '../../assets/scss/counter-deaths.scss'

const MainText = styled.div`
  margin: 3em;
  text-align: center;
`

const CounterDeaths = () => {
  return (
    <div className='counter'>
      <MainText>
        <h1>Total number of deaths in the series</h1>
        <Counter />
      </MainText>
    </div>
  )
}

export default CounterDeaths
