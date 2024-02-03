import React from 'react';
import '@components/clock/clock.style.scss';

function ClockNumber({ number }: { number: number }) {
  return (
    <span className="clock-number">{number}</span>
  );
}

export default ClockNumber;
