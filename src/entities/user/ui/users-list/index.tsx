import React from 'react';
import { useGetUsersList } from '@/entities';
import { Heading } from '@chakra-ui/react';

export const UsersList = () => {
	const { data } = useGetUsersList();
	return (
		<div>
			<Heading>Users</Heading>
			<ul>
				{
				data?.data.map((user) => (
					<li key={user.id}>
						{user.name}
					</li>
				))
				}
			</ul>
		</div>
	);
};
