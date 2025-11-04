const modules = import.meta.glob("./*.js", { eager: true });

export const patches = Object.values(modules)
  .map((mod) => Object.values(mod)[0])
  .sort((a, b) => new Date(b.date) - new Date(a.date));
