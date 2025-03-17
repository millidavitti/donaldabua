export const USER_ENDPOINTS = {
	list: `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/public`,
	read: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/public/${userId}`,
	create: `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private`,
	update: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private/${userId}`,
	delete: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private/${userId}`,
};
