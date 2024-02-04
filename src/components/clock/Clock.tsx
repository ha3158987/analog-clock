import { useState, useEffect } from 'react';

import useClockStore from '@store/useClockStore';
import '@components/clock/clock.style.scss';
import Tooltip from '@components/tooltip/Tooltip';

function Clock() {
  const clockNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
  const { hour, minute, second, updateTimer } = useClockStore();
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);

  const handleMouseLeave = () => setIsVisible(false);

  useEffect(() => {
    const timerInterval = updateTimer;
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <div id="clock-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {clockNumbers.map((number) => <span className="clock-number">{number}</span>)}
        <span id='center' />
        <span id='hour-hand' style={{ transform: `rotate(${(360 / 12 * hour) + (30 / 60 * minute)}deg) translate(-50%, -50%)` }} />
        <span id='minute-hand' style={{ transform: `rotate(${360 / 60 * minute}deg) translate(-50%, -50%)` }} />
        <span id='second-hand' style={{ transform: `rotate(${360 / 60 * second}deg) translate(-50%, -50%)` }} />
      </div >
      <Tooltip show={isVisible} />
    </>
  );
}

export default Clock;
