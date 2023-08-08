import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Welcome to ONLYGAINZ</h1>
      <h2><em>The only workout app that is written in ALL CAPITALS.</em></h2>
      <img src="https://th.bing.com/th/id/R.76db349840bc7be8df1afb93f8100007?rik=HU8MWEoMsGZc1w&riu=http%3a%2f%2fgenerationiron.com%2fwp-content%2fuploads%2f2014%2f11%2fdolph-lundgren-756582929.jpg&ehk=OdfHFbFi8nhLJtEY49%2bnE5YPP4sI%2f4GCX3dbmDCIkCc%3d&risl=&pid=ImgRaw&r=0" height="600"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
