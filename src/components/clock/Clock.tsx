import { useEffect } from 'react';

import useClockStore from '@store/useClockStore';
import '@components/clock/clock.style.scss';

function Clock() {
  const {
    hour, minute, second, updateCurrentTime,
  } = useClockStore();

  const clockNumbers = Array.from({ length: 12 }, (_, index) => index + 1);

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
      {clockNumbers.map((number) => <span className="clock-number">{number}</span>)}
      <span id='center' />
      <span id='hour-hand' style={{ transform: `rotate(${(360 / 12 * hour) + (30 / 60 * minute)}deg) translate(-50%, -50%)` }} />
      <span id='minute-hand' style={{ transform: `rotate(${360 / 60 * minute}deg) translate(-50%, -50%)` }} />
      <span id='second-hand' style={{ transform: `rotate(${360 / 60 * second}deg) translate(-50%, -50%)` }} />
    </div>
  );
}

export default Clock;
