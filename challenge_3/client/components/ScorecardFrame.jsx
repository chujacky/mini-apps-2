import React from 'react';

const ScorecardFrame = ({ frameScore, frame }) => {
  return (
    <div className="frame-box">
      <div className="frame-label">{frame + 1}</div>
      <div className="bowls-box">
        {frameScore.bowlScores.map((bowl, index) => {
          return (
            <div key={`bowl${index}`} >{bowl}</div>
          );
        })}
      </div>
      <div className="frame-total">{frameScore.frameScore}</div>
    </div>
  )

}

export default ScorecardFrame;