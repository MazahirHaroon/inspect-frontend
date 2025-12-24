import { lazy } from 'react';
import { LESSONS } from './constants';

// for later
// export const modules = import.meta.glob('./pages/composition-techniques/*.jsx');

export const lessonList = [
  { name: LESSONS.EXAMPLE },
  { name: LESSONS.MOVE_STATE_DOWN },
  { name: LESSONS.COMPONENT_AS_CHILDREN_PROP },
  { name: LESSONS.COMPONENT_AS_PROP },
];

export const componentList = {
  [LESSONS.MOVE_STATE_DOWN]: lazy(() =>
    import('./pages/composition-techniques/move-state-down')
  ),
  [LESSONS.COMPONENT_AS_CHILDREN_PROP]: lazy(() =>
    import('./pages/composition-techniques/components-as-children-prop')
  ),
  [LESSONS.COMPONENT_AS_PROP]: lazy(() =>
    import('./pages/composition-techniques/components-as-props')
  ),
};
