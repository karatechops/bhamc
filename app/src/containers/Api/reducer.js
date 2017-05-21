function api(state) {
  if (!state) {
    return {
      apiUrl: 'http://api.bhamc.com',
    };
  }

  return state;
}

export default api;
