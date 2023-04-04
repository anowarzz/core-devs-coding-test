import { useEffect, useState } from "react";

export default function Counter() {

// Calculating the total milliseconds for each second, minute, hour, and day
  const sec = 1000,
  min = sec * 60,
  hour = min * 60,
  day = hour * 24;

  // State to store all the values of the clock - seconds, minutes, hours and days
  let [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0
  });


  // useEffect hook to run the code once when the component mounts every time
  useEffect(() => {
    
 // Set Interval function to run the clock in every one second 
    let clockInterval = setInterval(() => {
 
// Getting the current time and the time when the count down will be finished (in milliseconds)
      const end = new Date("April 15, 2023 12:00:00").getTime();
      const current = new Date().getTime();
   
// Calculating the total remaining time (in milliseconds) between current and the ending time  
      const remaining = end-current;


//Converting the total remaining milliseconds into days, hours, minute and seconds
      let dd = Math.floor(remaining / day);
      let hh = Math.floor((remaining % day) / hour);
      let mm = Math.floor((remaining % hour) / min);
      let ss = Math.floor((remaining % min) / sec);

// updating the clock data with new time values 
      setClockData(previous => {
        return { ...previous, dd, hh, mm, ss };
      });
    }, 1000);

// Cleanup function to clear the interval 
    return () => {
      clearInterval(clockInterval);
    }
  }, []);

  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
        <span className="s2-txt1">Days</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
        <span className="s2-txt1">Hours</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
        <span className="s2-txt1">Minutes</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
        <span className="s2-txt1">Seconds</span>
      </div>
    </div>
  );
}