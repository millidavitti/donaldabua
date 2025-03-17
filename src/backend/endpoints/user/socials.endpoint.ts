import { BASE_URL } from "..";

export const SOCIALS_ENDPOINTS = {
	list: (userId: string) => `${BASE_URL}/socials/public/${userId}`,
	create: (userId: string) => `${BASE_URL}/socials/private/${userId}`,
	update: (socialAccountId: string) =>
		`${BASE_URL}/socials/private/${socialAccountId}`,
	delete: (socialAccountId: string) =>
		`${BASE_URL}/socials/private/${socialAccountId}`,
};
