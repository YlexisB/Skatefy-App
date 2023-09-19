import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date("April 23, 2024 18:00:00 PDT");
      const now = new Date();
      const timeLeft = endTime - now;

      if (timeLeft > 0) {
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesLeft = Math.floor(
          (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setDays(daysLeft < 10 ? `0${daysLeft}` : daysLeft.toString());
        setHours(hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft.toString());
        setMinutes(
          minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft.toString()
        );
        setSeconds(
          secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft.toString()
        );
      }
    };

    calculateTimeLeft();
    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div id="timer">
      <div id="days">
        {days}
        <span>Days</span>
      </div>
      <div id="hours">
        {hours}
        <span>Hours</span>
      </div>
      <div id="minutes">
        {minutes}
        <span>Minutes</span>
      </div>
      <div id="seconds">
        {seconds}
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
