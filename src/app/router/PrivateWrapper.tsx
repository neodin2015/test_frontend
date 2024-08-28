import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/shared';

export const PrivateWrapper = () => {
	const isAuthenticated = false
	return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.USER.LOGIN} />;
};
