import { BASE_URL } from ".";

export const USER_LOCATION_ENDPOINTS = {
	get: (userId: string) => `${BASE_URL}/user-locations/public/${userId}`,
	update: (userId: string) => `${BASE_URL}/user-locations/private/${userId}`,
};
