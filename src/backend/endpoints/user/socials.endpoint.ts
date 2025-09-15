export const SOCIALS_ENDPOINT = {
	list: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/${userId}`,
	create: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/me`,
	update: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/me`,
	delete: (socialId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/socials/${socialId}`,
};
