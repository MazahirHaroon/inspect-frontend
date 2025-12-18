import { Suspense } from 'react';

const Preview = ({ loading, error, ActiveComponent }) => {
  return (
    <section className='preview'>
      <h4>Preview</h4>

      {!loading && !error && ActiveComponent && (
        <Suspense fallback={<div>Rendering preview…</div>}>
          <div className='preview-box'>
            <ActiveComponent />
          </div>
        </Suspense>
      )}

      {loading && <div className='status'>Loading preview…</div>}
    </section>
  );
};

export default Preview;
