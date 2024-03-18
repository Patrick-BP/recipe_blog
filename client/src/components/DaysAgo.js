import React, { useState, useEffect } from 'react';

const DaysAgo = ({ date }) => {
  const [daysAgo, setDaysAgo] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const pastDate = new Date(date);

    const differenceInTime = currentDate.getTime() - pastDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    setDaysAgo(differenceInDays);
  }, [date]);

  return (
    <>
      {daysAgo !== null && (
        <>{daysAgo === 0 ? 'Today' : `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`}</>
      )}
    </>
  );
};

export default DaysAgo;