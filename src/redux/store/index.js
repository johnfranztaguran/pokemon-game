let reduxStore;

function setStore(store) {
  reduxStore = store;
}

function getStore() {
  if (!reduxStore) {
    return {};
  }
  return reduxStore;
}

export { setStore, getStore };
