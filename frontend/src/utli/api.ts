const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const getToken = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
});

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
};

// Auth
export const signup = (email, password, name) =>
  fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ email, password, name }),
  }).then(handleResponse);

export const login = (email, password) =>
  fetch(`${API_URL}/api/auth/login`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);

// Jobs
export const getJobs = (params = {}) => {
  const qs = new URLSearchParams(params).toString();
  return fetch(`${API_URL}/api/jobs${qs ? '?' + qs : ''}`, { headers: headers() }).then(handleResponse);
};

export const getStats = () =>
  fetch(`${API_URL}/api/jobs/stats`, { headers: headers() }).then(handleResponse);

export const createJob = (data) =>
  fetch(`${API_URL}/api/jobs`, {
    method: 'POST', headers: headers(),
    body: JSON.stringify(data),
  }).then(handleResponse);

export const updateJob = (id, data) =>
  fetch(`${API_URL}/api/jobs/${id}`, {
    method: 'PATCH', headers: headers(),
    body: JSON.stringify(data),
  }).then(handleResponse);

export const deleteJob = (id) =>
  fetch(`${API_URL}/api/jobs/${id}`, {
    method: 'DELETE', headers: headers(),
  }).then((res) => { if (!res.ok) throw new Error('Delete failed'); });
  
// AI
export const tailorResume = (resume, jobDescription) =>
    fetch(`${API_URL}/api/ai/tailor-resume`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ resume, jobDescription }),
    }).then(handleResponse);
  
  export const generateCoverLetter = (resume, jobDescription, company, role) =>
    fetch(`${API_URL}/api/ai/cover-letter`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ resume, jobDescription, company, role }),
    }).then(handleResponse);
  
  export const scoreJobMatch = (resume, jobDescription) =>
    fetch(`${API_URL}/api/ai/match-score`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ resume, jobDescription }),
    }).then(handleResponse);