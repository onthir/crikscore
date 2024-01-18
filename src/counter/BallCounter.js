// BallCounter.js
import React, { useState } from 'react';
import './BallCounter.css';

const BallCounter = () => {
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color
  const [totalRuns, setTotalRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const handleBallClick = () => {
    if (balls < 5) {
      setBalls(balls + 1);
    } else {
      setOvers(overs + 1);
      setBalls(0);
    }
    setBackgroundColor(getRandomColor());
  };
// handle runs
const handleRunButtonClick = (run) => {
    setTotalRuns(totalRuns + run);
    handleBallClick();
  };

  const handleWdButtonClick = () => {
    setTotalRuns(totalRuns + 1);
  };

  const handleWtButtonClick = () => {
    setWickets(wickets + 1);
    // setTotalRuns(Math.floor(totalRuns / wickets)); // Calculate average runs per wicket
    handleBallClick();
  };

  const handleNbButtonClick = () => {
    setTotalRuns(totalRuns + 1);
  };


  const handleResetClick = () => {
    setOvers(0);
    setBalls(0);
    setTotalRuns(0);
    setWickets(0);
    setBackgroundColor('rgb(226, 199, 115)');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return 'rgb(226, 199, 115)';
  };

  return (
    <div className="ball-counter-container" style={{ backgroundColor }}>
      <div className="score">
        <p className='large-font'>{`Score: ${totalRuns}/${wickets}`}</p>
      </div>
      <div className="overs-balls">
        <p className="large-font">{`Over: ${overs}.${balls}`}</p>
      </div>
      <div className="buttons-container">
  <div className="top-buttons">
    {[0, 1, 2, 3, 4].map((run, index) => (
      <button
        key={index}
        className="run-button"
        onClick={() => (typeof run === 'number' ? handleRunButtonClick(run) : run === 'Wd' ? handleWdButtonClick() : run === 'Wt' ? handleWtButtonClick() : handleNbButtonClick())}
      >
        {run}
      </button>
    ))}
  </div>
  <div className="bottom-buttons">
  {[5, 6, 'Wd', 'Wt', 'NB'].map((run, index) => (
  <button
    key={index}
    className="run-button"
    onClick={() => (typeof run === 'number' ? handleRunButtonClick(run) : run === 'Wd' ? handleWdButtonClick() : run === 'Wt' ? handleWtButtonClick() : handleNbButtonClick())}
    data-type={run === 'NB' ? 'NB' : run === 'Wt' ? 'Wt' : run === 'Wd' ? 'Wd' : ''}
  >
    {run}
  </button>
))}
  </div>
</div>
      <div>
   
    
      </div>
      <button className="medium-button" onClick={handleResetClick}>
          Reset
        </button>
    </div>
  );
};
export default BallCounter;
