import { useState } from 'react'
import './App.css'

import Stone from "stone"
import ChicoBuarque from "chico-buarque"

interface IContext {
  jwt?: string
}

function App() {
  const [context, setContext] = useState<IContext>({})

  const setJwt = () => {
    setContext({
      jwt: "<JWT TOKEN HERE>"
    })
  }

  const unsetJwt = () => {
    setContext({})
  }

  return (
    <>
      <div className='auth'>
        <button onClick={setJwt}>Login</button>
        <button onClick={unsetJwt}>Logout</button>
      </div >
      <div >
        <div className='service'>
          <Stone {...context} />
        </div>
        <div className='service'>
          <ChicoBuarque {...context} />
        </div>
      </div>
    </>
  )
}

export default App
