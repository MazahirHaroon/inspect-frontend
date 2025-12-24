import { useState } from 'react';
import { Child, Slow, Slower } from './utils';
import { MainHeading, Button, FormModal, SubHeading } from '../../components';

const Parent = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <Child>
        <MainHeading content={'Move State Down'} />
        <SubHeading content={'Parent Component'} />
        {modalState && <FormModal />}
        <Button handleClick={() => setModalState((prev) => !prev)}>
          {modalState ? 'Close' : 'Open'}
        </Button>
        <Slow />
        <Slower />
      </Child>
    </div>
  );
};

export default Parent;

// Better Approach:
// const Parent = () => {
//   return (
//     <div>
//       <Child>
//       <MainHeading content={'Move State Down'} />
//       <SubHeading content={'Parent Component'} />
//         <ModalButton />
//         <Slow />
//         <Slower />
//       </Child>
//     </div>
//   );
// };

// export default Parent;

// const ModalButton = () => {
//   const [modalState, setModalState] = useState(false);
//   return (
//     <>
//       <Button handleClick={() => setModalState((prev) => !prev)}>
//         {modalState ? 'Close' : 'Open'}
//       </Button>
//       {modalState && <FormModal />}
//     </>
//   );
// };
