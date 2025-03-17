export const PROFILE_ENDPOINTS = {
	list: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/public/${userId}`,
	create: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/private/${userId}`,
	update: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/private/${profileId}`,
	delete: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profiles/private/${profileId}`,
};
