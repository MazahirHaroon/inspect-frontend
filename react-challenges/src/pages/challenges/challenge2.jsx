export const meta = {
  title: 'Memo + useCallback render question',
  question: `What does this component log to the console, and how many times will Child render (assume parent mounts once and no external rerenders happen)?

Short: what lines are logged and how many Child render prints?`,
  solution: `Short answer:
- Console prints: "Button rendered"
- Button renders 1 time

Explanation: The Button is memoized with React.memo and the handler is wrapped in useCallback with empty deps; the function reference does not change, so props are stable and Button does not re-render on parent state updates.`,
};

import { useState, useCallback, memo } from 'react';

const Button = memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click</button>;
});

export default function Challenge1() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((c) => c + 1);
  const memoizedHandler = useCallback(handleClick, []);

  return (
    <div style={{ padding: 12 }}>
      <p>{count}</p>
      <Button onClick={memoizedHandler} />
    </div>
  );
}
