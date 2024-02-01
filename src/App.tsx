import { useEffect } from 'react'
import './App.css'
import Clock from '@components/Clock';
import useClockStore, { UseClockStoreType } from '@store/useClockStore';

function App() {
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
      <h1>This is an analogue clock</h1>
      <Clock>
        <div>
          <div>{hour}</div>
          <div>{minute}</div>
          <div>{second}</div>
        </div>
      </Clock>
    </>
  )
}

export default App
