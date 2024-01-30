import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0
  })

  const getCurrentTimer = () =>
    setInterval(() => {
      const now = new Date();

      setTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: new Date().getSeconds()
      })

    }, 1000);


  useEffect(() => {
    const timerId = getCurrentTimer();

    return () => clearInterval(timerId);
  }, [])


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
      <h1>This is an analogue clock</h1>
      <div>
        <div>{time.hour}</div>
        <div>{time.minute}</div>
        <div>{time.second}</div>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
