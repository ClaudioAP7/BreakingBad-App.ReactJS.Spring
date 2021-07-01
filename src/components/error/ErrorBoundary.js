import React from 'react'

export const withError = (Component) => {
  class ErrorBoundary extends React.Component {
        state = {
          hasError: false,
          message: ''
        }

        componentDidCatch (error) {
          this.setState({
            hasError: true,
            message: error.message
          })
        }

        render () {
          if (this.state.hasError) {
            return (
              <h1>{this.state.message}</h1>
            )
          }
          return <Component {...this.props} />
        }
  }
  return ErrorBoundary
}
