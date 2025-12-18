export const meta = {
  title: 'React State Bug',
  type: 'debug',
  tags: ['debug', 'props', 'useState'],

  question: `
Fix the bug so the displayed value updates when value prop changes.

Note:
- Modify code minimally.
`,
  solution: `
import { useEffect, useState } from 'react';

export default function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Display value={count} />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

function Display({ value }) {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  return <p>{state}</p>;
}
`,
};

export const starterCode = `
import { useState } from 'react';

export default function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Display value={count} />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

function Display({ value }) {
  const [state, setState] = useState(value);
  return <p>{state}</p>;
}
`;

import { useState } from 'react';

export default function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Display value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

function Display({ value }) {
  const [state, setState] = useState(value);
  return <p>{state}</p>;
}
