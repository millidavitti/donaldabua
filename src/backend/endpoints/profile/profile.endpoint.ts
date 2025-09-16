export const PROFILE_ENDPOINT = {
	list: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/${userId}`,
	create: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/me`,
	update: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/me`,
	delete: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/me`,
};
