import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<Stack bgColor={"dimgray"} overflow={'auto'} minHeight={'100vh'}  justify='center' alignItems={'center'} p={5}>
			<Outlet />
		</Stack>
	);
};
