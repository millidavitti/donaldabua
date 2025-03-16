import { BASE_URL } from "..";

export const USER_ENDPOINTS = {
	list: `${BASE_URL}/users/public`,
	read: (userId: string) => `${BASE_URL}/users/public/${userId}`,
	create: `${BASE_URL}/users/private`,
	update: (userId: string) => `${BASE_URL}/users/private/${userId}`,
	delete: (userId: string) => `${BASE_URL}/users/private/${userId}`,
};
