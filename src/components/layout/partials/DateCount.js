import React, { useEffect, useState } from "react";

const futureDate = new Date(2022, 1, 1);
const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth() -1,
    day: diff.getUTCDate() - 2,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds()
  };
};



export default function DateCount() {
  const [diff, setDiff] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="split-item-content center-content-mobile reveal-from-left card-gray center-content">
        <h3 className="text-color-primary">Expected Wallet release</h3>
      <p className="b">
        <b><b className="text-color-primary">{diff.month}</b> Months, <b className="text-color-primary">{diff.day}</b> Days, <b className="text-color-primary">{diff.hour}</b> Hours, <b className="text-color-primary">{diff.minute}</b> Minutes, <b className="text-color-primary">{diff.second}</b> Seconds </b>
      </p>
    </div>
  )}

