// API call example
export const fetchCampingData = async () => {
  return await fetch('/api/camping').then(res => res.json());
};