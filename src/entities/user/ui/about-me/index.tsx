import React from 'react';
import { Card, Heading, List, ListItem } from '@chakra-ui/react';
import { useGetMe } from '@/entities';

export const AboutMe = () => {
	const { data } = useGetMe();
	return (
		<div>
			<Heading>About Me</Heading>
			<Card>
				<List>
					<ListItem>id: {data?.data.id}</ListItem>
					<ListItem>name: {data?.data.name}</ListItem>
					<ListItem>email: {data?.data.email}</ListItem>
				</List>
			</Card>
		</div>
	);
};
