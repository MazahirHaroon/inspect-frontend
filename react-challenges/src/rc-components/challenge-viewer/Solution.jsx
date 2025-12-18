import { useState } from 'react';

const Solution = ({ solution }) => {
  const [showSolution, setShowSolution] = useState(false);
  return (
    <section className='solution'>
      <div>
        <h4 style={{ margin: 0 }}>Solution / Explanation</h4>

        <button
          className='reveal-btn'
          onClick={() => setShowSolution((v) => !v)}
        >
          {showSolution ? 'Hide solution' : 'Reveal solution'}
        </button>
      </div>

      {showSolution ? (
        <pre className='solution-text'>
          <code>{solution || 'No solution provided.'}</code>
        </pre>
      ) : (
        <div className='status'>
          Click “Reveal solution” after attempting the challenge.
        </div>
      )}
    </section>
  );
};

export default Solution;
