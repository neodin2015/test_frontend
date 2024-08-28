import { ENDPOINTS, instanceAxios } from '@/shared';
import { useQuery } from '@tanstack/react-query';





const getMe = () => instanceAxios.get<{email: string; name: string; id: number}>(ENDPOINTS.ME);
const getUsersList = () => instanceAxios.get<{id: number; name: string; email: string}[]>(ENDPOINTS.USERS);
export const useGetMe = () => useQuery({
	queryKey: ['GET_ME'],
	queryFn: getMe,
});
export const useGetUsersList = () => useQuery({
	queryKey: ['GET_USERS_LIST'],
	queryFn: getUsersList,
});

