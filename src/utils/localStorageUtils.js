const getMovieList = (key) => {
  const storedMovie = localStorage.getItem(key);
  return storedMovie ? JSON.parse(storedMovie) : [];
};

const saveInList = (key, item) => {
  const list = getMovieList(key);
  const exists = list.some((i) => i.id === item.id);
  if (!exists) {
    const updated = [...list, item];
    localStorage.setItem(key, JSON.stringify(updated));
  }
};

const removeFromList = (key, id) => {
  const newList = getMovieList(key).filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(newList));
};

const isInList = (key, id) => {
  return getMovieList(key).some((item) => item.id === id);
};

export const favoritesUtils = {
  get: () => getMovieList("favorites"),
  save: (item) => saveInList("favorites", item),
  remove: (id) => removeFromList("favorties", id),
  exist: (id) => isInList("favorites", id),
};

export const watchedUtils = {
  get: () => getMovieList("watched"),
  save: (item) => saveInList("watched", item),
  remove: (id) => removeFromList("watched", id),
  exist: (id) => isInList("watched", id),
};
