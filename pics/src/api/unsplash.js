import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
  Authorization: 'Client-ID 899b132d2b2f76bbec6b0d6468d81cf6186f418061c660b4439909a481e30a78'
  }
});
