import { useState, useEffect, useRef } from 'react';

const THEMES = [
  { key: 'default', label: 'Lavender' },
  { key: 'alt', label: 'Ocean (Dark)' },
  { key: 'sunset', label: 'Sunset' },
  { key: 'mint', label: 'Mint' },
];

function iconForTheme(key, size = 18) {
  if (key === 'alt') {
    // moon / ocean
    return (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden
      >
        <path
          d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
          fill='currentColor'
        />
      </svg>
    );
  }
  if (key === 'sunset') {
    // sun over horizon
    return (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden
      >
        <path
          d='M3 12h18'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
        <circle cx='12' cy='10' r='3.2' fill='currentColor' />
      </svg>
    );
  }
  if (key === 'mint') {
    // leaf / square for mint
    return (
      <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        aria-hidden
      >
        <rect x='4' y='4' width='16' height='16' rx='4' fill='currentColor' />
      </svg>
    );
  }
  // default -> sun/lavender
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' aria-hidden>
      <path
        d='M12 4V2M12 22v-2M4.93 4.93L3.51 3.51'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
      <circle cx='12' cy='12' r='3.2' fill='currentColor' />
    </svg>
  );
}

const ThemeSwitch = ({ themes = THEMES, storageKey = 'app-theme' }) => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || themes[0].key;
    } catch {
      return themes[0].key;
    }
  });

  const ref = useRef(null);
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(storageKey, theme);
    } catch {}
  }, [theme, storageKey]);

  function cycleTheme() {
    const idx = themes.findIndex((t) => t.key === theme);
    const next = themes[(idx + 1) % themes.length].key;
    setTheme(next);
  }

  function onSelect(key) {
    setTheme(key);
    setOpen(false);
  }

  const btnBase = {
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: 6,
    borderRadius: 8,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor',
  };

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          aria-label='Cycle theme'
          title='Cycle theme'
          onClick={cycleTheme}
          style={btnBase}
        >
          {iconForTheme(theme, 18)}
        </button>

        <button
          aria-haspopup='menu'
          aria-expanded={open}
          aria-label='Select theme'
          title='Select theme'
          onClick={() => setOpen((v) => !v)}
          style={btnBase}
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            aria-hidden
          >
            <path
              d='M6 9l6 6 6-6'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          role='menu'
          aria-label='Theme selector'
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 8,
            minWidth: 180,
            background: 'var(--card-bg, white)',
            border: '1px solid var(--border, rgba(0,0,0,0.08))',
            boxShadow: '0 8px 26px rgba(0,0,0,0.12)',
            borderRadius: 10,
            overflow: 'hidden',
            zIndex: 60,
          }}
        >
          {themes.map((t) => (
            <button
              key={t.key}
              role='menuitem'
              onClick={() => onSelect(t.key)}
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'center',
                padding: '10px 12px',
                width: '100%',
                border: 'none',
                background:
                  t.key === theme
                    ? 'var(--accent-soft, rgba(0,0,0,0.03))'
                    : 'transparent',
                color: 'var(--text, inherit)',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  width: 20,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {iconForTheme(t.key, 16)}
              </span>
              <span style={{ flex: 1 }}>{t.label}</span>
              {t.key === theme && (
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  aria-hidden
                >
                  <path
                    d='M20 6L9 17l-5-5'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;
