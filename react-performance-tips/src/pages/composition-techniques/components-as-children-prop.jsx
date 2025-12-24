import { useState } from 'react';
import { Child, Slow, Slower } from './utils';

import { MainHeading, SubHeading } from '../../components';

const Parent = () => {
  const [scrollY, setScrollY] = useState(0);
  return (
    <div
      className='flex flex-col gap-2 border-2 border-amber-400 h-screen overflow-y-scroll relative'
      onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}
    >
      <Child>
        <p className='fixed top-10 right-10'>Scroll at {scrollY}</p>
        <MainHeading content={'Component as Children Prop'} />
        <SubHeading content={'Parent Component'} />
        <Slow />
        <Slower />
      </Child>
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
//        <MainHeading content={'Parent Component'} />
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
