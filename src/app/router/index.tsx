import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, ROUTES } from '@/shared';
import { PrivateWrapper } from './PrivateWrapper';
import { LoginPage } from '@/pages/login';
import { RegisterPage } from '@/pages/register';
import { MainPage } from '@/pages/main';
import { PublicWrapper } from './PublicWrapper';


export const router = createBrowserRouter(
	[
		{
			path: ROUTES.ROOT,
			element: <PrivateWrapper />,
			children: [
				{
					index: true,
					element: <MainPage />,
				},
			],
		},
		{
			element: <PublicWrapper />,
			children: [
				{
					element: <AuthLayout />,
					children: [
						{
							element: <LoginPage />,
							index: true,
							path: ROUTES.USER.LOGIN,
						},
						{
							element: <RegisterPage />,
							path: ROUTES.USER.REGISTER,
						},
					],
				},
			],
		},
	],
);

