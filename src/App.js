import React from "react"
import  ReactDOM  from "react-dom/client"

import React from 'react'
import Body from "./Component/Body"

const App = () => {
  return (
    <div><Body/></div>
  )
}

export default App

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)