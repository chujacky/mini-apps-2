import React from 'react';

const ScorecardFrame = ({ frameScore, frame, index }) => {
  const currentFrameDisplay = {
    backgroundColor: frame + 1 === index + 1 ? 'lightGreen' : 'cyan',
  }
  return (
    <div className="frame-box">
      <div style={currentFrameDisplay} className="frame-label">{index + 1}</div>
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