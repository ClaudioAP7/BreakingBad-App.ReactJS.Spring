import React from 'react'
import { useTransition, animated } from 'react-spring'
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/Header'
import useRouter from './custom-hooks/useRouter'
import Home from './components/common/Home'
import CharactersContextProvider from './contexts/CharactersContext'
import CounterDeathsContextProvider from './contexts/CounterDeathsContext'
import QuoteContextProvider from './contexts/QuoteContext'
import NotFound from './components/common/NotFound'

import Characters from './components/characters/Characters'
import Quotes from './components/quotes/Quotes'
import CounterDeaths from './components/deaths/Counter-Deaths'

import '../public/favicon.ico'
import './assets/scss/layout.scss'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

/* const Characters = lazy(() => import('./components/characters/Characters'))
const Quotes = lazy(() => import('./components/quotes/Quotes'))
const CounterDeaths = lazy(() => import('./components/deaths/Counter-Deaths')) */

const App = () => {
  const { location } = useRouter()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(-25%, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    leave: { opacity: 0, height: 0, transform: 'translate3d(25%, 0px, 0px)' }
  })

  return (
    <Container>
      <Header />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/characters'>
              <CharactersContextProvider>
                <Characters />
              </CharactersContextProvider>
            </Route>
            <Route exact path='/deaths'>
              <CounterDeathsContextProvider>
                <CounterDeaths />
              </CounterDeathsContextProvider>
            </Route>
            <Route exact path='/quotes'>
              <QuoteContextProvider>
                <Quotes />
              </QuoteContextProvider>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </animated.div>
      ))}
    </Container>
  )
}

export default App
