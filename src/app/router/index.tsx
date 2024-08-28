import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, ROUTES } from '@/shared';
import { PrivateWrapper } from './PrivateWrapper';


export const router = createBrowserRouter(
	[
		{
			path: ROUTES.ROOT,
			element: <PrivateWrapper />,
			children: [
				{
					index: true,
					element: <>ad</>,
				},
			],
		},
		{
			element: <AuthLayout />,
			children: [
				{
					index: true,
					path: ROUTES.USER.LOGIN,
				},
				{
					path: ROUTES.USER.REGISTER,
				},
			],
		},
	],
);

