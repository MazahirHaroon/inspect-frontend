import { useState } from 'react';

export const meta = {
  title: 'Final state after multiple setState calls',
  question: `
What will be the final value displayed on screen after these interactions?

Assume:
- The component mounts once.
- The user clicks the button exactly once.
- React state updates inside the event are NOT batched by merging (because they replace the object).
  `,
  solution: `
Final rendered value: 1

Explanation:
  - The state is an object: { count: 0 }. setState({ count: state.count + 1 })
    reads from the same stale state.
  - BOTH setState calls compute: { count: 0 + 1 } → { count: 1 }. 
  - Each call replaces the whole object — not merged — so the second 
    update overwrites the first with the SAME value.
  - Therefore the final render shows: 1
`,
};

export default function Challenge() {
  const [state, setState] = useState({ count: 0 });

  function increment() {
    setState({ count: state.count + 1 });
    setState({ count: state.count + 1 });
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>Inc</button>
    </div>
  );
}
