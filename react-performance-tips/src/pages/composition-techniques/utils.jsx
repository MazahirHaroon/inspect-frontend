import { SubHeading } from '../../components';
import { blockFor } from '../../utils/delay-functions';

export function Child({ children }) {
  return <>{children}</>;
}

export function Slow() {
  blockFor(2000);
  console.log('Slow Component Rendered');
  return (
    <div>
      <h1>Slow Component</h1>
      {[...Array(3000)].map((_, index) => (
        <div key={index}>
          <SubHeading content={'One'} />
          <SubHeading content={'Two'} />
        </div>
      ))}
    </div>
  );
}

export function Slower() {
  blockFor(3000);
  console.log('Slower Component Rendered');
  return (
    <div>
      <h1>Slower Component</h1>
      {[...Array(5000)].map((_, index) => (
        <div key={index}>
          <SubHeading content={'One'} />
          <SubHeading content={'Two'} />
        </div>
      ))}
    </div>
  );
}
