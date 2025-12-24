import { useState } from 'react';
import { Child, Slow, Slower } from './utils';

const Parent = () => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <div className='flex'>
      <MainHeading content={'Component as Prop'} />
      <div className=''>
        <Slow />
      </div>

      <div className=''>
        <Slower />
      </div>
    </div>
  );
};

export default Parent;

// Solution:
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// const Parent = () => {
//   return (
//     <ComponentWithScroll>
//       <Child>
//         <h1>Parent Component</h1>
//         <Slow />
//         <Slower />
//       </Child>
//     </ComponentWithScroll>
//   );
// };

// export default Parent;

// const ComponentWithScroll = ({ children }) => {
//   const [scrollY, setScrollY] = useState(0);
//   return (
//     <div
//       className='flex flex-col gap-2 border-2 border-amber-400 h-lvh overflow-y-scroll relative'
//       onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}
//     >
//       <>
//         <p className='fixed top-10 right-10'>Scroll at {scrollY}</p>
//         {children}
//       </>
//     </div>
//   );
// };
