export const SOCIALS_ENDPOINT = {
	list: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/${userId}`,
	create: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/me`,
	update: (socialAccountId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/private/${socialAccountId}`,
	delete: (socialAccountId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/private/${socialAccountId}`,
};
