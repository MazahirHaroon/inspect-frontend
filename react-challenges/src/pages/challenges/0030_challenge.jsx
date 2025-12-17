import { useState } from 'react';

export const meta = {
  title: 'React: Click Counter (Hooks)',
  question: `
Complete the component so that clicking the button increments the count.

Requirements:
- Use useState
- Do not use class components
  `,
  solution: `export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
};

export default function Counter() {
  // complete this
  return (
    <div>
      <p>Count: {/* show count */}</p>
      <button>Increment</button>
    </div>
  );
}
