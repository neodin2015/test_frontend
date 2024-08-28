import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: 'http://localhost:3500/',
});

instanceAxios.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
});

