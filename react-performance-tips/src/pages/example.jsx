import { useState } from 'react';
import { Button, MainHeading, SubHeading } from '../components';

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MainHeading content={'Example'} />
      <SubHeading content={`Parent Component: ${count}`} />
      <Button handleClick={() => setCount((prev) => prev + 1)}>
        {'Re-render'}
      </Button>
      <Child />
    </div>
  );
};

export default Parent;

function Child() {
  return <SubHeading content={'Child Component'} />;
}
