import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/shared';
import { useAuth } from '@/app/providers/AuthProviders';

export const PrivateWrapper = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.USER.LOGIN} />;
};
