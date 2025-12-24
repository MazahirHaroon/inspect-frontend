import { useState, useEffect, Suspense } from 'react';

import { lessonList, componentList } from './data';
import { LESSONS } from './constants';

import Example from './pages/example';
import { Button, MainHeading, Loading } from './components';

const App = () => {
  const [lesson, setLesson] = useState(LESSONS.EXAMPLE);
  const [activeLesson, setActiveLesson] = useState(LESSONS.EXAMPLE);

  const handleLessonChange = (nextLesson) => {
    setActiveLesson(null);
    setLesson(nextLesson);
  };

  useEffect(() => {
    if (lesson !== null) {
      requestAnimationFrame(() => {
        setActiveLesson(lesson);
      });
    }
  }, [lesson]);

  return (
    <div className='flex flex-col p-4 h-screen'>
      <div className='bg-blue-400 border border-blue-500 p-2 m-2'>
        <MainHeading className='text-white' content='Choose Lesson' />
        <div className='flex gap-2 p-4'>
          {lessonList.map(({ name }) => (
            <Button key={name} handleClick={() => handleLessonChange(name)}>
              {name}
            </Button>
          ))}
        </div>
      </div>
      <div className='bg-gray-300 border border-gray-400 p-2 m-2 flex-1'>
        <Suspense fallback={<Loading />}>
          {activeLesson === null ? (
            <Loading /> // or null / skeleton
          ) : (
            <div key={activeLesson}>
              {(() => {
                const LessonComponent = componentList[activeLesson];
                return LessonComponent ? <LessonComponent /> : <Example />;
              })()}
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
