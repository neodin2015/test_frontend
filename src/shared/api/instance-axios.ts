import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

instanceAxios.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
});

