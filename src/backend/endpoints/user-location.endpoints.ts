import { BASE_URL } from ".";

export const USER_LOCATION_ENDPOINTS = {
	get: (userId: string) => `${BASE_URL}/user-locations/public/${userId}`,
	create: `${BASE_URL}/user-locations/private`,
	update: (userId: string) => `${BASE_URL}/user-locations/private/${userId}`,
	delete: (userId: string) => `${BASE_URL}/user-locations/private/${userId}`,
};
