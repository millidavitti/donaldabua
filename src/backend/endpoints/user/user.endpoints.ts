export const USER_ENDPOINT = {
	getUsers: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users`,
	getUser: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/me`,
	createUser: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/me`,
	updateUser: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/me`,
	deleteUser: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/me`,
};
