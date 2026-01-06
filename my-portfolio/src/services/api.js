import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH API ====================
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
  register: (userData) => api.post('/auth/register', userData),
  refreshToken: () => api.post('/auth/refresh'),
  verifyToken: () => api.get('/auth/verify'),
};

// ==================== CONTACT API ====================
export const contactAPI = {
  // Read
  getAllContacts: () => api.get('/contacts'),
  getContactById: (id) => api.get(`/contacts/${id}`),
  submitContact: (contactData) => api.post('/contact', contactData),
  
  // Update
  updateContact: (id, contactData) => api.put(`/contacts/${id}`, contactData),
  
  // Delete
  deleteContact: (id) => api.delete(`/contacts/${id}`),
};

// ==================== PROJECTS API ====================
export const projectsAPI = {
  // Read
  getProjects: () => api.get('/projects'),
  getProjectById: (id) => api.get(`/projects/${id}`),
  getProjectsByCategory: (category) => api.get(`/projects/category/${category}`),
  // Create
  createProject: (projectData) => api.post('/projects', projectData),
  // Update
  updateProject: (id, projectData) => api.put(`/projects/${id}`, projectData),

  // Delete
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

// ==================== SKILLS API ====================
export const skillsAPI = {
  // Read
  getAllSkills: () => api.get('/skills'),
  getSkillById: (id) => api.get(`/skills/${id}`),
  
  // Create
  createSkill: (skillData) => api.post('/skills', skillData),
  
  // Update
  updateSkill: (id, skillData) => api.put(`/skills/${id}`, skillData),
  
  // Delete
  deleteSkill: (id) => api.delete(`/skills/${id}`),
};

// ==================== EXPERIENCE API ====================
export const experienceAPI = {
  // Read
  getAllExperiences: () => api.get('/experiences'),
  getExperienceById: (id) => api.get(`/experiences/${id}`),
  
  // Create
  createExperience: (expData) => api.post('/experiences', expData),
  
  // Update
  updateExperience: (id, expData) => api.put(`/experiences/${id}`, expData),
  
  // Delete
  deleteExperience: (id) => api.delete(`/experiences/${id}`),
};

// ==================== ABOUT API ====================
export const aboutAPI = {
  // Read
  getAboutInfo: () => api.get('/about'),
  
  // Update
  updateAboutInfo: (aboutData) => api.put('/about', aboutData),
};

// ==================== SOCIAL LINKS API ====================
export const socialLinksAPI = {
  // Read
  getAllSocialLinks: () => api.get('/social-links'),
  getSocialLinkById: (id) => api.get(`/social-links/${id}`),
  
  // Create
  createSocialLink: (linkData) => api.post('/social-links', linkData),
  
  // Update
  updateSocialLink: (id, linkData) => api.put(`/social-links/${id}`, linkData),
  
  // Delete
  deleteSocialLink: (id) => api.delete(`/social-links/${id}`),
};

// ==================== RESUME API ====================
export const resumeAPI = {
  // Read
  getResume: () => api.get('/resume'),
  downloadResume: () => api.get('/resume/download', { responseType: 'blob' }),
  
  // Upload
  uploadResume: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/resume/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  
  // Update metadata
  updateResume: (resumeData) => api.put('/resume', resumeData),
};

// ==================== STATISTICS API ====================
export const statsAPI = {
  // Read
  getStats: () => api.get('/stats'),
  getStatById: (id) => api.get(`/stats/${id}`),
  
  // Update
  updateStats: (statData) => api.put('/stats', statData),
};

// ==================== EMAIL API ====================
export const emailAPI = {
  sendEmail: (emailData) => api.post('/email/send', emailData),
  sendAutoReply: (recipientData) => api.post('/email/auto-reply', recipientData),
  getEmailTemplates: () => api.get('/email/templates'),
};

// ==================== FILE UPLOAD API ====================
export const fileAPI = {
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/files/upload/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  
  uploadFile: (file, type = 'general') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    return api.post('/files/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  
  deleteFile: (fileId) => api.delete(`/files/${fileId}`),
};

// ==================== ADMIN/DASHBOARD API ====================
export const adminAPI = {
  // Dashboard stats
  getDashboardStats: () => api.get('/admin/dashboard/stats'),
  
  // Get all data for admin panel
  getAdminData: () => api.get('/admin/data'),
  
  // Bulk operations
  bulkUpdateProjects: (updates) => api.post('/admin/projects/bulk-update', updates),
  bulkDeleteProjects: (ids) => api.post('/admin/projects/bulk-delete', { ids }),
};

export default api;