import { Suspense } from 'react';

const ChallengePage = ({
  active,
  meta,
  code,
  loading,
  error,
  ActiveComponent,
  onBack,
}) => {
  return (
    <div className='challenge-page'>
      <div className='detail-header'>
        <button className='back-btn' onClick={onBack}>
          ← Back
        </button>
        <h3 className='challenge-title'>{meta.title || active}</h3>
      </div>

      <section className='question'>
        <h4>Question</h4>
        <p>{meta.question || 'No question text provided.'}</p>
      </section>

      <section className='code'>
        <h4>Code</h4>
        {loading && <div className='status'>Loading code & preview…</div>}
        {error && <div className='status status-error'>Error: {error}</div>}

        {!loading && !error && (
          <pre className='code-block'>
            <code>{code || '// source not available'}</code>
          </pre>
        )}
      </section>

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

      <section className='solution'>
        <h4>Solution / Explanation</h4>

        <pre className='solution-text'>
          <code>{meta.solution || 'No solution provided'}</code>
        </pre>
      </section>
    </div>
  );
};

export default ChallengePage;
