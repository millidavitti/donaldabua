export const LOCATION_ENDPOINT = {
	getLocation: () =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/me`,
	updateLocation: () =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/locations/me`,
};
