import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'github-calendar';

const GithubHeatmap = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, 'harshitIIITD');
    }
  }, []);

  return <div ref={calendarRef}></div>;
};

export default GithubHeatmap;
