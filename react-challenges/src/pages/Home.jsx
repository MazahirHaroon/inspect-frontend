import { useState, useMemo } from 'react';
import '@style/home.css';

import { ThemeSwitch } from '@rc-components';
import { ListItem, ChallengePage } from '@challenge-viewer';
import { loadChallenge, modules, getAllMetadata } from '@utils';

const Home = () => {
  const fileKeys = useMemo(() => Object.keys(modules).sort(), []);
  const metadataList = useMemo(() => getAllMetadata(), []);

  const metaLookup = useMemo(() => {
    return metadataList.reduce((acc, item) => {
      acc[item.file] = item.meta || {};
      return acc;
    }, {});
  }, [metadataList]);

  const [active, setActive] = useState(null);
  const [ActiveComponent, setActiveComponent] = useState(null);
  const [code, setCode] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function openChallenge(filename) {
    setLoading(true);
    setError(null);
    setActiveComponent(null);
    setActive(filename);

    try {
      const {
        Component,
        code: codeText,
        meta: moduleMeta,
      } = await loadChallenge(filename);

      setActiveComponent(() => Component);
      setCode(codeText || '');
      setMeta(moduleMeta || {});
    } catch (err) {
      console.error(err);
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  function closeDetail() {
    setActive(null);
    setActiveComponent(null);
    setCode('');
    setMeta({});
    setError(null);
  }

  return (
    <div className='app'>
      <aside className='sidebar'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <h2 className='sidebar-title'>React Challenges</h2>

          <ThemeSwitch />
        </div>

        <div className='list' style={{ marginTop: 12 }}>
          {fileKeys.length === 0 && (
            <div className='no-challenges'>
              No challenges found in <code>src/challenges/</code>
            </div>
          )}

          {fileKeys.map((filename, index) => (
            <ListItem
              key={filename}
              index={index}
              filename={filename}
              title={metaLookup[filename]?.title || `Challenge ${index + 1}`}
              onClick={openChallenge}
            />
          ))}
        </div>
      </aside>

      <main className='detail'>
        {!active && (
          <div className='empty'>
            <h3>Select a challenge from the left</h3>
            <p>You'll see the question, the code, and the live preview here.</p>
          </div>
        )}

        {active && (
          <ChallengePage
            active={active}
            meta={meta}
            code={code}
            loading={loading}
            error={error}
            ActiveComponent={ActiveComponent}
            onBack={closeDetail}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
