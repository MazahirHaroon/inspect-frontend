export const modules = import.meta.glob('../pages/challenges/*.jsx');
export const rawModules = import.meta.glob('../pages/challenges/*.jsx', {
  as: 'raw',
});
export const metaModules = import.meta.glob('../pages/challenges/*.jsx', {
  eager: true,
});

export const getAllMetadata = () => {
  return Object.entries(metaModules).map(([file, mod]) => ({
    file,
    meta: mod.meta || {},
  }));
};

const stripMetaFromSource = (source) => {
  if (!source) return '';

  return source
    .replace(/export\s+const\s+meta\s*=\s*{[\s\S]*?};\s*/m, '')
    .trim();
};

export const loadChallenge = async (fileName) => {
  const loader = modules[fileName];
  const rawLoader = rawModules[fileName];

  if (!loader) {
    throw new Error(`Challenge file not found: ${fileName}`);
  }

  const [mod, raw] = await Promise.all([loader(), rawLoader()]);

  const Comp = mod && (mod.default || mod);
  if (!Comp) throw new Error('Module has no default export.');

  const meta = mod.meta || {};

  return {
    Component: Comp,
    code: stripMetaFromSource(raw),
    meta,
  };
};
