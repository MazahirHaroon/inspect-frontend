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

export const loadChallenge = async (fileName) => {
  const [mod] = await Promise.all([modules[fileName]()]);
  return {
    Component: mod.default,
    meta: mod.meta || {},
    code: mod.starterCode || '',
  };
};
