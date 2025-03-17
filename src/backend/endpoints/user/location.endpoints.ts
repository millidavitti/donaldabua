export const LOCATION_ENDPOINTS = {
	read: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/public/${userId}`,
	update: (userId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/private/${userId}`,
};
