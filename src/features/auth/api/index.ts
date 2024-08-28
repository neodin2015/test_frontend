import { useMutation } from '@tanstack/react-query';
import { ENDPOINTS, instanceAxios, QUERY_KEYS } from '@/shared';

interface IRegistrationBody {
	email: string;
	password: string;
	name: string;
}


interface ILogin {
	email: string;
	password: string;
}


const login = (body: ILogin) => instanceAxios.post<{token: string}>(ENDPOINTS.LOGIN, body);

export const useLogin = () => useMutation({
	mutationKey: [QUERY_KEYS.USERS.LOGIN],
	mutationFn: login,
});

const registration = (data: IRegistrationBody) => instanceAxios.post<{token: string}>(ENDPOINTS.REGISTER, data);
export const useRegister = () => useMutation({
	mutationKey: [QUERY_KEYS.USERS.REGISTER],
	mutationFn: registration,
});
