import {
	Alert, AlertDescription,
	AlertIcon,
	Button,
	Card,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Text,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FORM_ERRORS, ROUTES } from '@/shared';
import { isAxiosError } from 'axios';
import { emailRegexp, passwordRegexp } from '@/shared/lib/regulars';
import { useRegister, useLogin } from '@/features/auth';
import { useAuth } from '@/app/providers/AuthProviders';

interface ISignUpForm {
	name: string;
	password: string;
	email: string;
}

export const RegisterForm = () => {
	const navigate = useNavigate();
	const { mutateAsync: signUp, error } = useRegister();
	const { mutateAsync: signIn } = useLogin();
	const { login } = useAuth();
	const getError = () => {
		if (error && isAxiosError(error) && error.response?.status === 401) {
			return 'Неверные данные';
		}
		return error?.message;
	};


	const {
		values,
		submitForm,
		errors,
		handleChange,
		handleBlur,
		touched,
		isSubmitting,
	} = useFormik<ISignUpForm>({
		initialValues: {
			name: '',
			password: '',
			email: '',
		},
		validate(values) {
			const errors: Partial<Record<keyof ISignUpForm, string>> = {};
			if (!emailRegexp.test(values.email)) {
				errors.email = FORM_ERRORS.EMAIL_IS_INCORRECT;
			}
			if (!values.name) {
				errors.name = FORM_ERRORS.FIELD_IS_REQUIRED;
			}
			if (!values.email) {
				errors.email = FORM_ERRORS.FIELD_IS_REQUIRED;
			}

			if (!values.password) {
				errors.password = FORM_ERRORS.FIELD_IS_REQUIRED;
			}
			if (!passwordRegexp.test(values.password)) {
				errors.password = FORM_ERRORS.PASSWORD_DOES_NOT_REQUIREMENTS;
			}
			return errors;
		},
		async onSubmit({ email, name, password }, { setSubmitting }) {
			setSubmitting(true);
			try {
				const response = await signUp({
					email,
					password,
					name,
				});
				if (response.data.token) {
					login(response.data.token);
					navigate(ROUTES.ROOT);
					return;
				}
				navigate(ROUTES.ROOT);
			} catch (e) {
				console.log('signUp error:', e);
			} finally {
				setSubmitting(false);
			}

		},
	});
	return (
		<Card p={5}>
			<Form>
				<FormControl mb={3} isInvalid={!!errors.email && touched.email}>
					<FormLabel>
						Email
					</FormLabel>
					<Input onBlur={handleBlur} onChange={handleChange} value={values.email} type='email' name='email' />
					<FormErrorMessage>
						{errors.email}
					</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors.name && touched.name} mb={3}>
					<FormLabel>
						Имя
					</FormLabel>
					<Input
						onBlur={handleBlur}
						onChange={handleChange}
						name='name'
						value={values.name}
						placeholder={'Введите имя'} />
					<FormErrorMessage>
						{errors.name}
					</FormErrorMessage>
				</FormControl>
				<FormControl mb={3} isInvalid={!!errors.password && touched.password}>
					<FormLabel>Пароль</FormLabel>
					<Input
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.password}
						name='password'
						placeholder={'Введите пароль'}
						type={'password'} />
					<FormLabel>
						<Text color={'gray'} fontSize={12}>
							Пароль должен содержать только латинские символы, обязательно иметь хотя
							бы одну заглавную букву и хотя бы одну цифру, а также быть не менее 6
							символов в длину
						</Text>
					</FormLabel>
					<FormErrorMessage>
						{errors.password}
					</FormErrorMessage>
				</FormControl>
				<Button isLoading={isSubmitting} onClick={submitForm}>Зарегистрироваться</Button>
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
