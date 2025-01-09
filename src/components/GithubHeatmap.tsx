import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

interface GitHubHeatmapProps {
  username: string;
  accessToken: string;
}

const GitHubHeatmap = ({ username, accessToken }: GitHubHeatmapProps) => {
  const [contributions, setContributions] = useState<Array<{ date: string; count: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // GitHub GraphQL query
        const query = `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query, variables: { username } }),
        });
        const result = await response.json();
        const contributionDays = result.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap((week: { contributionDays: { contributionCount: number; date: string }[] }) => week.contributionDays)
          .map((day: { contributionCount: number; date: string }) => ({
            date: day.date,
            count: day.contributionCount,
          }));

        setContributions(contributionDays);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch GitHub contributions");
        setLoading(false);
      }
    };

    if (username && accessToken) {
      fetchContributions();
    }
  }, [username, accessToken]);

  // Updated color scheme to match dark theme
  const getCellColor = (count: number) => {
    if (count === 0) return 'bg-slate-800';
    if (count <= 2) return 'bg-indigo-900';
    if (count <= 4) return 'bg-indigo-700';
    if (count <= 6) return 'bg-indigo-500';
    return 'bg-indigo-400';
  };

  // Group contributions by week
  const weeks: any[][] = [];
  let currentWeek: any[] = [];
  contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Determine heatmap size
  const heatmapSize = weeks.length * 30; 
  return (
    <section className="min-h-screen bg-slate-900 relative py-20">
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
        style={{ backgroundSize: `${heatmapSize}px ${heatmapSize}px` }}
      >
        <h2 className="text-center text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          GITHUB CONTRIBUTIONS
        </h2>
        
        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8">
          {loading ? (
            <div className="text-center text-gray-300">Loading contributions...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Month Labels */}
              <div className="flex space-x-4 mb-2">
                {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month) => (
                  <span key={month} className="text-sm text-gray-300">
                    {month}
                  </span>
                ))}
              </div>
              
              {/* Heatmap Grid */}
              <div className="flex">
                {/* Day Labels */}
                <div className="flex flex-col mr-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <span key={day} className="text-xs text-gray-400 mb-1">
                      {day}
                    </span>
                  ))}
                </div>
                
                {/* Weeks as Columns */}
                <div className="flex space-x-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col space-y-1">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          className={`w-4 h-4 ${getCellColor(day.count)} rounded-sm`}
                          title={`${day.count} contributions on ${new Date(day.date).toDateString()}`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-sm text-gray-300">Less</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                  <div className="w-4 h-4 bg-indigo-900 rounded-sm"></div>
                  <div className="w-4 h-4 bg-indigo-700 rounded-sm"></div>
                  <div className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                  <div className="w-4 h-4 bg-indigo-400 rounded-sm"></div>
                </div>
                <span className="text-sm text-gray-300">More</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubHeatmap;