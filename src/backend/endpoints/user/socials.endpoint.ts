import { BASE_URL } from "..";

export const SOCIALS_ENDPOINTS = {
	list: (userId: string) => `${BASE_URL}/user-socials/public/${userId}`,
	create: (userId: string) => `${BASE_URL}/user-socials/private/${userId}`,
	update: (socialAccountId: string) =>
		`${BASE_URL}/user-socials/private/${socialAccountId}`,
	delete: (socialAccountId: string) =>
		`${BASE_URL}/user-socials/private/${socialAccountId}`,
};
