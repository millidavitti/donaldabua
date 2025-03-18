import { Endpoint } from "../endpoints";

export const USER_ENDPOINT = {
	list: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users`,
	read: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/${userId}`,
	create: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private`,
	update: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private/${userId}`,
	delete: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/users/private/${userId}`,
};
