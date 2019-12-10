import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const addPostOnServer = post => axios.post('/posts', post);

export const getPostsonServer = () => axios.get('/posts');

export const getPostIdsonServer = id =>
  axios.get(`/posts/${id}?_embed=comments`);

export const deletePostIdsonServer = id => axios.delete(`/posts/${id}`);

export const changePostIdonServer = (id, post) =>
  axios.put(`/posts/${id}`, post);

export const addCommentPostOnServer = comment =>
  axios.post('/comments', comment);
