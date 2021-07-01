import React from 'react'
import Card from '../../components/common/Card'

import '../../assets/scss/home.scss'

const Home = () => (
  <>
    <div className='home-container'>
      <Card title='Characters' description='Actors and characters information' />
      <Card title='Deaths' description='Updated deaths counter' />
      <Card title='Quotes' description='Random quotes' />
    </div>
  </>
)

export default Home
