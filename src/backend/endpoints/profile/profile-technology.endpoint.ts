export const PROFILE_TECHNOLOGY_ENDPOINTS = {
	list: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profile-technologies/public/${profileId}`,

	update: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profile-technologies/private/${profileId}`,
};
