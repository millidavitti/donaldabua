export const PROFILE_TECHNOLOGY_ENDPOINT = {
	list: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profile-technologies/${profileId}`,

	update: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/profile-technologies/private/${profileId}`,
};
