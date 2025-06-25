// API call example
export const fetchSakeData = async () => {
  return await fetch('/api/sake').then(res => res.json());
};