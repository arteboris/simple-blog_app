import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const addPostOnServer = post => axios.post('/posts', post);

export const getPostsonServer = () => axios.get('/posts');

export const getPostIdsonServer = postId => axios.get(`/posts/${postId}`);

export const deletePostIdsonServer = postId => axios.delete(`/posts/${postId}`);
