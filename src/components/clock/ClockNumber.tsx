import React from 'react';

function ClockNumber({ number }: { number: number }) {
  return (
    <div className="clock-number">{number}</div>
  );
}

export default ClockNumber;
