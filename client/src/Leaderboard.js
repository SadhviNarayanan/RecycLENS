import React from 'react';
import './Leaderboard.css'; // We'll define this below
import recycleIcon from './trash-can-blue.png'; // optional
import compostIcon from './trash-can-green.png'; // optional

function ProgressBar({ label, percent, color }) {
  return (
    <div className="progress-bar-container">
      <div className="label">{label}</div>
      <div className="progress-bar-wrapper">
        <div className="progress-bar-fill" style={{ width: `${percent}%`, backgroundColor: color }} />
        <div className="progress-bar-percent">{percent}%</div>
      </div>
    </div>
  );
}

function Leaderboard() {
  const recycleData = [
    { college: "Claremont McKenna College", score: 92 },
    { college: "Pomona College", score: 87 },
    { college: "Scripps College", score: 75 },
    { college: "Harvey Mudd College", score: 63 },
    { college: "Pitzer", score: 63 },
  ];

  const compostData = [
    { college: "Harvey Mudd College", score: 90 },
    { college: "Pomona College", score: 88 },
    { college: "Pitzer", score: 80 },
    { college: "Scripps College", score: 72 },
    { college: "Claremont McKenna College", score: 65 },
    
  ];

  return (
    <div className="leaderboard-page">
      <h1 className="title">♻️ Sustainability Leaderboard</h1>
      <p className="subtitle">Top Colleges in Recycling and Composting</p>

      <div className="section">
        <h2><img src={recycleIcon} alt="recycle" className="icon" /> Recycling Champs</h2>
        {recycleData.map((entry, idx) => (
          <ProgressBar
            key={idx}
            label={entry.college}
            percent={entry.score}
            color="#66bb6a"
          />
        ))}
      </div>

      <div className="section">
        <h2><img src={compostIcon} alt="compost" className="icon" /> Composting Heroes</h2>
        {compostData.map((entry, idx) => (
          <ProgressBar
            key={idx}
            label={entry.college}
            percent={entry.score}
            color="#a5d6a7"
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
