export const sleep = (seconds) => {
  return new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000));
};

export const blockFor = (ms) => {
  const start = performance.now();
  while (performance.now() - start < ms) {}
};
