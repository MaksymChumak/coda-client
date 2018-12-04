const apiUrl = process.env.REACT_APP_API_HOST || 'http://localhost:5000';

export const userHeaders = () => {
  const { token, username } = JSON.parse(localStorage.getItem('user'));
  return { headers: { 'X-User-Token': token, 'X-User-Username': username } };
};

export default apiUrl
