import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from '@/app/providers/AuthProviders';

export const LogoutButton = () => {
	const { logout } = useAuth();
	return (
		<Button onClick={logout}>
			Выйти
		</Button>
	);
};
