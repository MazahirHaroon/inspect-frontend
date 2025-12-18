export const meta = {
  title: 'React Timer — Start / Stop / Reset',
  type: 'write-code',
  tags: ['useState', 'useRef'],
  question: `Build a timer with Start, Stop, and Reset functionality.`,
  solution: `
import { useState, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <div>
      <p>Time: {seconds}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
`,
};

export const starterCode = `
export default function Timer() {
  return (
    <div>
      <p>Time:</p>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
}
`;

export default function Timer() {
  return (
    <div>
      <p>Time:</p>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
}
