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

  const getHourDegree = (360 / 12 * hour) + (30 / 60 * minute)

  const getMinuteDegree = (360 / 60 * minute);

  const getSecondDegree = (360 / 60 * second);

  useEffect(() => {
    const timerInterval = updateTimer();
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
        <span id='hour-hand' style={{ transform: `rotate(${getHourDegree}deg ) translate(-50%, -100%)` }} />
        <span id='minute-hand' style={{ transform: `rotate(${getMinuteDegree}deg) translate(-50%, -100%)` }} />
        <span id='second-hand' style={{ transform: `rotate(${getSecondDegree}deg) translate(-50%, -100%)` }} />
      </div >
      <Tooltip show={isVisible} />
    </>
  );
}

export default Clock;
