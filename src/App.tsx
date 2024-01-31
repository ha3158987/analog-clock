import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock';
import useClockStore, { UseClockStoreType } from './store/useClockStore';

function App() {
  // const [count, setCount] = useState(0);
  // const [time, setTime] = useState({
  //   hour: 0,
  //   minute: 0,
  //   second: 0
  // })
  const hour = useClockStore((state: UseClockStoreType) => state.hour);
  const minute = useClockStore((state: UseClockStoreType) => state.minute);
  const second = useClockStore((state: UseClockStoreType) => state.second);
  const updateCurrentTime = useClockStore((state: UseClockStoreType) => state.updateCurrentTime);


  const getCurrentTimer = () =>
    setInterval(() => {
      const now = new Date();

      updateCurrentTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
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
      <Clock>
        <div>{hour}</div>
        <div>{minute}</div>
        <div>{second}</div>
      </Clock>
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
