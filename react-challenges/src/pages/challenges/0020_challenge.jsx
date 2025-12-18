import { useState } from 'react';

export const meta = {
  title: 'Final state after multiple setState calls',
  type: 'find-output',
  tags: ['useState'],
  question: `
What will be the final value displayed on screen after these interactions?

Assume:
- The component mounts once.
- The user clicks the button exactly once.
- React state updates inside the event replace the object.
`,
  solution: `
Final rendered value: 1

Explanation:
- Both setState calls read from the same stale state.
- Each call computes { count: 1 }.
- The second update overwrites the first with the same value.
`,
};

export const starterCode = `
import { useState } from 'react';

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
`;

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
