import React, { useEffect, useState } from 'react';

const TopLanguages = () => {
  const [languages] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // Fetch language data from GitHub API
  }, []);
  
  return (
    <div>
      <h3>Top Languages</h3>
      <ul>
        {Object.entries(languages).map(([lang, count]) => (
          <li key={lang}>{lang}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopLanguages;