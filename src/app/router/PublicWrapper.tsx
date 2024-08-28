import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/shared';
import { useAuth } from '@/app/providers/AuthProviders';

export const PublicWrapper = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Navigate to={ROUTES.ROOT} /> : <Outlet />;
};
