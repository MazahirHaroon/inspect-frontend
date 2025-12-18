import Solution from './Solution';
import Preview from './Preview';

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

      <section className='type'>
        <h4>Type:</h4>
        <p>{meta.type || 'No type provided.'}</p>
      </section>

      <section className='tags'>
        <h4>
          Tags:
          {meta && meta.tags
            ? meta.tags.map((tag) => <span className='tag'>{tag}</span>)
            : 'No tags provided.'}
        </h4>
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
      <div className='result-section'>
        <Preview
          loading={loading}
          error={error}
          ActiveComponent={ActiveComponent}
        />
        <Solution solution={meta.solution} />
      </div>
    </div>
  );
};

export default ChallengePage;
