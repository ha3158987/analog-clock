import { useEffect } from 'react';

import useClockStore from '@store/useClockStore';
import '@components/clock/clock.style.scss';

import ClockNumber from '@components/clock/ClockNumber';

function Clock() {
  const {
    hour, minute, second, updateCurrentTime,
  } = useClockStore();

  const clockNumber = Array.from({ length: 12 }, (_, index) => index + 1);

  const getCurrentTimer = () => setInterval(() => {
    const now = new Date();
    updateCurrentTime({
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    });
  }, 1000);

  useEffect(() => {
    const timerId = getCurrentTimer();
    return () => clearInterval(timerId);
  }, []);

  return (
    <div id="clock-wrapper">
      {clockNumber.map((el) => <ClockNumber number={el} />)}
      <div id='hour-hand'>{hour}</div>
      <div id='minute-hand'>{minute}</div>
      <div id='second-hand'>{second}</div>
    </div>
  );
}

export default Clock;
