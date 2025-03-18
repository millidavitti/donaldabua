export const LOCATION_ENDPOINT = {
	read: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/${userId}`,
	update: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/private/${userId}`,
};
