import React from 'react';
import { LogoutButton } from '@/features/auth/ui';
import { UsersList } from '@/entities/user/ui';
import { Card, Stack } from '@chakra-ui/react';
import { AboutMe } from '@/entities/user/ui/about-me';

export const MainPage = () => {
	return (
		<Stack bgColor={'dimgray'} minHeight={'100vh'} alignItems={'center'} justify={'center'}>
			<Card w={'50%'} p={5}>
				<h1>Main Page</h1>
				<AboutMe/>
				<UsersList />
				<LogoutButton />
			</Card>
		</Stack>

	);
};
