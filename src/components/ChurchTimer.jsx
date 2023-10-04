import React, { useState, useEffect } from 'react';

const ChurchTimer = () => {
  // Initialize the state for the countdown timer
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown timer every second
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  // Function to calculate the time remaining until the next Sunday at 11:30 AM
  function calculateTimeRemaining() {
    const now = new Date();
    const sunday = new Date(now);

    // Find the next Sunday
    sunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    sunday.setHours(11, 30, 0, 0);

    let timeDifference = sunday - now;

    if (timeDifference <= 0) {
      // If today is Sunday or the time has passed, calculate for the next Sunday
      sunday.setDate(sunday.getDate() + 7);
      timeDifference = sunday - now;
    }

    const days = Math.floor(timeDifference / 86400000);
    const hours = Math.floor((timeDifference % 86400000) / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Format the timer values
  const formatTimerValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="bg-white text-blue-800 h-[600px] mt-[32rem] md:mt-[22rem] md:h-[400px] flex justify-center items-center ">
      <div className="text-center items-center mx-auto  ">
        <h2 className="text-4xl font-bold mb-4"> Next Service Begins:</h2>

        <div className="text-6xl text-blue-800 my-5 ">
          <div className="flex justify-between gap-12 ">
            <div className="timer-item">
              <span className=''>{formatTimerValue(timeRemaining.days)}</span>
              <div className="text-sm ">Days</div>
            </div>
            <div className="timer-item">
              <span>{formatTimerValue(timeRemaining.hours)}</span>
              <div className="text-sm">Hours</div>
            </div>
            <div className="timer-item">
              <span>{formatTimerValue(timeRemaining.minutes)}</span>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="timer-item">
              <span>{formatTimerValue(timeRemaining.seconds)}</span>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
        <button className="text-sm my-4 rounded-full cursor-pointer">
          INVITE FRIENDS & FAMILY
        </button>
      </div>
    </div>
  );
};

export default ChurchTimer;
