import {
	Alert,
	AlertDescription,
	AlertIcon,
	Button,
	Card,
	FormControl, FormErrorMessage,
	Input,
	Link,
	Stack,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { FORM_ERRORS, ROUTES } from '@/shared';
import { useLogin } from 'src/features/auth';
import { isAxiosError } from 'axios';
import { useFormik } from 'formik';
import { useAuth } from '@/app/providers/AuthProviders';

export const LoginForm = () => {
	const { mutateAsync: signIn, error } = useLogin();
	const { login } = useAuth();

	const getError = () => {
		if (error && isAxiosError(error) && error.response?.status === 401) {
			return 'Неверные данные';
		}
		return error?.message;
	};

	const { isSubmitting, handleChange, handleBlur, values, touched, errors, submitForm } = useFormik<{
		email: string;
		password: string;
	}>({
		initialValues: {
			email: '',
			password: '',
		},
		validate(values) {
			const error: {
				email?: string;
				password?: string;
			} = {};
			if (!values.email) {
				error.email = FORM_ERRORS.FIELD_IS_REQUIRED;
			}
			if (!values.password) {
				error.password = FORM_ERRORS.FIELD_IS_REQUIRED;
			}
			return error;
		},
		async onSubmit(value, { setSubmitting }) {
			setSubmitting(true);
			try {
				const data = await signIn(value);
				login(data.data.token);
			} catch (e) {
				console.log(e);
			} finally {
				setSubmitting(false);
			}
		},
	});
	return (
		<Card p={5}>
			<Form>
				<FormControl mb={3} isInvalid={!!errors.email && touched.email}>
					<Input onBlur={handleBlur} onChange={handleChange} placeholder='Email' type='email' name={'email'}
								 value={values.email} />
					<FormErrorMessage>
						{errors.email}
					</FormErrorMessage>
				</FormControl>
				<FormControl mb={3} isInvalid={!!errors.password && touched.password}>
					<Input onBlur={handleBlur} onChange={handleChange} placeholder='Пароль' type='password' name={'password'}
								 value={values.password} />
					<FormErrorMessage>
						{errors.password}
					</FormErrorMessage>
				</FormControl>
				<Stack>
					<Link color={'darkgreen'} href={ROUTES.USER.REGISTER}>Зарегистрироваться</Link>
					<Button isLoading={isSubmitting} onClick={submitForm}>Войти</Button>
				</Stack>
			</Form>
			{error &&
				<Alert my={3} status='error'>
					<AlertIcon />
					<AlertDescription>
						{getError()}
					</AlertDescription>
				</Alert>
			}
		</Card>
	);
};
