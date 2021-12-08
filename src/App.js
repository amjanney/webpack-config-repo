import React from "react"
import { hot } from "react-hot-loader"
import Index from './view/index'
const App = () => {
  return (
    <div className="app">
      <h1>hello react!</h1>
      <Index />
    </div>
  )
}

export default hot(module)(App)